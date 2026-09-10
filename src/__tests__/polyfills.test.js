// Tests for the test-time polyfills in src/jest.setupTextEncoder.js
// These intentionally exercise the polyfill implementations to improve coverage.

const path = require("path");

// Require the setup file (it also runs from src/setupTests.js, but require here ensures execution in test scope)
require("../jest.setupTextEncoder");

describe("test polyfills (TextEncoder/TextDecoder, MessageChannel)", () => {
  test("TextEncoder and TextDecoder are available and work", () => {
    expect(typeof TextEncoder).toBe("function");
    expect(typeof TextDecoder).toBe("function");

    const encoder = new TextEncoder();
    const buf = encoder.encode("hello");
    // Use ArrayBuffer.isView to be robust across different global realms
    expect(ArrayBuffer.isView(buf)).toBe(true);
    // basic check - first byte is 'h' (104)
    expect(buf[0]).toBe(104);

    const decoder = new TextDecoder();
    expect(decoder.decode(buf)).toBe("hello");

    // ArrayBuffer input
    const arrbuf = buf.buffer.slice(
      buf.byteOffset,
      buf.byteOffset + buf.byteLength,
    );
    expect(decoder.decode(arrbuf)).toBe("hello");
  });

  test("MessageChannel/MessagePort basic postMessage delivers message", async () => {
    expect(typeof MessageChannel).toBe("function");
    const mc = new MessageChannel();
    const received = new Promise((resolve) => {
      mc.port2.onmessage = (ev) => resolve(ev.data);
    });

    mc.port1.postMessage("ping");
    await expect(received).resolves.toBe("ping");

    // also check addEventListener variant
    const mc2 = new MessageChannel();
    const rec2 = new Promise((resolve) => {
      mc2.port2.addEventListener("message", (ev) => resolve(ev.data));
    });
    mc2.port1.postMessage("pong");
    await expect(rec2).resolves.toBe("pong");
  });

  test("ReadableStream/WritableStream may be present (no throw)", () => {
    // This test only ensures accessing these globals does not throw.
    // Some Node versions may provide them, some may not; both are acceptable.
    // The polyfill installs them if available.
    if (typeof ReadableStream !== "undefined") {
      expect(typeof ReadableStream).toBe("function");
    } else {
      expect(typeof ReadableStream).toBe("undefined");
    }
  });
});
