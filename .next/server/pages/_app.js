module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/api.ts":
/*!********************!*\
  !*** ./lib/api.ts ***!
  \********************/
/*! exports provided: getPosts, postComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPosts\", function() { return getPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postComment\", function() { return postComment; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst getPosts = async () => {\n  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://simple-blog-api.crew.red/posts`);\n  const ids = res.data.map(post => post.id);\n  return await Promise.all(ids.map(async elem => {\n    const content = await axios__WEBPACK_IMPORTED_MODULE_0___default()({\n      method: \"GET\",\n      url: `https://simple-blog-api.crew.red/posts/${elem}`,\n      params: {\n        _embed: \"comments\"\n      }\n    });\n    return content.data;\n  }));\n};\nconst postComment = comment => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    method: \"POST\",\n    url: \"https://simple-blog-api.crew.red/comments\",\n    data: _objectSpread({}, comment)\n  }).then(res => res.data);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXBpLnRzPzVhOGEiXSwibmFtZXMiOlsiZ2V0UG9zdHMiLCJyZXMiLCJheGlvcyIsImdldCIsImlkcyIsImRhdGEiLCJtYXAiLCJwb3N0IiwiaWQiLCJQcm9taXNlIiwiYWxsIiwiZWxlbSIsImNvbnRlbnQiLCJtZXRob2QiLCJ1cmwiLCJwYXJhbXMiLCJfZW1iZWQiLCJwb3N0Q29tbWVudCIsImNvbW1lbnQiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBR08sTUFBTUEsUUFBUSxHQUFHLFlBQVk7QUFDbEMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVyx3Q0FBWCxDQUFsQjtBQUNBLFFBQU1DLEdBQVEsR0FBR0gsR0FBRyxDQUFDSSxJQUFKLENBQVNDLEdBQVQsQ0FBY0MsSUFBRCxJQUFVQSxJQUFJLENBQUNDLEVBQTVCLENBQWpCO0FBQ0EsU0FBTyxNQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FDWE4sR0FBRyxDQUFDRSxHQUFKLENBQVEsTUFBT0ssSUFBUCxJQUFnQjtBQUN0QixVQUFNQyxPQUFPLEdBQUcsTUFBTVYsNENBQUssQ0FBQztBQUMxQlcsWUFBTSxFQUFFLEtBRGtCO0FBRTFCQyxTQUFHLEVBQUcsMENBQXlDSCxJQUFLLEVBRjFCO0FBRzFCSSxZQUFNLEVBQUU7QUFDTkMsY0FBTSxFQUFFO0FBREY7QUFIa0IsS0FBRCxDQUEzQjtBQU9BLFdBQU9KLE9BQU8sQ0FBQ1AsSUFBZjtBQUNELEdBVEQsQ0FEVyxDQUFiO0FBWUQsQ0FmTTtBQWlCQSxNQUFNWSxXQUFXLEdBQUlDLE9BQUQsSUFBeUI7QUFDbEQsU0FBT2hCLDRDQUFLLENBQUM7QUFDWFcsVUFBTSxFQUFFLE1BREc7QUFFWEMsT0FBRyxFQUFFLDJDQUZNO0FBR1hULFFBQUksb0JBQ0NhLE9BREQ7QUFITyxHQUFELENBQUwsQ0FNSkMsSUFOSSxDQU1DbEIsR0FBRyxJQUFJQSxHQUFHLENBQUNJLElBTlosQ0FBUDtBQU9ELENBUk0iLCJmaWxlIjoiLi9saWIvYXBpLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgUG9zdHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgSWRzLCBSYXdDb21tZW50IH0gZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0c2ApO1xuICBjb25zdCBpZHM6IElkcyA9IHJlcy5kYXRhLm1hcCgocG9zdCkgPT4gcG9zdC5pZCk7XG4gIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbDxQb3N0cz4oXG4gICAgaWRzLm1hcChhc3luYyAoZWxlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICB1cmw6IGBodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cy8ke2VsZW19YCxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgX2VtYmVkOiBcImNvbW1lbnRzXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb250ZW50LmRhdGE7XG4gICAgfSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBwb3N0Q29tbWVudCA9IChjb21tZW50OiBSYXdDb21tZW50KSA9PiB7XG4gIHJldHVybiBheGlvcyh7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvY29tbWVudHNcIixcbiAgICBkYXRhOiB7XG4gICAgICAuLi5jb21tZW50LFxuICAgIH0sXG4gIH0pLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/api.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store/store */ \"./redux/store/store.ts\");\nvar _jsxFileName = \"/home/nik/projects/js/next-blog/pages/_app.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n    store: _redux_store_store__WEBPACK_IMPORTED_MODULE_2__[\"store\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUFpRDtBQUM5RCxTQUNFLE1BQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVDLHdEQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELGVBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREY7QUFLRCIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIC8qLCBBcHBDb250ZXh0ICovIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./redux/sagas.ts":
/*!************************!*\
  !*** ./redux/sagas.ts ***!
  \************************/
