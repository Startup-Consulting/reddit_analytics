"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/subreddits/route";
exports.ids = ["app/api/subreddits/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "lodash/isArray":
/*!*********************************!*\
  !*** external "lodash/isArray" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/isArray");

/***/ }),

/***/ "lodash/isFunction":
/*!************************************!*\
  !*** external "lodash/isFunction" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("lodash/isFunction");

/***/ }),

/***/ "lodash/isObjectLike":
/*!**************************************!*\
  !*** external "lodash/isObjectLike" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("lodash/isObjectLike");

/***/ }),

/***/ "lodash/isString":
/*!**********************************!*\
  !*** external "lodash/isString" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isString");

/***/ }),

/***/ "lodash/isUndefined":
/*!*************************************!*\
  !*** external "lodash/isUndefined" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubreddits%2Froute&page=%2Fapi%2Fsubreddits%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubreddits%2Froute.ts&appDir=%2FUsers%2Fjaeheesong%2Fpython%2Freddit-analytics%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjaeheesong%2Fpython%2Freddit-analytics&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubreddits%2Froute&page=%2Fapi%2Fsubreddits%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubreddits%2Froute.ts&appDir=%2FUsers%2Fjaeheesong%2Fpython%2Freddit-analytics%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjaeheesong%2Fpython%2Freddit-analytics&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_jaeheesong_python_reddit_analytics_app_api_subreddits_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/subreddits/route.ts */ \"(rsc)/./app/api/subreddits/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/subreddits/route\",\n        pathname: \"/api/subreddits\",\n        filename: \"route\",\n        bundlePath: \"app/api/subreddits/route\"\n    },\n    resolvedPagePath: \"/Users/jaeheesong/python/reddit-analytics/app/api/subreddits/route.ts\",\n    nextConfigOutput,\n    userland: _Users_jaeheesong_python_reddit_analytics_app_api_subreddits_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/subreddits/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzdWJyZWRkaXRzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzdWJyZWRkaXRzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc3VicmVkZGl0cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmphZWhlZXNvbmclMkZweXRob24lMkZyZWRkaXQtYW5hbHl0aWNzJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmphZWhlZXNvbmclMkZweXRob24lMkZyZWRkaXQtYW5hbHl0aWNzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3FCO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkZGl0LWFuYWx5dGljcy8/MDhmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvamFlaGVlc29uZy9weXRob24vcmVkZGl0LWFuYWx5dGljcy9hcHAvYXBpL3N1YnJlZGRpdHMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3N1YnJlZGRpdHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zdWJyZWRkaXRzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zdWJyZWRkaXRzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2phZWhlZXNvbmcvcHl0aG9uL3JlZGRpdC1hbmFseXRpY3MvYXBwL2FwaS9zdWJyZWRkaXRzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3N1YnJlZGRpdHMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubreddits%2Froute&page=%2Fapi%2Fsubreddits%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubreddits%2Froute.ts&appDir=%2FUsers%2Fjaeheesong%2Fpython%2Freddit-analytics%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjaeheesong%2Fpython%2Freddit-analytics&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient();\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(prisma),\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Missing credentials\");\n                }\n                const user = await prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) {\n                    throw new Error(\"No user found\");\n                }\n                const isValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_4___default().compare(credentials.password, user.password);\n                if (!isValid) {\n                    throw new Error(\"Invalid password\");\n                }\n                // Update last active timestamp\n                await prisma.user.update({\n                    where: {\n                        id: user.id\n                    },\n                    data: {\n                        lastActive: new Date()\n                    }\n                });\n                return {\n                    id: user.id,\n                    name: user.name,\n                    email: user.email\n                };\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 60\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNpQztBQUNiO0FBQ1A7QUFDaEI7QUFFN0IsTUFBTUssU0FBUyxJQUFJRix3REFBWUE7QUFFeEIsTUFBTUcsY0FBYztJQUN6QkMsU0FBU0wsbUVBQWFBLENBQUNHO0lBQ3ZCRyxXQUFXO1FBQ1RQLDJFQUFtQkEsQ0FBQztZQUNsQlEsTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFRO2dCQUN2Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLElBQUksQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFVO29CQUNqRCxNQUFNLElBQUlFLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1DLE9BQU8sTUFBTVosT0FBT1ksSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQ3hDQyxPQUFPO3dCQUFFUixPQUFPRCxZQUFZQyxLQUFLO29CQUFDO2dCQUNwQztnQkFFQSxJQUFJLENBQUNNLE1BQU07b0JBQ1QsTUFBTSxJQUFJRCxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNSSxVQUFVLE1BQU1oQix1REFBYyxDQUFDTSxZQUFZSSxRQUFRLEVBQUVHLEtBQUtILFFBQVE7Z0JBRXhFLElBQUksQ0FBQ00sU0FBUztvQkFDWixNQUFNLElBQUlKLE1BQU07Z0JBQ2xCO2dCQUVBLCtCQUErQjtnQkFDL0IsTUFBTVgsT0FBT1ksSUFBSSxDQUFDSyxNQUFNLENBQUM7b0JBQ3ZCSCxPQUFPO3dCQUFFSSxJQUFJTixLQUFLTSxFQUFFO29CQUFDO29CQUNyQkMsTUFBTTt3QkFBRUMsWUFBWSxJQUFJQztvQkFBTztnQkFDakM7Z0JBRUEsT0FBTztvQkFDTEgsSUFBSU4sS0FBS00sRUFBRTtvQkFDWGQsTUFBTVEsS0FBS1IsSUFBSTtvQkFDZkUsT0FBT00sS0FBS04sS0FBSztnQkFDbkI7WUFDRjtRQUNGO0tBQ0Q7SUFDRGdCLFNBQVM7UUFDUEMsVUFBVTtRQUNWQyxRQUFRLEtBQUs7SUFDZjtJQUNBQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVmLElBQUksRUFBRTtZQUN2QixJQUFJQSxNQUFNO2dCQUNSZSxNQUFNVCxFQUFFLEdBQUdOLEtBQUtNLEVBQUU7WUFDcEI7WUFDQSxPQUFPUztRQUNUO1FBQ0EsTUFBTUwsU0FBUSxFQUFFQSxPQUFPLEVBQUVLLEtBQUssRUFBRTtZQUM5QixJQUFJTCxRQUFRVixJQUFJLEVBQUU7Z0JBQ2hCVSxRQUFRVixJQUFJLENBQUNNLEVBQUUsR0FBR1MsTUFBTVQsRUFBRTtZQUM1QjtZQUNBLE9BQU9JO1FBQ1Q7SUFDRjtJQUNBTSxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUNBQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7QUFDckMsRUFBQztBQUVELE1BQU1DLFVBQVV2QyxnREFBUUEsQ0FBQ007QUFFaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWRkaXQtYW5hbHl0aWNzLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/YzhhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBhdXRoL3ByaXNtYS1hZGFwdGVyXCJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBjcmVkZW50aWFscycpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHVzZXIgZm91bmQnKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKVxuXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwYXNzd29yZCcpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgbGFzdCBhY3RpdmUgdGltZXN0YW1wXG4gICAgICAgIGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XG4gICAgICAgICAgd2hlcmU6IHsgaWQ6IHVzZXIuaWQgfSxcbiAgICAgICAgICBkYXRhOiB7IGxhc3RBY3RpdmU6IG5ldyBEYXRlKCkgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gICAgbWF4QWdlOiAzMCAqIDYwLCAvLyAzMCBtaW51dGVzXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuXG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHNlc3Npb24udXNlcikge1xuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5pZCBhcyBzdHJpbmdcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgfVxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy8nLFxuICB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbn1cblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKVxuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH1cbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJQcmlzbWFBZGFwdGVyIiwiUHJpc21hQ2xpZW50IiwiYmNyeXB0IiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsIkVycm9yIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlzVmFsaWQiLCJjb21wYXJlIiwidXBkYXRlIiwiaWQiLCJkYXRhIiwibGFzdEFjdGl2ZSIsIkRhdGUiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInBhZ2VzIiwic2lnbkluIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/subreddits/route.ts":
