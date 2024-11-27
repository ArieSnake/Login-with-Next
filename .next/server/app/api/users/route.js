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
exports.id = "app/api/users/route";
exports.ids = ["app/api/users/route"];
exports.modules = {

/***/ "better-sqlite3":
/*!*********************************!*\
  !*** external "better-sqlite3" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("better-sqlite3");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5CVAHAG%5CDesktop%5Ccrud-next%5Ccrud%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CVAHAG%5CDesktop%5Ccrud-next%5Ccrud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5CVAHAG%5CDesktop%5Ccrud-next%5Ccrud%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CVAHAG%5CDesktop%5Ccrud-next%5Ccrud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_VAHAG_Desktop_crud_next_crud_src_app_api_users_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/route.ts */ \"(rsc)/./src/app/api/users/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/route\",\n        pathname: \"/api/users\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\VAHAG\\\\Desktop\\\\crud-next\\\\crud\\\\src\\\\app\\\\api\\\\users\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_VAHAG_Desktop_crud_next_crud_src_app_api_users_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNWQUhBRyU1Q0Rlc2t0b3AlNUNjcnVkLW5leHQlNUNjcnVkJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNWQUhBRyU1Q0Rlc2t0b3AlNUNjcnVkLW5leHQlNUNjcnVkJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMwQjtBQUN2RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdS8/MWY5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcVkFIQUdcXFxcRGVza3RvcFxcXFxjcnVkLW5leHRcXFxcY3J1ZFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlcnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c2Vyc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXNlcnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxWQUhBR1xcXFxEZXNrdG9wXFxcXGNydWQtbmV4dFxcXFxjcnVkXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5CVAHAG%5CDesktop%5Ccrud-next%5Ccrud%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CVAHAG%5CDesktop%5Ccrud-next%5Ccrud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/_lib/model.ts":
/*!*******************************!*\
  !*** ./src/app/_lib/model.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllUsers: () => (/* binding */ getAllUsers),\n/* harmony export */   getUserByLogin: () => (/* binding */ getUserByLogin),\n/* harmony export */   insertUser: () => (/* binding */ insertUser)\n/* harmony export */ });\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n\nconst sql = new (better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default())('auth.db');\nconst getUserByLogin = (login)=>{\n    const user = sql.prepare(\"SELECT * FROM users where login = ?\").get(login);\n    if (user) {\n        return user;\n    }\n    return null;\n};\nconst getAllUsers = ()=>{\n    return sql.prepare(\"SELECT * FROM users\").all();\n};\nconst insertUser = (user)=>{\n    return sql.prepare(`INSERT INTO users(name,surname,login,password)\n        VALUES(@name, @surname, @login,@password)`).run(user);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL19saWIvbW9kZWwudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsTUFBTSxJQUFJRCx1REFBRUEsQ0FBQztBQUVaLE1BQU1FLGlCQUFpQixDQUFDQztJQUMzQixNQUFNQyxPQUFPSCxJQUFJSSxPQUFPLENBQUMsdUNBQXVDQyxHQUFHLENBQUNIO0lBQ3BFLElBQUdDLE1BQUs7UUFDSixPQUFPQTtJQUNYO0lBQ0EsT0FBTztBQUNYLEVBQUM7QUFFTSxNQUFNRyxjQUFjO0lBQ3ZCLE9BQU9OLElBQUlJLE9BQU8sQ0FBQyx1QkFBdUJHLEdBQUc7QUFDakQsRUFBQztBQUVNLE1BQU1DLGFBQWEsQ0FBQ0w7SUFDdkIsT0FBT0gsSUFBSUksT0FBTyxDQUFDLENBQUM7aURBQ3lCLENBQUMsRUFBRUssR0FBRyxDQUFDTjtBQUN4RCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXUvLi9zcmMvYXBwL19saWIvbW9kZWwudHM/ODY4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnYmV0dGVyLXNxbGl0ZTMnXG5pbXBvcnQgeyBJbnB1dFVzZXIsIElVc2VyIH0gZnJvbSAnLi90eXBlcydcbmNvbnN0IHNxbCA9IG5ldyBkYignYXV0aC5kYicpXG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyQnlMb2dpbiA9IChsb2dpbjpzdHJpbmcpOihJVXNlcnxudWxsKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IHNxbC5wcmVwYXJlKFwiU0VMRUNUICogRlJPTSB1c2VycyB3aGVyZSBsb2dpbiA9ID9cIikuZ2V0KGxvZ2luKVxuICAgIGlmKHVzZXIpe1xuICAgICAgICByZXR1cm4gdXNlciBhcyBJVXNlclxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsVXNlcnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNxbC5wcmVwYXJlKFwiU0VMRUNUICogRlJPTSB1c2Vyc1wiKS5hbGwoKVxufVxuXG5leHBvcnQgY29uc3QgaW5zZXJ0VXNlciA9ICh1c2VyOklucHV0VXNlcik6ZGIuUnVuUmVzdWx0ID0+IHtcbiAgICByZXR1cm4gc3FsLnByZXBhcmUoYElOU0VSVCBJTlRPIHVzZXJzKG5hbWUsc3VybmFtZSxsb2dpbixwYXNzd29yZClcbiAgICAgICAgVkFMVUVTKEBuYW1lLCBAc3VybmFtZSwgQGxvZ2luLEBwYXNzd29yZClgKS5ydW4odXNlcilcbn0iXSwibmFtZXMiOlsiZGIiLCJzcWwiLCJnZXRVc2VyQnlMb2dpbiIsImxvZ2luIiwidXNlciIsInByZXBhcmUiLCJnZXQiLCJnZXRBbGxVc2VycyIsImFsbCIsImluc2VydFVzZXIiLCJydW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/_lib/model.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/users/route.ts":
/*!************************************!*\
  !*** ./src/app/api/users/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_lib_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/_lib/model */ \"(rsc)/./src/app/_lib/model.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\nconst GET = ()=>{\n    const result = (0,_app_lib_model__WEBPACK_IMPORTED_MODULE_0__.getAllUsers)();\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n        result\n    });\n};\nconst POST = async (req)=>{\n    const { name, surname, login, password } = await req.json();\n    // Basic validation\n    if (!name || !surname || !login || !password) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"All fields are required\"\n        }, {\n            status: 400\n        });\n    }\n    if (password.length < 6) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Password must be at least 6 characters long\"\n        }, {\n            status: 400\n        });\n    }\n    // Check if user already exists\n    const existingUser = (0,_app_lib_model__WEBPACK_IMPORTED_MODULE_0__.getUserByLogin)(login);\n    if (existingUser) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Login already in use\"\n        }, {\n            status: 409\n        });\n    }\n    // Insert user into the database\n    const result = (0,_app_lib_model__WEBPACK_IMPORTED_MODULE_0__.insertUser)({\n        name,\n        surname,\n        login,\n        password\n    });\n    if (result.changes === 1) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"User created successfully\",\n            id: result.lastInsertRowid\n        }, {\n            status: 201\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n        message: \"Failed to create user\"\n    }, {\n        status: 500\n    });\n}; // import { getAllUsers, insertUser } from \"@/app/_lib/model\"\n // import { NextRequest } from \"next/server\"\n // export const GET = () => {\n //     const result = getAllUsers()\n //     return Response.json({result})\n // }\n // export const POST = async(req:NextRequest) => {\n //     const user = await req.json()\n //     const result = insertUser(user)\n //     return Response.json({\n //         ...user,\n //         id:result.lastInsertRowid\n //     })\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJFO0FBQ25CO0FBRWpELE1BQU1JLE1BQU07SUFDakIsTUFBTUMsU0FBU0wsMkRBQVdBO0lBQzFCLE9BQU9HLHFEQUFZQSxDQUFDRyxJQUFJLENBQUM7UUFBRUQ7SUFBTztBQUNwQyxFQUFFO0FBRUssTUFBTUUsT0FBTyxPQUFPQztJQUN6QixNQUFNLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1KLElBQUlGLElBQUk7SUFFekQsbUJBQW1CO0lBQ25CLElBQUksQ0FBQ0csUUFBUSxDQUFDQyxXQUFXLENBQUNDLFNBQVMsQ0FBQ0MsVUFBVTtRQUM1QyxPQUFPVCxxREFBWUEsQ0FBQ0csSUFBSSxDQUFDO1lBQUVPLFNBQVM7UUFBMEIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDakY7SUFDQSxJQUFJRixTQUFTRyxNQUFNLEdBQUcsR0FBRztRQUN2QixPQUFPWixxREFBWUEsQ0FBQ0csSUFBSSxDQUFDO1lBQUVPLFNBQVM7UUFBOEMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDckc7SUFFQSwrQkFBK0I7SUFDL0IsTUFBTUUsZUFBZWQsOERBQWNBLENBQUNTO0lBQ3BDLElBQUlLLGNBQWM7UUFDaEIsT0FBT2IscURBQVlBLENBQUNHLElBQUksQ0FBQztZQUFFTyxTQUFTO1FBQXVCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzlFO0lBRUEsZ0NBQWdDO0lBQ2hDLE1BQU1ULFNBQVNKLDBEQUFVQSxDQUFDO1FBQUVRO1FBQU1DO1FBQVNDO1FBQU9DO0lBQVM7SUFDM0QsSUFBSVAsT0FBT1ksT0FBTyxLQUFLLEdBQUc7UUFDeEIsT0FBT2QscURBQVlBLENBQUNHLElBQUksQ0FBQztZQUFFTyxTQUFTO1lBQTZCSyxJQUFJYixPQUFPYyxlQUFlO1FBQUMsR0FBRztZQUFFTCxRQUFRO1FBQUk7SUFDL0c7SUFFQSxPQUFPWCxxREFBWUEsQ0FBQ0csSUFBSSxDQUFDO1FBQUVPLFNBQVM7SUFBd0IsR0FBRztRQUFFQyxRQUFRO0lBQUk7QUFDL0UsRUFBRSxDQUdGLDZEQUE2RDtDQUM3RCw0Q0FBNEM7Q0FFNUMsNkJBQTZCO0NBQzdCLG1DQUFtQztDQUNuQyxxQ0FBcUM7Q0FDckMsSUFBSTtDQUVKLGtEQUFrRDtDQUNsRCxvQ0FBb0M7Q0FDcEMsc0NBQXNDO0NBQ3RDLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkIsb0NBQW9DO0NBQ3BDLFNBQVM7Q0FDVCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXUvLi9zcmMvYXBwL2FwaS91c2Vycy9yb3V0ZS50cz84OTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFsbFVzZXJzLCBpbnNlcnRVc2VyLCBnZXRVc2VyQnlMb2dpbiB9IGZyb20gXCJAL2FwcC9fbGliL21vZGVsXCI7XHJcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVQgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gZ2V0QWxsVXNlcnMoKTtcclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyByZXN1bHQgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUE9TVCA9IGFzeW5jIChyZXE6IE5leHRSZXF1ZXN0KSA9PiB7XHJcbiAgY29uc3QgeyBuYW1lLCBzdXJuYW1lLCBsb2dpbiwgcGFzc3dvcmQgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gIC8vIEJhc2ljIHZhbGlkYXRpb25cclxuICBpZiAoIW5hbWUgfHwgIXN1cm5hbWUgfHwgIWxvZ2luIHx8ICFwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJBbGwgZmllbGRzIGFyZSByZXF1aXJlZFwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgfVxyXG4gIGlmIChwYXNzd29yZC5sZW5ndGggPCA2KSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgdXNlciBhbHJlYWR5IGV4aXN0c1xyXG4gIGNvbnN0IGV4aXN0aW5nVXNlciA9IGdldFVzZXJCeUxvZ2luKGxvZ2luKTtcclxuICBpZiAoZXhpc3RpbmdVc2VyKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIkxvZ2luIGFscmVhZHkgaW4gdXNlXCIgfSwgeyBzdGF0dXM6IDQwOSB9KTtcclxuICB9XHJcblxyXG4gIC8vIEluc2VydCB1c2VyIGludG8gdGhlIGRhdGFiYXNlXHJcbiAgY29uc3QgcmVzdWx0ID0gaW5zZXJ0VXNlcih7IG5hbWUsIHN1cm5hbWUsIGxvZ2luLCBwYXNzd29yZCB9KTtcclxuICBpZiAocmVzdWx0LmNoYW5nZXMgPT09IDEpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiVXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiLCBpZDogcmVzdWx0Lmxhc3RJbnNlcnRSb3dpZCB9LCB7IHN0YXR1czogMjAxIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJGYWlsZWQgdG8gY3JlYXRlIHVzZXJcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG59O1xyXG5cclxuXHJcbi8vIGltcG9ydCB7IGdldEFsbFVzZXJzLCBpbnNlcnRVc2VyIH0gZnJvbSBcIkAvYXBwL19saWIvbW9kZWxcIlxyXG4vLyBpbXBvcnQgeyBOZXh0UmVxdWVzdCB9IGZyb20gXCJuZXh0L3NlcnZlclwiXHJcblxyXG4vLyBleHBvcnQgY29uc3QgR0VUID0gKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgcmVzdWx0ID0gZ2V0QWxsVXNlcnMoKVxyXG4vLyAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe3Jlc3VsdH0pXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBQT1NUID0gYXN5bmMocmVxOk5leHRSZXF1ZXN0KSA9PiB7XHJcbi8vICAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVxLmpzb24oKVxyXG4vLyAgICAgY29uc3QgcmVzdWx0ID0gaW5zZXJ0VXNlcih1c2VyKVxyXG4vLyAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe1xyXG4vLyAgICAgICAgIC4uLnVzZXIsXHJcbi8vICAgICAgICAgaWQ6cmVzdWx0Lmxhc3RJbnNlcnRSb3dpZFxyXG4vLyAgICAgfSlcclxuLy8gfSJdLCJuYW1lcyI6WyJnZXRBbGxVc2VycyIsImluc2VydFVzZXIiLCJnZXRVc2VyQnlMb2dpbiIsIk5leHRSZXNwb25zZSIsIkdFVCIsInJlc3VsdCIsImpzb24iLCJQT1NUIiwicmVxIiwibmFtZSIsInN1cm5hbWUiLCJsb2dpbiIsInBhc3N3b3JkIiwibWVzc2FnZSIsInN0YXR1cyIsImxlbmd0aCIsImV4aXN0aW5nVXNlciIsImNoYW5nZXMiLCJpZCIsImxhc3RJbnNlcnRSb3dpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5CVAHAG%5CDesktop%5Ccrud-next%5Ccrud%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CVAHAG%5CDesktop%5Ccrud-next%5Ccrud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();