/*! exports provided: rootSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rootSaga\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/store */ \"./redux/store/store.ts\");\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.ts\");\n\n\n\n\nfunction* commentWorkerSaga(action) {\n  try {\n    const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(_lib_api__WEBPACK_IMPORTED_MODULE_2__[\"postComment\"], action.payload);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_store_store__WEBPACK_IMPORTED_MODULE_1__[\"addComment\"])(res));\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_store_store__WEBPACK_IMPORTED_MODULE_1__[\"apiError\"])(e));\n  }\n}\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeEvery\"])(_store_store__WEBPACK_IMPORTED_MODULE_1__[\"createComment\"], commentWorkerSaga);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zYWdhcy50cz82OTY0Il0sIm5hbWVzIjpbImNvbW1lbnRXb3JrZXJTYWdhIiwiYWN0aW9uIiwicmVzIiwiY2FsbCIsInBvc3RDb21tZW50IiwicGF5bG9hZCIsInB1dCIsImFkZENvbW1lbnQiLCJlIiwiYXBpRXJyb3IiLCJyb290U2FnYSIsInRha2VFdmVyeSIsImNyZWF0ZUNvbW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFFQSxVQUFVQSxpQkFBVixDQUE0QkMsTUFBNUIsRUFBb0M7QUFDaEMsTUFBSTtBQUNBLFVBQU1DLEdBQUcsR0FBRyxNQUFNQywrREFBSSxDQUFDQyxvREFBRCxFQUFjSCxNQUFNLENBQUNJLE9BQXJCLENBQXRCO0FBQ0EsVUFBTUMsOERBQUcsQ0FBQ0MsK0RBQVUsQ0FBQ0wsR0FBRCxDQUFYLENBQVQ7QUFDSCxHQUhELENBSUEsT0FBTU0sQ0FBTixFQUFTO0FBQ0wsVUFBTUYsOERBQUcsQ0FBQ0csNkRBQVEsQ0FBQ0QsQ0FBRCxDQUFULENBQVQ7QUFDSDtBQUNKOztBQUVNLFVBQVVFLFFBQVYsR0FBcUI7QUFDeEIsUUFBTUMsb0VBQVMsQ0FBQ0MsMERBQUQsRUFBZ0JaLGlCQUFoQixDQUFmO0FBQ0giLCJmaWxlIjoiLi9yZWR1eC9zYWdhcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRha2VFdmVyeSwgY2FsbCwgcHV0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IHtDb21tZW50LCBSYXdDb21tZW50fSBmcm9tICcuLi9saWIvdHlwZXMnXG5pbXBvcnQge2NyZWF0ZUNvbW1lbnQsIGNyZWF0ZVBvc3QsIGFkZENvbW1lbnQsYXBpRXJyb3J9IGZyb20gJy4vc3RvcmUvc3RvcmUnXG5pbXBvcnQge3Bvc3RDb21tZW50fSBmcm9tICcuLi9saWIvYXBpJ1xuXG5mdW5jdGlvbiogY29tbWVudFdvcmtlclNhZ2EoYWN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0geWllbGQgY2FsbChwb3N0Q29tbWVudCwgYWN0aW9uLnBheWxvYWQpXG4gICAgICAgIHlpZWxkIHB1dChhZGRDb21tZW50KHJlcykpXG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgICAgeWllbGQgcHV0KGFwaUVycm9yKGUpKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgICB5aWVsZCB0YWtlRXZlcnkoY3JlYXRlQ29tbWVudCwgY29tbWVudFdvcmtlclNhZ2EpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/sagas.ts\n");

/***/ }),

/***/ "./redux/store/store.ts":
/*!******************************!*\
  !*** ./redux/store/store.ts ***!
  \******************************/
