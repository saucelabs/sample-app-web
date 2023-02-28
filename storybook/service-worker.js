!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module.default}:function getModuleExports(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=5)}([function(module,exports,__webpack_require__){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},function(module,exports,__webpack_require__){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},function(module,exports,__webpack_require__){"use strict";try{self["workbox:routing:5.1.4"]&&_()}catch(e){}},function(module,exports,__webpack_require__){"use strict";try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}},function(module,exports,__webpack_require__){"use strict";try{self["workbox:expiration:5.1.4"]&&_()}catch(e){}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(0);const messageGenerator=(code,...args)=>{let msg=code;return args.length>0&&(msg+=" :: "+JSON.stringify(args)),msg};class WorkboxError_WorkboxError extends Error{constructor(errorCode,details){super(messageGenerator(errorCode,details)),this.name=errorCode,this.details=details}}const quotaErrorCallbacks=new Set;const _cacheNameDetails={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},_createCacheName=cacheName=>[_cacheNameDetails.prefix,cacheName,_cacheNameDetails.suffix].filter(value=>value&&value.length>0).join("-"),cacheNames_getPrecacheName=userCacheName=>userCacheName||_createCacheName(_cacheNameDetails.precache),cacheNames_getRuntimeName=userCacheName=>userCacheName||_createCacheName(_cacheNameDetails.runtime);const getFriendlyURL=url=>new URL(String(url),location.href).href.replace(new RegExp("^"+location.origin),""),pluginUtils_filter=(plugins,callbackName)=>plugins.filter(plugin=>callbackName in plugin),_getEffectiveRequest=async({request:request,mode:mode,plugins:plugins=[]})=>{const cacheKeyWillBeUsedPlugins=pluginUtils_filter(plugins,"cacheKeyWillBeUsed");let effectiveRequest=request;for(const plugin of cacheKeyWillBeUsedPlugins)effectiveRequest=await plugin.cacheKeyWillBeUsed.call(plugin,{mode:mode,request:effectiveRequest}),"string"==typeof effectiveRequest&&(effectiveRequest=new Request(effectiveRequest));return effectiveRequest},matchWrapper=async({cacheName:cacheName,request:request,event:event,matchOptions:matchOptions,plugins:plugins=[]})=>{const cache=await self.caches.open(cacheName),effectiveRequest=await _getEffectiveRequest({plugins:plugins,request:request,mode:"read"});let cachedResponse=await cache.match(effectiveRequest,matchOptions);for(const plugin of plugins)if("cachedResponseWillBeUsed"in plugin){const pluginMethod=plugin.cachedResponseWillBeUsed;cachedResponse=await pluginMethod.call(plugin,{cacheName:cacheName,event:event,matchOptions:matchOptions,cachedResponse:cachedResponse,request:effectiveRequest})}return cachedResponse},cacheWrapper_put=async({cacheName:cacheName,request:request,response:response,event:event,plugins:plugins=[],matchOptions:matchOptions})=>{const effectiveRequest=await _getEffectiveRequest({plugins:plugins,request:request,mode:"write"});if(!response)throw new WorkboxError_WorkboxError("cache-put-with-no-response",{url:getFriendlyURL(effectiveRequest.url)});const responseToCache=await(async({request:request,response:response,event:event,plugins:plugins=[]})=>{let responseToCache=response,pluginsUsed=!1;for(const plugin of plugins)if("cacheWillUpdate"in plugin){pluginsUsed=!0;const pluginMethod=plugin.cacheWillUpdate;if(responseToCache=await pluginMethod.call(plugin,{request:request,response:responseToCache,event:event}),!responseToCache)break}return pluginsUsed||(responseToCache=responseToCache&&200===responseToCache.status?responseToCache:void 0),responseToCache||null})({event:event,plugins:plugins,response:response,request:effectiveRequest});if(!responseToCache)return void 0;const cache=await self.caches.open(cacheName),updatePlugins=pluginUtils_filter(plugins,"cacheDidUpdate"),oldResponse=updatePlugins.length>0?await matchWrapper({cacheName:cacheName,matchOptions:matchOptions,request:effectiveRequest}):null;try{await cache.put(effectiveRequest,responseToCache)}catch(error){throw"QuotaExceededError"===error.name&&await async function executeQuotaErrorCallbacks(){for(const callback of quotaErrorCallbacks)await callback()}(),error}for(const plugin of updatePlugins)await plugin.cacheDidUpdate.call(plugin,{cacheName:cacheName,event:event,oldResponse:oldResponse,newResponse:responseToCache,request:effectiveRequest})},cacheWrapper_match=matchWrapper;let canConstructResponseFromBodyStream_supportStatus;function dontWaitFor(promise){promise.then(()=>{})}class DBWrapper{constructor(name,version,{onupgradeneeded:onupgradeneeded,onversionchange:onversionchange}={}){this._db=null,this._name=name,this._version=version,this._onupgradeneeded=onupgradeneeded,this._onversionchange=onversionchange||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise((resolve,reject)=>{let openRequestTimedOut=!1;setTimeout(()=>{openRequestTimedOut=!0,reject(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const openRequest=indexedDB.open(this._name,this._version);openRequest.onerror=()=>reject(openRequest.error),openRequest.onupgradeneeded=evt=>{openRequestTimedOut?(openRequest.transaction.abort(),openRequest.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(evt)},openRequest.onsuccess=()=>{const db=openRequest.result;openRequestTimedOut?db.close():(db.onversionchange=this._onversionchange.bind(this),resolve(db))}}),this}async getKey(storeName,query){return(await this.getAllKeys(storeName,query,1))[0]}async getAll(storeName,query,count){return await this.getAllMatching(storeName,{query:query,count:count})}async getAllKeys(storeName,query,count){return(await this.getAllMatching(storeName,{query:query,count:count,includeKeys:!0})).map(entry=>entry.key)}async getAllMatching(storeName,{index:index,query:query=null,direction:direction="next",count:count,includeKeys:includeKeys=!1}={}){return await this.transaction([storeName],"readonly",(txn,done)=>{const store=txn.objectStore(storeName),target=index?store.index(index):store,results=[],request=target.openCursor(query,direction);request.onsuccess=()=>{const cursor=request.result;cursor?(results.push(includeKeys?cursor:cursor.value),count&&results.length>=count?done(results):cursor.continue()):done(results)}})}async transaction(storeNames,type,callback){return await this.open(),await new Promise((resolve,reject)=>{const txn=this._db.transaction(storeNames,type);txn.onabort=()=>reject(txn.error),txn.oncomplete=()=>resolve(),callback(txn,value=>resolve(value))})}async _call(method,storeName,type,...args){return await this.transaction([storeName],type,(txn,done)=>{const objStore=txn.objectStore(storeName),request=objStore[method].apply(objStore,args);request.onsuccess=()=>done(request.result)})}close(){this._db&&(this._db.close(),this._db=null)}}DBWrapper.prototype.OPEN_TIMEOUT=2e3;const methodsToWrap={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[mode,methods]of Object.entries(methodsToWrap))for(const method of methods)method in IDBObjectStore.prototype&&(DBWrapper.prototype[method]=async function(storeName,...args){return await this._call(method,storeName,mode,...args)});const fetchWrapper_fetch=async({request:request,fetchOptions:fetchOptions,event:event,plugins:plugins=[]})=>{if("string"==typeof request&&(request=new Request(request)),event instanceof FetchEvent&&event.preloadResponse){const possiblePreloadResponse=await event.preloadResponse;if(possiblePreloadResponse)return possiblePreloadResponse}const failedFetchPlugins=pluginUtils_filter(plugins,"fetchDidFail"),originalRequest=failedFetchPlugins.length>0?request.clone():null;try{for(const plugin of plugins)if("requestWillFetch"in plugin){const pluginMethod=plugin.requestWillFetch,requestClone=request.clone();request=await pluginMethod.call(plugin,{request:requestClone,event:event})}}catch(err){throw new WorkboxError_WorkboxError("plugin-error-request-will-fetch",{thrownError:err})}const pluginFilteredRequest=request.clone();try{let fetchResponse;fetchResponse="navigate"===request.mode?await fetch(request):await fetch(request,fetchOptions);for(const plugin of plugins)"fetchDidSucceed"in plugin&&(fetchResponse=await plugin.fetchDidSucceed.call(plugin,{event:event,request:pluginFilteredRequest,response:fetchResponse}));return fetchResponse}catch(error){0;for(const plugin of failedFetchPlugins)await plugin.fetchDidFail.call(plugin,{error:error,event:event,originalRequest:originalRequest.clone(),request:pluginFilteredRequest.clone()});throw error}};async function copyResponse(response,modifier){const clonedResponse=response.clone(),responseInit={headers:new Headers(clonedResponse.headers),status:clonedResponse.status,statusText:clonedResponse.statusText},modifiedResponseInit=modifier?modifier(responseInit):responseInit,body=function canConstructResponseFromBodyStream(){if(void 0===canConstructResponseFromBodyStream_supportStatus){const testResponse=new Response("");if("body"in testResponse)try{new Response(testResponse.body),canConstructResponseFromBodyStream_supportStatus=!0}catch(error){canConstructResponseFromBodyStream_supportStatus=!1}canConstructResponseFromBodyStream_supportStatus=!1}return canConstructResponseFromBodyStream_supportStatus}()?clonedResponse.body:await clonedResponse.blob();return new Response(body,modifiedResponseInit)}__webpack_require__(4);const normalizeURL=unNormalizedUrl=>{const url=new URL(unNormalizedUrl,location.href);return url.hash="",url.href};class CacheTimestampsModel_CacheTimestampsModel{constructor(cacheName){this._cacheName=cacheName,this._db=new DBWrapper("workbox-expiration",1,{onupgradeneeded:event=>this._handleUpgrade(event)})}_handleUpgrade(event){const objStore=event.target.result.createObjectStore("cache-entries",{keyPath:"id"});objStore.createIndex("cacheName","cacheName",{unique:!1}),objStore.createIndex("timestamp","timestamp",{unique:!1}),(async name=>{await new Promise((resolve,reject)=>{const request=indexedDB.deleteDatabase(name);request.onerror=()=>{reject(request.error)},request.onblocked=()=>{reject(new Error("Delete blocked"))},request.onsuccess=()=>{resolve()}})})(this._cacheName)}async setTimestamp(url,timestamp){const entry={url:url=normalizeURL(url),timestamp:timestamp,cacheName:this._cacheName,id:this._getId(url)};await this._db.put("cache-entries",entry)}async getTimestamp(url){return(await this._db.get("cache-entries",this._getId(url))).timestamp}async expireEntries(minTimestamp,maxCount){const entriesToDelete=await this._db.transaction("cache-entries","readwrite",(txn,done)=>{const request=txn.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),entriesToDelete=[];let entriesNotDeletedCount=0;request.onsuccess=()=>{const cursor=request.result;if(cursor){const result=cursor.value;result.cacheName===this._cacheName&&(minTimestamp&&result.timestamp<minTimestamp||maxCount&&entriesNotDeletedCount>=maxCount?entriesToDelete.push(cursor.value):entriesNotDeletedCount++),cursor.continue()}else done(entriesToDelete)}}),urlsDeleted=[];for(const entry of entriesToDelete)await this._db.delete("cache-entries",entry.id),urlsDeleted.push(entry.url);return urlsDeleted}_getId(url){return this._cacheName+"|"+normalizeURL(url)}}class CacheExpiration_CacheExpiration{constructor(cacheName,config={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=config.maxEntries,this._maxAgeSeconds=config.maxAgeSeconds,this._cacheName=cacheName,this._timestampModel=new CacheTimestampsModel_CacheTimestampsModel(cacheName)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const minTimestamp=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,urlsExpired=await this._timestampModel.expireEntries(minTimestamp,this._maxEntries),cache=await self.caches.open(this._cacheName);for(const url of urlsExpired)await cache.delete(url);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,dontWaitFor(this.expireEntries()))}async updateTimestamp(url){await this._timestampModel.setTimestamp(url,Date.now())}async isURLExpired(url){if(this._maxAgeSeconds){return await this._timestampModel.getTimestamp(url)<Date.now()-1e3*this._maxAgeSeconds}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}__webpack_require__(1);const precachePlugins_plugins=[],precachePlugins={get:()=>precachePlugins_plugins,add(newPlugins){precachePlugins_plugins.push(...newPlugins)}};function createCacheKey(entry){if(!entry)throw new WorkboxError_WorkboxError("add-to-cache-list-unexpected-type",{entry:entry});if("string"==typeof entry){const urlObject=new URL(entry,location.href);return{cacheKey:urlObject.href,url:urlObject.href}}const{revision:revision,url:url}=entry;if(!url)throw new WorkboxError_WorkboxError("add-to-cache-list-unexpected-type",{entry:entry});if(!revision){const urlObject=new URL(url,location.href);return{cacheKey:urlObject.href,url:urlObject.href}}const cacheKeyURL=new URL(url,location.href),originalURL=new URL(url,location.href);return cacheKeyURL.searchParams.set("__WB_REVISION__",revision),{cacheKey:cacheKeyURL.href,url:originalURL.href}}class PrecacheController_PrecacheController{constructor(cacheName){this._cacheName=cacheNames_getPrecacheName(cacheName),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(entries){const urlsToWarnAbout=[];for(const entry of entries){"string"==typeof entry?urlsToWarnAbout.push(entry):entry&&void 0===entry.revision&&urlsToWarnAbout.push(entry.url);const{cacheKey:cacheKey,url:url}=createCacheKey(entry),cacheMode="string"!=typeof entry&&entry.revision?"reload":"default";if(this._urlsToCacheKeys.has(url)&&this._urlsToCacheKeys.get(url)!==cacheKey)throw new WorkboxError_WorkboxError("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(url),secondEntry:cacheKey});if("string"!=typeof entry&&entry.integrity){if(this._cacheKeysToIntegrities.has(cacheKey)&&this._cacheKeysToIntegrities.get(cacheKey)!==entry.integrity)throw new WorkboxError_WorkboxError("add-to-cache-list-conflicting-integrities",{url:url});this._cacheKeysToIntegrities.set(cacheKey,entry.integrity)}if(this._urlsToCacheKeys.set(url,cacheKey),this._urlsToCacheModes.set(url,cacheMode),urlsToWarnAbout.length>0){const warningMessage=`Workbox is precaching URLs without revision info: ${urlsToWarnAbout.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(warningMessage)}}}async install({event:event,plugins:plugins}={}){const toBePrecached=[],alreadyPrecached=[],cache=await self.caches.open(this._cacheName),alreadyCachedRequests=await cache.keys(),existingCacheKeys=new Set(alreadyCachedRequests.map(request=>request.url));for(const[url,cacheKey]of this._urlsToCacheKeys)existingCacheKeys.has(cacheKey)?alreadyPrecached.push(url):toBePrecached.push({cacheKey:cacheKey,url:url});const precacheRequests=toBePrecached.map(({cacheKey:cacheKey,url:url})=>{const integrity=this._cacheKeysToIntegrities.get(cacheKey),cacheMode=this._urlsToCacheModes.get(url);return this._addURLToCache({cacheKey:cacheKey,cacheMode:cacheMode,event:event,integrity:integrity,plugins:plugins,url:url})});await Promise.all(precacheRequests);return{updatedURLs:toBePrecached.map(item=>item.url),notUpdatedURLs:alreadyPrecached}}async activate(){const cache=await self.caches.open(this._cacheName),currentlyCachedRequests=await cache.keys(),expectedCacheKeys=new Set(this._urlsToCacheKeys.values()),deletedURLs=[];for(const request of currentlyCachedRequests)expectedCacheKeys.has(request.url)||(await cache.delete(request),deletedURLs.push(request.url));return{deletedURLs:deletedURLs}}async _addURLToCache({cacheKey:cacheKey,url:url,cacheMode:cacheMode,event:event,plugins:plugins,integrity:integrity}){const request=new Request(url,{integrity:integrity,cache:cacheMode,credentials:"same-origin"});let cacheWillUpdatePlugin,response=await fetchWrapper_fetch({event:event,plugins:plugins,request:request});for(const plugin of plugins||[])"cacheWillUpdate"in plugin&&(cacheWillUpdatePlugin=plugin);if(!(cacheWillUpdatePlugin?await cacheWillUpdatePlugin.cacheWillUpdate({event:event,request:request,response:response}):response.status<400))throw new WorkboxError_WorkboxError("bad-precaching-response",{url:url,status:response.status});response.redirected&&(response=await copyResponse(response)),await cacheWrapper_put({event:event,plugins:plugins,response:response,request:cacheKey===url?request:new Request(cacheKey),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(url){const urlObject=new URL(url,location.href);return this._urlsToCacheKeys.get(urlObject.href)}async matchPrecache(request){const url=request instanceof Request?request.url:request,cacheKey=this.getCacheKeyForURL(url);if(cacheKey){return(await self.caches.open(this._cacheName)).match(cacheKey)}}createHandler(fallbackToNetwork=!0){return async({request:request})=>{try{const response=await this.matchPrecache(request);if(response)return response;throw new WorkboxError_WorkboxError("missing-precache-entry",{cacheName:this._cacheName,url:request instanceof Request?request.url:request})}catch(error){if(fallbackToNetwork)return fetch(request);throw error}}}createHandlerBoundToURL(url,fallbackToNetwork=!0){if(!this.getCacheKeyForURL(url))throw new WorkboxError_WorkboxError("non-precached-url",{url:url});const handler=this.createHandler(fallbackToNetwork),request=new Request(url);return()=>handler({request:request})}}let getOrCreatePrecacheController_precacheController;const getOrCreatePrecacheController=()=>(getOrCreatePrecacheController_precacheController||(getOrCreatePrecacheController_precacheController=new PrecacheController_PrecacheController),getOrCreatePrecacheController_precacheController);const getCacheKeyForURL=(url,options)=>{const urlsToCacheKeys=getOrCreatePrecacheController().getURLsToCacheKeys();for(const possibleURL of function*generateURLVariations(url,{ignoreURLParametersMatching:ignoreURLParametersMatching,directoryIndex:directoryIndex,cleanURLs:cleanURLs,urlManipulation:urlManipulation}={}){const urlObject=new URL(url,location.href);urlObject.hash="",yield urlObject.href;const urlWithoutIgnoredParams=function removeIgnoredSearchParams(urlObject,ignoreURLParametersMatching=[]){for(const paramName of[...urlObject.searchParams.keys()])ignoreURLParametersMatching.some(regExp=>regExp.test(paramName))&&urlObject.searchParams.delete(paramName);return urlObject}(urlObject,ignoreURLParametersMatching);if(yield urlWithoutIgnoredParams.href,directoryIndex&&urlWithoutIgnoredParams.pathname.endsWith("/")){const directoryURL=new URL(urlWithoutIgnoredParams.href);directoryURL.pathname+=directoryIndex,yield directoryURL.href}if(cleanURLs){const cleanURL=new URL(urlWithoutIgnoredParams.href);cleanURL.pathname+=".html",yield cleanURL.href}if(urlManipulation){const additionalURLs=urlManipulation({url:urlObject});for(const urlToAttempt of additionalURLs)yield urlToAttempt.href}}(url,options)){const possibleCacheKey=urlsToCacheKeys.get(possibleURL);if(possibleCacheKey)return possibleCacheKey}};let listenerAdded=!1;function addRoute(options){listenerAdded||((({ignoreURLParametersMatching:ignoreURLParametersMatching=[/^utm_/],directoryIndex:directoryIndex="index.html",cleanURLs:cleanURLs=!0,urlManipulation:urlManipulation}={})=>{const cacheName=cacheNames_getPrecacheName();self.addEventListener("fetch",event=>{const precachedURL=getCacheKeyForURL(event.request.url,{cleanURLs:cleanURLs,directoryIndex:directoryIndex,ignoreURLParametersMatching:ignoreURLParametersMatching,urlManipulation:urlManipulation});if(!precachedURL)return void 0;let responsePromise=self.caches.open(cacheName).then(cache=>cache.match(precachedURL)).then(cachedResponse=>cachedResponse||fetch(precachedURL));event.respondWith(responsePromise)})})(options),listenerAdded=!0)}const installListener=event=>{const precacheController=getOrCreatePrecacheController(),plugins=precachePlugins.get();event.waitUntil(precacheController.install({event:event,plugins:plugins}).catch(error=>{throw error}))},activateListener=event=>{const precacheController=getOrCreatePrecacheController();event.waitUntil(precacheController.activate())};__webpack_require__(2);const normalizeHandler=handler=>handler&&"object"==typeof handler?handler:{handle:handler};class Route_Route{constructor(match,handler,method="GET"){this.handler=normalizeHandler(handler),this.match=match,this.method=method}}class RegExpRoute_RegExpRoute extends Route_Route{constructor(regExp,handler,method){super(({url:url})=>{const result=regExp.exec(url.href);if(result&&(url.origin===location.origin||0===result.index))return result.slice(1)},handler,method)}}class Router_Router{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",event=>{const{request:request}=event,responsePromise=this.handleRequest({request:request,event:event});responsePromise&&event.respondWith(responsePromise)})}addCacheListener(){self.addEventListener("message",event=>{if(event.data&&"CACHE_URLS"===event.data.type){const{payload:payload}=event.data;0;const requestPromises=Promise.all(payload.urlsToCache.map(entry=>{"string"==typeof entry&&(entry=[entry]);const request=new Request(...entry);return this.handleRequest({request:request})}));event.waitUntil(requestPromises),event.ports&&event.ports[0]&&requestPromises.then(()=>event.ports[0].postMessage(!0))}})}handleRequest({request:request,event:event}){const url=new URL(request.url,location.href);if(!url.protocol.startsWith("http"))return void 0;const{params:params,route:route}=this.findMatchingRoute({url:url,request:request,event:event});let handler=route&&route.handler;if(!handler&&this._defaultHandler&&(handler=this._defaultHandler),!handler)return void 0;let responsePromise;try{responsePromise=handler.handle({url:url,request:request,event:event,params:params})}catch(err){responsePromise=Promise.reject(err)}return responsePromise instanceof Promise&&this._catchHandler&&(responsePromise=responsePromise.catch(err=>this._catchHandler.handle({url:url,request:request,event:event}))),responsePromise}findMatchingRoute({url:url,request:request,event:event}){const routes=this._routes.get(request.method)||[];for(const route of routes){let params;const matchResult=route.match({url:url,request:request,event:event});if(matchResult)return params=matchResult,(Array.isArray(matchResult)&&0===matchResult.length||matchResult.constructor===Object&&0===Object.keys(matchResult).length||"boolean"==typeof matchResult)&&(params=void 0),{route:route,params:params}}return{}}setDefaultHandler(handler){this._defaultHandler=normalizeHandler(handler)}setCatchHandler(handler){this._catchHandler=normalizeHandler(handler)}registerRoute(route){this._routes.has(route.method)||this._routes.set(route.method,[]),this._routes.get(route.method).push(route)}unregisterRoute(route){if(!this._routes.has(route.method))throw new WorkboxError_WorkboxError("unregister-route-but-not-found-with-method",{method:route.method});const routeIndex=this._routes.get(route.method).indexOf(route);if(!(routeIndex>-1))throw new WorkboxError_WorkboxError("unregister-route-route-not-registered");this._routes.get(route.method).splice(routeIndex,1)}}let getOrCreateDefaultRouter_defaultRouter;const getOrCreateDefaultRouter=()=>(getOrCreateDefaultRouter_defaultRouter||(getOrCreateDefaultRouter_defaultRouter=new Router_Router,getOrCreateDefaultRouter_defaultRouter.addFetchListener(),getOrCreateDefaultRouter_defaultRouter.addCacheListener()),getOrCreateDefaultRouter_defaultRouter);function registerRoute(capture,handler,method){let route;if("string"==typeof capture){const captureUrl=new URL(capture,location.href);0;route=new Route_Route(({url:url})=>url.href===captureUrl.href,handler,method)}else if(capture instanceof RegExp)route=new RegExpRoute_RegExpRoute(capture,handler,method);else if("function"==typeof capture)route=new Route_Route(capture,handler,method);else{if(!(capture instanceof Route_Route))throw new WorkboxError_WorkboxError("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});route=capture}return getOrCreateDefaultRouter().registerRoute(route),route}__webpack_require__(3);const cacheOkAndOpaquePlugin={cacheWillUpdate:async({response:response})=>200===response.status||0===response.status?response:null};!function clientsClaim(){self.addEventListener("activate",()=>self.clients.claim())}(),function precacheAndRoute(entries,options){!function precache(entries){getOrCreatePrecacheController().addToCacheList(entries),entries.length>0&&(self.addEventListener("install",installListener),self.addEventListener("activate",activateListener))}(entries),addRoute(options)}([{'revision':null,'url':'0.d68cfbcc.iframe.bundle.js'},{'revision':null,'url':'4.cad02b62.iframe.bundle.js'},{'revision':null,'url':'5.0f319552.iframe.bundle.js'},{'revision':null,'url':'6.1af903c2.iframe.bundle.js'},{'revision':null,'url':'7.73a57b19.iframe.bundle.js'},{'revision':'ea4cbbacef6a53c7422fba6f05fe0834','url':'iframe.html'},{'revision':null,'url':'main.21982bdb.iframe.bundle.js'},{'revision':null,'url':'runtime~main.b16d2d28.iframe.bundle.js'},{'revision':null,'url':'static/css/main.9773dc74.chunk.css'},{'revision':null,'url':'static/media/arrow3x.4b825b78.svg'},{'revision':null,'url':'static/media/bike-light-1200x1500.37c843b0.jpg'},{'revision':null,'url':'static/media/bolt-shirt-1200x1500.c2599ac5.jpg'},{'revision':null,'url':'static/media/cart3x.3669d74a.svg'},{'revision':null,'url':'static/media/close@3x.a30a8a1d.svg'},{'revision':null,'url':'static/media/filter3x.2943df5b.svg'},{'revision':null,'url':'static/media/menu3x.52cc17a3.svg'},{'revision':null,'url':'static/media/pony-express.46394a5d.png'},{'revision':null,'url':'static/media/red-onesie-1200x1500.2ec615b2.jpg'},{'revision':null,'url':'static/media/red-tatt-1200x1500.30dadef4.jpg'},{'revision':null,'url':'static/media/sauce-backpack-1200x1500.0a0b85a3.jpg'},{'revision':null,'url':'static/media/sauce-pullover-1200x1500.51d7ffaf.jpg'},{'revision':null,'url':'static/media/sl-404.168b1cce.jpg'},{'revision':null,'url':'vendors~main.bfbb5f0d.iframe.bundle.js'}]);var fileExtensionRegexp=new RegExp("/[^/?]+\\.[^/]+$");registerRoute((function(_ref){var request=_ref.request,url=_ref.url;return"navigate"===request.mode&&(!url.pathname.startsWith("/_")&&!url.pathname.match(fileExtensionRegexp))}),function createHandlerBoundToURL(url){return getOrCreatePrecacheController().createHandlerBoundToURL(url)}("./index.html")),registerRoute((function(_ref2){var url=_ref2.url;return url.origin===self.location.origin&&url.pathname.endsWith(".png")}),new class StaleWhileRevalidate_StaleWhileRevalidate{constructor(options={}){if(this._cacheName=cacheNames_getRuntimeName(options.cacheName),this._plugins=options.plugins||[],options.plugins){const isUsingCacheWillUpdate=options.plugins.some(plugin=>!!plugin.cacheWillUpdate);this._plugins=isUsingCacheWillUpdate?options.plugins:[cacheOkAndOpaquePlugin,...options.plugins]}else this._plugins=[cacheOkAndOpaquePlugin];this._fetchOptions=options.fetchOptions,this._matchOptions=options.matchOptions}async handle({event:event,request:request}){"string"==typeof request&&(request=new Request(request));const fetchAndCachePromise=this._getFromNetwork({request:request,event:event});let error,response=await cacheWrapper_match({cacheName:this._cacheName,request:request,event:event,matchOptions:this._matchOptions,plugins:this._plugins});if(response){if(event)try{event.waitUntil(fetchAndCachePromise)}catch(error){0}}else{0;try{response=await fetchAndCachePromise}catch(err){error=err}}if(!response)throw new WorkboxError_WorkboxError("no-response",{url:request.url,error:error});return response}async _getFromNetwork({request:request,event:event}){const response=await fetchWrapper_fetch({request:request,event:event,fetchOptions:this._fetchOptions,plugins:this._plugins}),cachePutPromise=cacheWrapper_put({cacheName:this._cacheName,request:request,response:response.clone(),event:event,plugins:this._plugins});if(event)try{event.waitUntil(cachePutPromise)}catch(error){0}return response}}({cacheName:"images",plugins:[new class ExpirationPlugin_ExpirationPlugin{constructor(config={}){this.cachedResponseWillBeUsed=async({event:event,request:request,cacheName:cacheName,cachedResponse:cachedResponse})=>{if(!cachedResponse)return null;const isFresh=this._isResponseDateFresh(cachedResponse),cacheExpiration=this._getCacheExpiration(cacheName);dontWaitFor(cacheExpiration.expireEntries());const updateTimestampDone=cacheExpiration.updateTimestamp(request.url);if(event)try{event.waitUntil(updateTimestampDone)}catch(error){0}return isFresh?cachedResponse:null},this.cacheDidUpdate=async({cacheName:cacheName,request:request})=>{const cacheExpiration=this._getCacheExpiration(cacheName);await cacheExpiration.updateTimestamp(request.url),await cacheExpiration.expireEntries()},this._config=config,this._maxAgeSeconds=config.maxAgeSeconds,this._cacheExpirations=new Map,config.purgeOnQuotaError&&function registerQuotaErrorCallback(callback){quotaErrorCallbacks.add(callback)}(()=>this.deleteCacheAndMetadata())}_getCacheExpiration(cacheName){if(cacheName===cacheNames_getRuntimeName())throw new WorkboxError_WorkboxError("expire-custom-caches-only");let cacheExpiration=this._cacheExpirations.get(cacheName);return cacheExpiration||(cacheExpiration=new CacheExpiration_CacheExpiration(cacheName,this._config),this._cacheExpirations.set(cacheName,cacheExpiration)),cacheExpiration}_isResponseDateFresh(cachedResponse){if(!this._maxAgeSeconds)return!0;const dateHeaderTimestamp=this._getDateHeaderTimestamp(cachedResponse);if(null===dateHeaderTimestamp)return!0;return dateHeaderTimestamp>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(cachedResponse){if(!cachedResponse.headers.has("date"))return null;const dateHeader=cachedResponse.headers.get("date"),headerTime=new Date(dateHeader).getTime();return isNaN(headerTime)?null:headerTime}async deleteCacheAndMetadata(){for(const[cacheName,cacheExpiration]of this._cacheExpirations)await self.caches.delete(cacheName),await cacheExpiration.delete();this._cacheExpirations=new Map}}({maxEntries:50})]})),self.addEventListener("message",(function(event){event.data&&"SKIP_WAITING"===event.data.type&&self.skipWaiting()}))}]);