"use strict";var precacheConfig=[["/sgmrb/index.html","baf4a5638c9eba661e45383b4f0af1dc"],["/sgmrb/static/css/main.e4f02dd7.css","9e02368f0103d3c15c70ee516bce6036"],["/sgmrb/static/js/main.35a367b5.js","3422a7c1cf63f4387bc809db8e37f3aa"],["/sgmrb/static/media/0_Banner votación cuenta regresiva.a9438bcc.png","a9438bcc12a0c21fa36cd6e6f432bf3e"],["/sgmrb/static/media/1_logo bogotá en blanco footer.3b2a8252.png","3b2a82521bc839ca0638a19b755d751c"],["/sgmrb/static/media/1_logo distri blanco.7802e2ee.png","7802e2eebdb29410de1806bb413b9925"],["/sgmrb/static/media/Acceso-Image.20914664.png","20914664d70cb6ef23cb9a9aabb3bfce"],["/sgmrb/static/media/BigBottomCartoonRegular.2582fbb9.ttf","2582fbb9e401758334f6d2d03be6f729"],["/sgmrb/static/media/Bogota.2b07cc7b.png","2b07cc7b375d9748422095517f1095f1"],["/sgmrb/static/media/BotonCultura.7da12ad4.png","7da12ad4c45f056c0741f60fd90982ee"],["/sgmrb/static/media/BotonCultura.e1e0c74c.png","e1e0c74cece0b1058c70e9458720fabd"],["/sgmrb/static/media/BotonCulturaBlanco.91122b6b.png","91122b6b6ac02287dd4907f97d3d9d30"],["/sgmrb/static/media/BotonDeporte.284ee3d1.png","284ee3d177f2d7c61fd0217f0bc0ca5a"],["/sgmrb/static/media/BotonDeporte.85cf9986.png","85cf99867db6850c363fc92cdbab8a9f"],["/sgmrb/static/media/BotonDeporteBlanco.56e2bbc7.png","56e2bbc774bbb06d3c22570e2725196f"],["/sgmrb/static/media/BotonHome.8032418c.png","8032418cd157258fdd2a86c7291edba2"],["/sgmrb/static/media/Button-Change-Cultura.8f2204e6.png","8f2204e6ce7e4d181f6a820fe91a4146"],["/sgmrb/static/media/Button-Change-Deporte.46823afe.png","46823afe17e8235f5c1e834f62ed5089"],["/sgmrb/static/media/CajaBuscador.3319df21.png","3319df21bbbf84fad1afcd2da1133d8d"],["/sgmrb/static/media/CajaFoto.ffb94071.png","ffb94071ff17d2efa16893b3298740cb"],["/sgmrb/static/media/ImgMapa.ea80f9db.png","ea80f9db4725f33e19a9bb411cb8d5e0"],["/sgmrb/static/media/ImgTiempo.037b911c.png","037b911c1fa2c736e5b47d0a6ee6d226"],["/sgmrb/static/media/dos.0486c043.svg","0486c043cfd6d5171efed8ceb2edaac2"],["/sgmrb/static/media/fondo_modal.359d3569.png","359d35698ef951f5687158177e907cc1"],["/sgmrb/static/media/game.7e6ac822.jpg","7e6ac8225221d272b0342c307ca0f446"],["/sgmrb/static/media/gotham_bold.ae8f19f4.ttf","ae8f19f441b335c3fda30febf5069c5a"],["/sgmrb/static/media/gotham_book.d31d488d.ttf","d31d488d2171c1668c15962fc6cf1ef7"],["/sgmrb/static/media/gotham_medium.dffb2b80.ttf","dffb2b80813d195d26fa4d2aad48b059"],["/sgmrb/static/media/icono_menu.eb06dc65.png","eb06dc65f4afbf57071b8150a720203e"],["/sgmrb/static/media/logo.47a63b74.svg","47a63b74f4aad8d545681f4c1d159582"],["/sgmrb/static/media/mapa.7000a14e.jpg","7000a14e7df0449b253b49f78048f0ec"],["/sgmrb/static/media/not_found.6aed7f39.gif","6aed7f392fcb07aad104451170b8edea"],["/sgmrb/static/media/one.14835ba4.svg","14835ba417eccdfb303ec76bd278596d"],["/sgmrb/static/media/survey.9f7382bc.jpg","9f7382bc78a829b1f8fbb98eb47b15d6"],["/sgmrb/static/media/tres.8fa4b3d6.svg","8fa4b3d6d1ea0ff4d04cb9428ff88849"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/sgmrb/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});