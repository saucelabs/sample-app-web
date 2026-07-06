/* istanbul ignore file */
// javascript
// File: `src/jest.setupTextEncoder.js`
// Robustly polyfill TextEncoder / TextDecoder for Jest/Node environments.
// Use existing globals if present, otherwise prefer `util` exports, then fall back
// to a minimal Buffer-based implementation so tests won't fail on older Node.

let TextEncoderImpl =
  (typeof globalThis !== "undefined" && globalThis.TextEncoder) ||
  (typeof global !== "undefined" && global.TextEncoder);
let TextDecoderImpl =
  (typeof globalThis !== "undefined" && globalThis.TextDecoder) ||
  (typeof global !== "undefined" && global.TextDecoder);

try {
  // Try Node's util (available in modern Node versions)
  const util = require("util");
  if (!TextEncoderImpl && util && typeof util.TextEncoder !== "undefined") {
    TextEncoderImpl = util.TextEncoder;
  }
  if (!TextDecoderImpl && util && typeof util.TextDecoder !== "undefined") {
    TextDecoderImpl = util.TextDecoder;
  }
} catch (err) {
  // ignore
}

// Minimal Buffer-based fallback for environments that lack TextEncoder/TextDecoder
if (!TextEncoderImpl) {
  class _TextEncoder {
    encode(input = "") {
      // Return a Uint8Array for compatibility
      const buf = Buffer.from(String(input), "utf8");
      return new Uint8Array(buf);
    }
  }
  TextEncoderImpl = _TextEncoder;
}

if (!TextDecoderImpl) {
  class _TextDecoder {
    constructor(encoding = "utf-8") {
      this.encoding = String(encoding || "utf-8");
    }
    decode(input) {
      if (input == null) return "";
      // Accept Buffer, Uint8Array, ArrayBuffer, or array-like
      if (Buffer.isBuffer(input)) return input.toString("utf8");
      if (input instanceof ArrayBuffer)
        return Buffer.from(new Uint8Array(input)).toString("utf8");
      if (ArrayBuffer.isView(input)) return Buffer.from(input).toString("utf8");
      // Fallback to String
      return String(input);
    }
  }
  TextDecoderImpl = _TextDecoder;
}

// Install onto globals if not already present
if (typeof global !== "undefined") {
  if (typeof global.TextEncoder === "undefined")
    global.TextEncoder = TextEncoderImpl;
  if (typeof global.TextDecoder === "undefined")
    global.TextDecoder = TextDecoderImpl;
}
if (typeof globalThis !== "undefined") {
  if (typeof globalThis.TextEncoder === "undefined")
    globalThis.TextEncoder = TextEncoderImpl;
  if (typeof globalThis.TextDecoder === "undefined")
    globalThis.TextDecoder = TextDecoderImpl;
}

// Polyfill basic MessagePort/MessageChannel/MessageEvent used by some web libs (undici, cheerio)
// Use an in-process lightweight implementation to avoid creating real worker_threads ports
// which can keep the Node process alive and produce Jest open-handle warnings.
let MessagePortImpl, MessageChannelImpl, MessageEventImpl;

// Minimal in-process polyfill
class _MessagePort {
  constructor() {
    this._onmessage = null;
    this._listeners = new Map();
    this._target = null; // set by MessageChannel
  }
  postMessage(msg) {
    // deliver async to mimic real ports
    const target = this._target;
    if (!target) return;
    setTimeout(() => {
      const ev = { data: msg };
      if (typeof target._onmessage === "function") target._onmessage(ev);
      const listeners = target._listeners.get("message");
      if (listeners) listeners.forEach((fn) => fn.call(target, ev));
    }, 0);
  }
  addEventListener(type, fn) {
    if (!this._listeners.has(type)) this._listeners.set(type, new Set());
    this._listeners.get(type).add(fn);
  }
  removeEventListener(type, fn) {
    const s = this._listeners.get(type);
    if (s) s.delete(fn);
  }
  start() {}
  close() {
    this._listeners.clear();
    this._onmessage = null;
    this._target = null;
  }
  // compatibility property
  set onmessage(fn) {
    this._onmessage = fn;
  }
  get onmessage() {
    return this._onmessage;
  }
}

class _MessageChannel {
  constructor() {
    this.port1 = new _MessagePort();
    this.port2 = new _MessagePort();
    this.port1._target = this.port2;
    this.port2._target = this.port1;
  }
}

MessagePortImpl = _MessagePort;
MessageChannelImpl = _MessageChannel;
MessageEventImpl = function MessageEvent(type, opts) {
  this.type = type;
  this.data = opts && opts.data;
};

if (typeof global !== "undefined") {
  if (typeof global.MessagePort === "undefined")
    global.MessagePort = MessagePortImpl;
  if (typeof global.MessageChannel === "undefined")
    global.MessageChannel = MessageChannelImpl;
  if (typeof global.MessageEvent === "undefined" && MessageEventImpl)
    global.MessageEvent = MessageEventImpl;
}
if (typeof globalThis !== "undefined") {
  if (typeof globalThis.MessagePort === "undefined")
    globalThis.MessagePort = MessagePortImpl;
  if (typeof globalThis.MessageChannel === "undefined")
    globalThis.MessageChannel = MessageChannelImpl;
  if (typeof globalThis.MessageEvent === "undefined" && MessageEventImpl)
    globalThis.MessageEvent = MessageEventImpl;
}

// Polyfill web streams (ReadableStream, WritableStream, TransformStream)
let ReadableStreamImpl, WritableStreamImpl, TransformStreamImpl;

try {
  const streamsWeb = require("stream/web");
  ReadableStreamImpl = streamsWeb.ReadableStream;
  WritableStreamImpl = streamsWeb.WritableStream;
  TransformStreamImpl = streamsWeb.TransformStream;
} catch (err) {
  try {
    // Install `web-streams-polyfill` if your Node version lacks stream/web
    const pony = require("web-streams-polyfill/ponyfill");
    ReadableStreamImpl = pony.ReadableStream;
    WritableStreamImpl = pony.WritableStream;
    TransformStreamImpl = pony.TransformStream;
  } catch (err2) {
    // No polyfill available — tests needing streams will still fail
  }
}

if (ReadableStreamImpl) {
  if (typeof global.ReadableStream === "undefined")
    global.ReadableStream = ReadableStreamImpl;
  if (typeof globalThis.ReadableStream === "undefined")
    globalThis.ReadableStream = ReadableStreamImpl;
}
if (WritableStreamImpl) {
  if (typeof global.WritableStream === "undefined")
    global.WritableStream = WritableStreamImpl;
  if (typeof globalThis.WritableStream === "undefined")
    globalThis.WritableStream = WritableStreamImpl;
}
if (TransformStreamImpl) {
  if (typeof global.TransformStream === "undefined")
    global.TransformStream = TransformStreamImpl;
  if (typeof globalThis.TransformStream === "undefined")
    globalThis.TransformStream = TransformStreamImpl;
}