/*! exports provided: getAllPosts, createComment, createPost, addComment, apiError, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPosts\", function() { return getAllPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createComment\", function() { return createComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPost\", function() { return createPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiError\", function() { return apiError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sagas */ \"./redux/sagas.ts\");\n\n\n\nconst initialiseSagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();\nconst middleware = [...Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"getDefaultMiddleware\"])(), initialiseSagaMiddleware];\nconst getAllPosts = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(\"getPosts\");\nconst createComment = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(\"createComment\");\nconst createPost = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(\"createPost\");\nconst addComment = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(\"addComment\");\nconst apiError = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(\"apiErrored\");\nconst defaulState = {\n  posts: [],\n  error: null\n};\nconst rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createReducer\"])(defaulState, builder => {\n  builder.addCase(getAllPosts, (state, action) => {\n    state.posts.push(...action.payload);\n  }).addCase(addComment, (state, action) => {\n    const pid = state.posts.findIndex(post => post.id === action.payload.postId);\n    state.posts[pid].comments.push(action.payload);\n  }).addCase(apiError, (state, action) => {\n    state.error = action.payload;\n  });\n});\nconst store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"configureStore\"])({\n  reducer: rootReducer,\n  middleware\n});\ninitialiseSagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_2__[\"rootSaga\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS9zdG9yZS50cz9kYTRhIl0sIm5hbWVzIjpbImluaXRpYWxpc2VTYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwiZ2V0QWxsUG9zdHMiLCJjcmVhdGVBY3Rpb24iLCJjcmVhdGVDb21tZW50IiwiY3JlYXRlUG9zdCIsImFkZENvbW1lbnQiLCJhcGlFcnJvciIsImRlZmF1bFN0YXRlIiwicG9zdHMiLCJlcnJvciIsInJvb3RSZWR1Y2VyIiwiY3JlYXRlUmVkdWNlciIsImJ1aWxkZXIiLCJhZGRDYXNlIiwic3RhdGUiLCJhY3Rpb24iLCJwdXNoIiwicGF5bG9hZCIsInBpZCIsImZpbmRJbmRleCIsInBvc3QiLCJpZCIsInBvc3RJZCIsImNvbW1lbnRzIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJydW4iLCJyb290U2FnYSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBR0EsTUFBTUEsd0JBQXdCLEdBQUdDLGlEQUFvQixFQUFyRDtBQUNBLE1BQU1DLFVBQVUsR0FBRyxDQUFDLEdBQUdDLDZFQUFvQixFQUF4QixFQUE0Qkgsd0JBQTVCLENBQW5CO0FBRU8sTUFBTUksV0FBVyxHQUFHQyxxRUFBWSxDQUFRLFVBQVIsQ0FBaEM7QUFDQSxNQUFNQyxhQUFhLEdBQUdELHFFQUFZLENBQWEsZUFBYixDQUFsQztBQUNBLE1BQU1FLFVBQVUsR0FBR0YscUVBQVksQ0FBQyxZQUFELENBQS9CO0FBQ0EsTUFBTUcsVUFBVSxHQUFHSCxxRUFBWSxDQUFVLFlBQVYsQ0FBL0I7QUFDQSxNQUFNSSxRQUFRLEdBQUdKLHFFQUFZLENBQVMsWUFBVCxDQUE3QjtBQU9QLE1BQU1LLFdBQWtCLEdBQUc7QUFDekJDLE9BQUssRUFBRSxFQURrQjtBQUV6QkMsT0FBSyxFQUFFO0FBRmtCLENBQTNCO0FBS0EsTUFBTUMsV0FBVyxHQUFHQyxzRUFBYSxDQUFDSixXQUFELEVBQWVLLE9BQUQsSUFBYTtBQUMxREEsU0FBTyxDQUNKQyxPQURILENBQ1daLFdBRFgsRUFDd0IsQ0FBQ2EsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ3ZDRCxTQUFLLENBQUNOLEtBQU4sQ0FBWVEsSUFBWixDQUFpQixHQUFHRCxNQUFNLENBQUNFLE9BQTNCO0FBQ0QsR0FISCxFQUlHSixPQUpILENBSVdSLFVBSlgsRUFJdUIsQ0FBQ1MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ3RDLFVBQU1HLEdBQUcsR0FBR0osS0FBSyxDQUFDTixLQUFOLENBQVlXLFNBQVosQ0FDVEMsSUFBRCxJQUFVQSxJQUFJLENBQUNDLEVBQUwsS0FBWU4sTUFBTSxDQUFDRSxPQUFQLENBQWVLLE1BRDNCLENBQVo7QUFHQVIsU0FBSyxDQUFDTixLQUFOLENBQVlVLEdBQVosRUFBaUJLLFFBQWpCLENBQTBCUCxJQUExQixDQUErQkQsTUFBTSxDQUFDRSxPQUF0QztBQUNELEdBVEgsRUFVR0osT0FWSCxDQVVXUCxRQVZYLEVBVXFCLENBQUNRLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUNwQ0QsU0FBSyxDQUFDTCxLQUFOLEdBQWNNLE1BQU0sQ0FBQ0UsT0FBckI7QUFDRCxHQVpIO0FBYUQsQ0FkZ0MsQ0FBakM7QUFnQk8sTUFBTU8sS0FBSyxHQUFHQyx1RUFBYyxDQUFDO0FBQUVDLFNBQU8sRUFBRWhCLFdBQVg7QUFBd0JYO0FBQXhCLENBQUQsQ0FBNUI7QUFDUEYsd0JBQXdCLENBQUM4QixHQUF6QixDQUE2QkMsK0NBQTdCIiwiZmlsZSI6Ii4vcmVkdXgvc3RvcmUvc3RvcmUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVBY3Rpb24sXG4gIGNvbmZpZ3VyZVN0b3JlLFxuICBjcmVhdGVSZWR1Y2VyLFxuICBnZXREZWZhdWx0TWlkZGxld2FyZSxcbn0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xuaW1wb3J0IHsgcm9vdFNhZ2EgfSBmcm9tIFwiLi4vc2FnYXNcIjtcbmltcG9ydCB7IFJhd0NvbW1lbnQsIENvbW1lbnQsIFBvc3RzIH0gZnJvbSBcIi4uLy4uL2xpYi90eXBlc1wiO1xuXG5jb25zdCBpbml0aWFsaXNlU2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuY29uc3QgbWlkZGxld2FyZSA9IFsuLi5nZXREZWZhdWx0TWlkZGxld2FyZSgpLCBpbml0aWFsaXNlU2FnYU1pZGRsZXdhcmVdO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsUG9zdHMgPSBjcmVhdGVBY3Rpb248UG9zdHM+KFwiZ2V0UG9zdHNcIik7XG5leHBvcnQgY29uc3QgY3JlYXRlQ29tbWVudCA9IGNyZWF0ZUFjdGlvbjxSYXdDb21tZW50PihcImNyZWF0ZUNvbW1lbnRcIik7XG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdCA9IGNyZWF0ZUFjdGlvbihcImNyZWF0ZVBvc3RcIik7XG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IGNyZWF0ZUFjdGlvbjxDb21tZW50PihcImFkZENvbW1lbnRcIik7XG5leHBvcnQgY29uc3QgYXBpRXJyb3IgPSBjcmVhdGVBY3Rpb248c3RyaW5nPihcImFwaUVycm9yZWRcIik7XG5cbmV4cG9ydCB0eXBlIFN0YXRlID0ge1xuICBwb3N0czogUG9zdHM7XG4gIGVycm9yOiBzdHJpbmcgfCBudWxsO1xufTtcblxuY29uc3QgZGVmYXVsU3RhdGU6IFN0YXRlID0ge1xuICBwb3N0czogW10sXG4gIGVycm9yOiBudWxsLFxufTtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjcmVhdGVSZWR1Y2VyKGRlZmF1bFN0YXRlLCAoYnVpbGRlcikgPT4ge1xuICBidWlsZGVyXG4gICAgLmFkZENhc2UoZ2V0QWxsUG9zdHMsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5wb3N0cy5wdXNoKC4uLmFjdGlvbi5wYXlsb2FkKTtcbiAgICB9KVxuICAgIC5hZGRDYXNlKGFkZENvbW1lbnQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBwaWQgPSBzdGF0ZS5wb3N0cy5maW5kSW5kZXgoXG4gICAgICAgIChwb3N0KSA9PiBwb3N0LmlkID09PSBhY3Rpb24ucGF5bG9hZC5wb3N0SWRcbiAgICAgICk7XG4gICAgICBzdGF0ZS5wb3N0c1twaWRdLmNvbW1lbnRzLnB1c2goYWN0aW9uLnBheWxvYWQpO1xuICAgIH0pXG4gICAgLmFkZENhc2UoYXBpRXJyb3IsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0pO1xufSk7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHsgcmVkdWNlcjogcm9vdFJlZHVjZXIsIG1pZGRsZXdhcmUgfSk7XG5pbml0aWFsaXNlU2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/store/store.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@reduxjs/toolkit\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCI/Y2NkOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAcmVkdXhqcy90b29sa2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@reduxjs/toolkit\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ })

/******/ });