/*!*************************************!*\
  !*** ./app/api/subreddits/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var snoowrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! snoowrap */ \"(rsc)/./node_modules/snoowrap/dist/snoowrap.js\");\n/* harmony import */ var snoowrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(snoowrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _auth_nextauth_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/[...nextauth]/route */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient();\n// Initialize the Snoowrap client\nconst getRedditClient = ()=>{\n    const requiredEnvVars = {\n        clientId: process.env.REDDIT_CLIENT_ID,\n        clientSecret: process.env.REDDIT_CLIENT_SECRET,\n        username: process.env.REDDIT_USERNAME,\n        password: process.env.REDDIT_PASSWORD,\n        userAgent: process.env.REDDIT_USER_AGENT\n    };\n    // Check if any required environment variables are missing\n    const missingVars = Object.entries(requiredEnvVars).filter(([_, value])=>!value).map(([key])=>key);\n    if (missingVars.length > 0) {\n        throw new Error(`Missing required environment variables: ${missingVars.join(\", \")}`);\n    }\n    return new (snoowrap__WEBPACK_IMPORTED_MODULE_1___default())({\n        userAgent: requiredEnvVars.userAgent,\n        clientId: requiredEnvVars.clientId,\n        clientSecret: requiredEnvVars.clientSecret,\n        username: requiredEnvVars.username,\n        password: requiredEnvVars.password\n    });\n};\nasync function GET(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_4__.authOptions);\n        if (!session?.user?.email) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        // Get user's subreddits from database\n        const user = await prisma.user.findUnique({\n            where: {\n                email: session.user.email\n            },\n            select: {\n                subreddits: true\n            }\n        });\n        if (!user) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"User not found\"\n            }, {\n                status: 404\n            });\n        }\n        if (!user.subreddits || user.subreddits.length === 0) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json([]);\n        }\n        const reddit = getRedditClient();\n        const subreddits = await Promise.all(user.subreddits.map(async (name)=>{\n            try {\n                const subreddit = await reddit.getSubreddit(name).fetch();\n                return {\n                    name: subreddit.display_name,\n                    description: subreddit.description || \"\",\n                    subscribers: subreddit.subscribers || 0,\n                    created_utc: subreddit.created_utc || Math.floor(Date.now() / 1000),\n                    public_description: subreddit.public_description || \"\",\n                    over18: subreddit.over18 || false\n                };\n            } catch (error) {\n                console.error(`Error fetching subreddit ${name}:`, error);\n                return null;\n            }\n        }));\n        const validSubreddits = subreddits.filter((s)=>s !== null);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(validSubreddits);\n    } catch (error) {\n        console.error(\"Error in subreddits API:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Failed to fetch subreddit information\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_4__.authOptions);\n        if (!session?.user?.email) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const body = await request.json();\n        const { subredditName } = body;\n        if (!subredditName) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"No subreddit name provided\"\n            }, {\n                status: 400\n            });\n        }\n        // Verify the subreddit exists before adding it\n        const reddit = getRedditClient();\n        try {\n            const subreddit = await reddit.getSubreddit(subredditName).fetch();\n            // Add subreddit to user's list\n            const user = await prisma.user.update({\n                where: {\n                    email: session.user.email\n                },\n                data: {\n                    subreddits: {\n                        push: subredditName\n                    }\n                }\n            });\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                name: subreddit.display_name,\n                description: subreddit.description || \"\",\n                subscribers: subreddit.subscribers || 0,\n                created_utc: subreddit.created_utc || Math.floor(Date.now() / 1000),\n                public_description: subreddit.public_description || \"\",\n                over18: subreddit.over18 || false\n            });\n        } catch (error) {\n            console.error(\"Error verifying subreddit:\", error);\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Invalid subreddit name or subreddit not found\"\n            }, {\n                status: 400\n            });\n        }\n    } catch (error) {\n        console.error(\"Error in subreddits API:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Failed to add subreddit\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_4__.authOptions);\n        if (!session?.user?.email) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const body = await request.json();\n        const { subredditName } = body;\n        if (!subredditName) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"No subreddit name provided\"\n            }, {\n                status: 400\n            });\n        }\n        // Get current user's subreddits\n        const user = await prisma.user.findUnique({\n            where: {\n                email: session.user.email\n            },\n            select: {\n                subreddits: true\n            }\n        });\n        if (!user) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"User not found\"\n            }, {\n                status: 404\n            });\n        }\n        // Remove the subreddit from the list\n        const updatedSubreddits = user.subreddits.filter((name)=>name !== subredditName);\n        // Update user's subreddits\n        await prisma.user.update({\n            where: {\n                email: session.user.email\n            },\n            data: {\n                subreddits: updatedSubreddits\n            }\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            success: true\n        });\n    } catch (error) {\n        console.error(\"Error in subreddits API:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Failed to remove subreddit\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEI7Z0JBQUVDLE9BQU87WUFBNkIsR0FDdEM7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLGdDQUFnQztRQUNoQyxNQUFNSixPQUFPLE1BQU03QixPQUFPNkIsSUFBSSxDQUFDSyxVQUFVLENBQUM7WUFDeENDLE9BQU87Z0JBQUVMLE9BQU9GLFFBQVFDLElBQUksQ0FBQ0MsS0FBSztZQUFDO1lBQ25DTSxRQUFRO2dCQUFFQyxZQUFZO1lBQUs7UUFDN0I7UUFFQSxJQUFJLENBQUNSLE1BQU07WUFDVCxPQUFPbEMsa0ZBQVlBLENBQUNvQyxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQWlCLEdBQzFCO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxxQ0FBcUM7UUFDckMsTUFBTWdDLG9CQUFvQnBDLEtBQUtRLFVBQVUsQ0FBQ25CLE1BQU0sQ0FBQ3VCLENBQUFBLE9BQVFBLFNBQVNtQjtRQUVsRSwyQkFBMkI7UUFDM0IsTUFBTTVELE9BQU82QixJQUFJLENBQUNnQyxNQUFNLENBQUM7WUFDdkIxQixPQUFPO2dCQUFFTCxPQUFPRixRQUFRQyxJQUFJLENBQUNDLEtBQUs7WUFBQztZQUNuQ2dDLE1BQU07Z0JBQ0p6QixZQUFZNEI7WUFDZDtRQUNGO1FBRUEsT0FBT3RFLGtGQUFZQSxDQUFDb0MsSUFBSSxDQUFDO1lBQUVtQyxTQUFTO1FBQUs7SUFDM0MsRUFBRSxPQUFPbEMsT0FBTztRQUNkdUIsUUFBUXZCLEtBQUssQ0FBQyw0QkFBNEJBO1FBQzFDLE9BQU9yQyxrRkFBWUEsQ0FBQ29DLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUE2QixHQUN0QztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZGRpdC1hbmFseXRpY3MvLi9hcHAvYXBpL3N1YnJlZGRpdHMvcm91dGUudHM/YTE5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgU25vb3dyYXAgZnJvbSAnc25vb3dyYXAnO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJy4uL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZSc7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuLy8gSW5pdGlhbGl6ZSB0aGUgU25vb3dyYXAgY2xpZW50XG5jb25zdCBnZXRSZWRkaXRDbGllbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHJlcXVpcmVkRW52VmFycyA9IHtcbiAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuUkVERElUX0NMSUVOVF9JRCxcbiAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LlJFRERJVF9DTElFTlRfU0VDUkVULFxuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5SRURESVRfVVNFUk5BTUUsXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlJFRERJVF9QQVNTV09SRCxcbiAgICB1c2VyQWdlbnQ6IHByb2Nlc3MuZW52LlJFRERJVF9VU0VSX0FHRU5ULFxuICB9O1xuXG4gIC8vIENoZWNrIGlmIGFueSByZXF1aXJlZCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgYXJlIG1pc3NpbmdcbiAgY29uc3QgbWlzc2luZ1ZhcnMgPSBPYmplY3QuZW50cmllcyhyZXF1aXJlZEVudlZhcnMpXG4gICAgLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gIXZhbHVlKVxuICAgIC5tYXAoKFtrZXldKSA9PiBrZXkpO1xuXG4gIGlmIChtaXNzaW5nVmFycy5sZW5ndGggPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIHJlcXVpcmVkIGVudmlyb25tZW50IHZhcmlhYmxlczogJHttaXNzaW5nVmFycy5qb2luKCcsICcpfWApO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTbm9vd3JhcCh7XG4gICAgdXNlckFnZW50OiByZXF1aXJlZEVudlZhcnMudXNlckFnZW50ISxcbiAgICBjbGllbnRJZDogcmVxdWlyZWRFbnZWYXJzLmNsaWVudElkISxcbiAgICBjbGllbnRTZWNyZXQ6IHJlcXVpcmVkRW52VmFycy5jbGllbnRTZWNyZXQhLFxuICAgIHVzZXJuYW1lOiByZXF1aXJlZEVudlZhcnMudXNlcm5hbWUhLFxuICAgIHBhc3N3b3JkOiByZXF1aXJlZEVudlZhcnMucGFzc3dvcmQhLFxuICB9KTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcbiAgICBcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgdXNlcidzIHN1YnJlZGRpdHMgZnJvbSBkYXRhYmFzZVxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSxcbiAgICAgIHNlbGVjdDogeyBzdWJyZWRkaXRzOiB0cnVlIH1cbiAgICB9KTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnVXNlciBub3QgZm91bmQnIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDQgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIXVzZXIuc3VicmVkZGl0cyB8fCB1c2VyLnN1YnJlZGRpdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oW10pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlZGRpdCA9IGdldFJlZGRpdENsaWVudCgpO1xuICAgIFxuICAgIGNvbnN0IHN1YnJlZGRpdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIHVzZXIuc3VicmVkZGl0cy5tYXAoYXN5bmMgKG5hbWUpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBzdWJyZWRkaXQgPSBhd2FpdCByZWRkaXQuZ2V0U3VicmVkZGl0KG5hbWUpLmZldGNoKCk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHN1YnJlZGRpdC5kaXNwbGF5X25hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc3VicmVkZGl0LmRlc2NyaXB0aW9uIHx8ICcnLFxuICAgICAgICAgICAgc3Vic2NyaWJlcnM6IHN1YnJlZGRpdC5zdWJzY3JpYmVycyB8fCAwLFxuICAgICAgICAgICAgY3JlYXRlZF91dGM6IHN1YnJlZGRpdC5jcmVhdGVkX3V0YyB8fCBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSxcbiAgICAgICAgICAgIHB1YmxpY19kZXNjcmlwdGlvbjogc3VicmVkZGl0LnB1YmxpY19kZXNjcmlwdGlvbiB8fCAnJyxcbiAgICAgICAgICAgIG92ZXIxODogc3VicmVkZGl0Lm92ZXIxOCB8fCBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGZldGNoaW5nIHN1YnJlZGRpdCAke25hbWV9OmAsIGVycm9yKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3QgdmFsaWRTdWJyZWRkaXRzID0gc3VicmVkZGl0cy5maWx0ZXIoKHMpOiBzIGlzIE5vbk51bGxhYmxlPHR5cGVvZiBzPiA9PiBzICE9PSBudWxsKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odmFsaWRTdWJyZWRkaXRzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBzdWJyZWRkaXRzIEFQSTonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBzdWJyZWRkaXQgaW5mb3JtYXRpb24nIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gICAgXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5lbWFpbCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LFxuICAgICAgICB7IHN0YXR1czogNDAxIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIGNvbnN0IHsgc3VicmVkZGl0TmFtZSB9ID0gYm9keTtcblxuICAgIGlmICghc3VicmVkZGl0TmFtZSkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnTm8gc3VicmVkZGl0IG5hbWUgcHJvdmlkZWQnIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBWZXJpZnkgdGhlIHN1YnJlZGRpdCBleGlzdHMgYmVmb3JlIGFkZGluZyBpdFxuICAgIGNvbnN0IHJlZGRpdCA9IGdldFJlZGRpdENsaWVudCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdWJyZWRkaXQgPSBhd2FpdCByZWRkaXQuZ2V0U3VicmVkZGl0KHN1YnJlZGRpdE5hbWUpLmZldGNoKCk7XG5cbiAgICAgIC8vIEFkZCBzdWJyZWRkaXQgdG8gdXNlcidzIGxpc3RcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xuICAgICAgICB3aGVyZTogeyBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBzdWJyZWRkaXRzOiB7XG4gICAgICAgICAgICBwdXNoOiBzdWJyZWRkaXROYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgbmFtZTogc3VicmVkZGl0LmRpc3BsYXlfbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb246IHN1YnJlZGRpdC5kZXNjcmlwdGlvbiB8fCAnJyxcbiAgICAgICAgc3Vic2NyaWJlcnM6IHN1YnJlZGRpdC5zdWJzY3JpYmVycyB8fCAwLFxuICAgICAgICBjcmVhdGVkX3V0Yzogc3VicmVkZGl0LmNyZWF0ZWRfdXRjIHx8IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgICBwdWJsaWNfZGVzY3JpcHRpb246IHN1YnJlZGRpdC5wdWJsaWNfZGVzY3JpcHRpb24gfHwgJycsXG4gICAgICAgIG92ZXIxODogc3VicmVkZGl0Lm92ZXIxOCB8fCBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB2ZXJpZnlpbmcgc3VicmVkZGl0OicsIGVycm9yKTtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogJ0ludmFsaWQgc3VicmVkZGl0IG5hbWUgb3Igc3VicmVkZGl0IG5vdCBmb3VuZCcgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgICApO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBzdWJyZWRkaXRzIEFQSTonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogJ0ZhaWxlZCB0byBhZGQgc3VicmVkZGl0JyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gICAgXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5lbWFpbCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LFxuICAgICAgICB7IHN0YXR1czogNDAxIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIGNvbnN0IHsgc3VicmVkZGl0TmFtZSB9ID0gYm9keTtcblxuICAgIGlmICghc3VicmVkZGl0TmFtZSkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnTm8gc3VicmVkZGl0IG5hbWUgcHJvdmlkZWQnIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgY3VycmVudCB1c2VyJ3Mgc3VicmVkZGl0c1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSxcbiAgICAgIHNlbGVjdDogeyBzdWJyZWRkaXRzOiB0cnVlIH1cbiAgICB9KTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnVXNlciBub3QgZm91bmQnIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDQgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgdGhlIHN1YnJlZGRpdCBmcm9tIHRoZSBsaXN0XG4gICAgY29uc3QgdXBkYXRlZFN1YnJlZGRpdHMgPSB1c2VyLnN1YnJlZGRpdHMuZmlsdGVyKG5hbWUgPT4gbmFtZSAhPT0gc3VicmVkZGl0TmFtZSk7XG5cbiAgICAvLyBVcGRhdGUgdXNlcidzIHN1YnJlZGRpdHNcbiAgICBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBzdWJyZWRkaXRzOiB1cGRhdGVkU3VicmVkZGl0c1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBzdWJyZWRkaXRzIEFQSTonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogJ0ZhaWxlZCB0byByZW1vdmUgc3VicmVkZGl0JyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlNub293cmFwIiwiZ2V0U2VydmVyU2Vzc2lvbiIsIlByaXNtYUNsaWVudCIsImF1dGhPcHRpb25zIiwicHJpc21hIiwiZ2V0UmVkZGl0Q2xpZW50IiwicmVxdWlyZWRFbnZWYXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiUkVERElUX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIlJFRERJVF9DTElFTlRfU0VDUkVUIiwidXNlcm5hbWUiLCJSRURESVRfVVNFUk5BTUUiLCJwYXNzd29yZCIsIlJFRERJVF9QQVNTV09SRCIsInVzZXJBZ2VudCIsIlJFRERJVF9VU0VSX0FHRU5UIiwibWlzc2luZ1ZhcnMiLCJPYmplY3QiLCJlbnRyaWVzIiwiZmlsdGVyIiwiXyIsInZhbHVlIiwibWFwIiwia2V5IiwibGVuZ3RoIiwiRXJyb3IiLCJqb2luIiwiR0VUIiwicmVxdWVzdCIsInNlc3Npb24iLCJ1c2VyIiwiZW1haWwiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJzZWxlY3QiLCJzdWJyZWRkaXRzIiwicmVkZGl0IiwiUHJvbWlzZSIsImFsbCIsIm5hbWUiLCJzdWJyZWRkaXQiLCJnZXRTdWJyZWRkaXQiLCJmZXRjaCIsImRpc3BsYXlfbmFtZSIsImRlc2NyaXB0aW9uIiwic3Vic2NyaWJlcnMiLCJjcmVhdGVkX3V0YyIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJwdWJsaWNfZGVzY3JpcHRpb24iLCJvdmVyMTgiLCJjb25zb2xlIiwidmFsaWRTdWJyZWRkaXRzIiwicyIsIlBPU1QiLCJib2R5Iiwic3VicmVkZGl0TmFtZSIsInVwZGF0ZSIsImRhdGEiLCJwdXNoIiwiREVMRVRFIiwidXBkYXRlZFN1YnJlZGRpdHMiLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/subreddits/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/snoowrap","vendor-chunks/ajv","vendor-chunks/sshpk","vendor-chunks/bluebird","vendor-chunks/psl","vendor-chunks/mime-db","vendor-chunks/ws","vendor-chunks/request","vendor-chunks/harmony-reflect","vendor-chunks/tweetnacl","vendor-chunks/uri-js","vendor-chunks/tough-cookie","vendor-chunks/jsbn","vendor-chunks/bcrypt-pbkdf","vendor-chunks/http-signature","vendor-chunks/ecc-jsbn","vendor-chunks/qs","vendor-chunks/jsprim","vendor-chunks/aws4","vendor-chunks/asn1","vendor-chunks/json-schema","vendor-chunks/punycode","vendor-chunks/form-data","vendor-chunks/verror","vendor-chunks/request-promise-core","vendor-chunks/asynckit","vendor-chunks/har-schema","vendor-chunks/tunnel-agent","vendor-chunks/assert-plus","vendor-chunks/combined-stream","vendor-chunks/extsprintf","vendor-chunks/forever-agent","vendor-chunks/aws-sign2","vendor-chunks/oauth-sign","vendor-chunks/promise-chains","vendor-chunks/extend","vendor-chunks/mime-types","vendor-chunks/ultron","vendor-chunks/core-util-is","vendor-chunks/json-schema-traverse","vendor-chunks/delayed-stream","vendor-chunks/har-validator","vendor-chunks/stealthy-require","vendor-chunks/safer-buffer","vendor-chunks/caseless","vendor-chunks/fast-json-stable-stringify","vendor-chunks/uuid","vendor-chunks/safe-buffer","vendor-chunks/request-promise","vendor-chunks/async-limiter","vendor-chunks/fast-deep-equal","vendor-chunks/performance-now","vendor-chunks/json-stringify-safe","vendor-chunks/is-typedarray","vendor-chunks/isstream","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/yallist","vendor-chunks/cookie","vendor-chunks/@auth","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubreddits%2Froute&page=%2Fapi%2Fsubreddits%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubreddits%2Froute.ts&appDir=%2FUsers%2Fjaeheesong%2Fpython%2Freddit-analytics%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjaeheesong%2Fpython%2Freddit-analytics&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();