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
/*! exports provided: getPosts, postComment, postPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPosts\", function() { return getPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postComment\", function() { return postComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postPost\", function() { return postPost; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst getPosts = async () => {\n  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://simple-blog-api.crew.red/posts`);\n  const ids = res.data.map(post => post.id);\n  return await Promise.all(ids.map(async elem => {\n    const content = await axios__WEBPACK_IMPORTED_MODULE_0___default()({\n      method: \"GET\",\n      url: `https://simple-blog-api.crew.red/posts/${elem}`,\n      params: {\n        _embed: \"comments\"\n      }\n    });\n    return content.data;\n  }));\n};\nconst postComment = comment => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    method: \"POST\",\n    url: \"https://simple-blog-api.crew.red/comments\",\n    data: _objectSpread({}, comment)\n  }).then(res => res.data);\n};\nconst postPost = post => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    method: \"POST\",\n    url: \"https://simple-blog-api.crew.red/posts\",\n    data: _objectSpread({}, post)\n  }).then(res => res.data);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXBpLnRzPzVhOGEiXSwibmFtZXMiOlsiZ2V0UG9zdHMiLCJyZXMiLCJheGlvcyIsImdldCIsImlkcyIsImRhdGEiLCJtYXAiLCJwb3N0IiwiaWQiLCJQcm9taXNlIiwiYWxsIiwiZWxlbSIsImNvbnRlbnQiLCJtZXRob2QiLCJ1cmwiLCJwYXJhbXMiLCJfZW1iZWQiLCJwb3N0Q29tbWVudCIsImNvbW1lbnQiLCJ0aGVuIiwicG9zdFBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBSU8sTUFBTUEsUUFBUSxHQUFHLFlBQVk7QUFDbEMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVyx3Q0FBWCxDQUFsQjtBQUNBLFFBQU1DLEdBQVEsR0FBR0gsR0FBRyxDQUFDSSxJQUFKLENBQVNDLEdBQVQsQ0FBY0MsSUFBRCxJQUFVQSxJQUFJLENBQUNDLEVBQTVCLENBQWpCO0FBQ0EsU0FBTyxNQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FDWE4sR0FBRyxDQUFDRSxHQUFKLENBQVEsTUFBT0ssSUFBUCxJQUFnQjtBQUN0QixVQUFNQyxPQUFPLEdBQUcsTUFBTVYsNENBQUssQ0FBQztBQUMxQlcsWUFBTSxFQUFFLEtBRGtCO0FBRTFCQyxTQUFHLEVBQUcsMENBQXlDSCxJQUFLLEVBRjFCO0FBRzFCSSxZQUFNLEVBQUU7QUFDTkMsY0FBTSxFQUFFO0FBREY7QUFIa0IsS0FBRCxDQUEzQjtBQU9BLFdBQU9KLE9BQU8sQ0FBQ1AsSUFBZjtBQUNELEdBVEQsQ0FEVyxDQUFiO0FBWUQsQ0FmTTtBQWlCQSxNQUFNWSxXQUFXLEdBQUlDLE9BQUQsSUFBeUI7QUFDbEQsU0FBT2hCLDRDQUFLLENBQUM7QUFDWFcsVUFBTSxFQUFFLE1BREc7QUFFWEMsT0FBRyxFQUFFLDJDQUZNO0FBR1hULFFBQUksb0JBQ0NhLE9BREQ7QUFITyxHQUFELENBQUwsQ0FNSkMsSUFOSSxDQU1FbEIsR0FBRCxJQUFTQSxHQUFHLENBQUNJLElBTmQsQ0FBUDtBQU9ELENBUk07QUFVQSxNQUFNZSxRQUFRLEdBQUliLElBQUQsSUFBbUI7QUFDekMsU0FBT0wsNENBQUssQ0FBQztBQUNYVyxVQUFNLEVBQUUsTUFERztBQUVYQyxPQUFHLEVBQUUsd0NBRk07QUFHWFQsUUFBSSxvQkFDQ0UsSUFERDtBQUhPLEdBQUQsQ0FBTCxDQU1KWSxJQU5JLENBTUVsQixHQUFELElBQVNBLEdBQUcsQ0FBQ0ksSUFOZCxDQUFQO0FBT0QsQ0FSTSIsImZpbGUiOiIuL2xpYi9hcGkudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBQb3N0cyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBJZHMsIFJhd0NvbW1lbnQsIFJhd1Bvc3QgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHNgKTtcbiAgY29uc3QgaWRzOiBJZHMgPSByZXMuZGF0YS5tYXAoKHBvc3QpID0+IHBvc3QuaWQpO1xuICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGw8UG9zdHM+KFxuICAgIGlkcy5tYXAoYXN5bmMgKGVsZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgdXJsOiBgaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMvJHtlbGVtfWAsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIF9lbWJlZDogXCJjb21tZW50c1wiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY29udGVudC5kYXRhO1xuICAgIH0pXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgcG9zdENvbW1lbnQgPSAoY29tbWVudDogUmF3Q29tbWVudCkgPT4ge1xuICByZXR1cm4gYXhpb3Moe1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL2NvbW1lbnRzXCIsXG4gICAgZGF0YToge1xuICAgICAgLi4uY29tbWVudCxcbiAgICB9LFxuICB9KS50aGVuKChyZXMpID0+IHJlcy5kYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBwb3N0UG9zdCA9IChwb3N0OiBSYXdQb3N0KSA9PiB7XG4gIHJldHVybiBheGlvcyh7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHNcIixcbiAgICBkYXRhOiB7XG4gICAgICAuLi5wb3N0LFxuICAgIH0sXG4gIH0pLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/api.ts\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rootSaga\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/store */ \"./redux/store/store.ts\");\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction* commentWorkerSaga(action) {\n  try {\n    const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(_lib_api__WEBPACK_IMPORTED_MODULE_2__[\"postComment\"], action.payload);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_store_store__WEBPACK_IMPORTED_MODULE_1__[\"addComment\"])(res));\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_store_store__WEBPACK_IMPORTED_MODULE_1__[\"apiError\"])(e));\n  }\n}\n\nfunction* postWorkerSaga(action) {\n  try {\n    const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(_lib_api__WEBPACK_IMPORTED_MODULE_2__[\"postPost\"], action.payload);\n\n    const prep = _objectSpread(_objectSpread({}, res), {}, {\n      comments: []\n    });\n\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_store_store__WEBPACK_IMPORTED_MODULE_1__[\"addPost\"])(prep));\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_store_store__WEBPACK_IMPORTED_MODULE_1__[\"apiError\"])(e));\n  }\n}\n\nfunction* postSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeEvery\"])(_store_store__WEBPACK_IMPORTED_MODULE_1__[\"createPost\"], postWorkerSaga);\n}\n\nfunction* commentSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeEvery\"])(_store_store__WEBPACK_IMPORTED_MODULE_1__[\"createComment\"], commentWorkerSaga);\n}\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([postSaga(), commentSaga()]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zYWdhcy50cz82OTY0Il0sIm5hbWVzIjpbImNvbW1lbnRXb3JrZXJTYWdhIiwiYWN0aW9uIiwicmVzIiwiY2FsbCIsInBvc3RDb21tZW50IiwicGF5bG9hZCIsInB1dCIsImFkZENvbW1lbnQiLCJlIiwiYXBpRXJyb3IiLCJwb3N0V29ya2VyU2FnYSIsInBvc3RQb3N0IiwicHJlcCIsImNvbW1lbnRzIiwiYWRkUG9zdCIsInBvc3RTYWdhIiwidGFrZUV2ZXJ5IiwiY3JlYXRlUG9zdCIsImNvbW1lbnRTYWdhIiwiY3JlYXRlQ29tbWVudCIsInJvb3RTYWdhIiwiYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsVUFBVUEsaUJBQVYsQ0FBNEJDLE1BQTVCLEVBQW9DO0FBQ2hDLE1BQUk7QUFDQSxVQUFNQyxHQUFHLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0Msb0RBQUQsRUFBY0gsTUFBTSxDQUFDSSxPQUFyQixDQUF0QjtBQUNBLFVBQU1DLDhEQUFHLENBQUNDLCtEQUFVLENBQUNMLEdBQUQsQ0FBWCxDQUFUO0FBQ0gsR0FIRCxDQUlBLE9BQU1NLENBQU4sRUFBUztBQUNMLFVBQU1GLDhEQUFHLENBQUNHLDZEQUFRLENBQUNELENBQUQsQ0FBVCxDQUFUO0FBQ0g7QUFDSjs7QUFFRCxVQUFVRSxjQUFWLENBQXlCVCxNQUF6QixFQUFnQztBQUM1QixNQUFJO0FBQ0EsVUFBTUMsR0FBRyxHQUFHLE1BQU1DLCtEQUFJLENBQUNRLGlEQUFELEVBQVdWLE1BQU0sQ0FBQ0ksT0FBbEIsQ0FBdEI7O0FBQ0EsVUFBTU8sSUFBSSxtQ0FBT1YsR0FBUDtBQUFZVyxjQUFRLEVBQUU7QUFBdEIsTUFBVjs7QUFDQSxVQUFNUCw4REFBRyxDQUFDUSw0REFBTyxDQUFDRixJQUFELENBQVIsQ0FBVDtBQUNILEdBSkQsQ0FLQSxPQUFNSixDQUFOLEVBQVM7QUFDTCxVQUFNRiw4REFBRyxDQUFDRyw2REFBUSxDQUFDRCxDQUFELENBQVQsQ0FBVDtBQUNIO0FBQ0o7O0FBRUQsVUFBVU8sUUFBVixHQUFxQjtBQUNqQixRQUFNQyxvRUFBUyxDQUFDQyx1REFBRCxFQUFhUCxjQUFiLENBQWY7QUFDSDs7QUFFRCxVQUFVUSxXQUFWLEdBQXdCO0FBQ3BCLFFBQU1GLG9FQUFTLENBQUNHLDBEQUFELEVBQWdCbkIsaUJBQWhCLENBQWY7QUFDSDs7QUFFTSxVQUFVb0IsUUFBVixHQUFvQjtBQUN2QixRQUFNQyw4REFBRyxDQUFDLENBQ05OLFFBQVEsRUFERixFQUVORyxXQUFXLEVBRkwsQ0FBRCxDQUFUO0FBSUgiLCJmaWxlIjoiLi9yZWR1eC9zYWdhcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRha2VFdmVyeSwgY2FsbCwgcHV0LCBhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQge0NvbW1lbnQsIFJhd0NvbW1lbnR9IGZyb20gJy4uL2xpYi90eXBlcydcbmltcG9ydCB7Y3JlYXRlQ29tbWVudCwgY3JlYXRlUG9zdCwgYWRkQ29tbWVudCxhcGlFcnJvcixhZGRQb3N0fSBmcm9tICcuL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IHtwb3N0Q29tbWVudCwgcG9zdFBvc3R9IGZyb20gJy4uL2xpYi9hcGknXG5cbmZ1bmN0aW9uKiBjb21tZW50V29ya2VyU2FnYShhY3Rpb24pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKHBvc3RDb21tZW50LCBhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgeWllbGQgcHV0KGFkZENvbW1lbnQocmVzKSlcbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgICB5aWVsZCBwdXQoYXBpRXJyb3IoZSkpXG4gICAgfVxufVxuXG5mdW5jdGlvbiogcG9zdFdvcmtlclNhZ2EoYWN0aW9uKXtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKHBvc3RQb3N0LCBhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgY29uc3QgcHJlcCA9IHsuLi5yZXMsIGNvbW1lbnRzOiBbXX1cbiAgICAgICAgeWllbGQgcHV0KGFkZFBvc3QocHJlcCkpXG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgICAgeWllbGQgcHV0KGFwaUVycm9yKGUpKVxuICAgIH1cbn1cblxuZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xuICAgIHlpZWxkIHRha2VFdmVyeShjcmVhdGVQb3N0LCBwb3N0V29ya2VyU2FnYSk7XG59XG5cbmZ1bmN0aW9uKiBjb21tZW50U2FnYSgpIHtcbiAgICB5aWVsZCB0YWtlRXZlcnkoY3JlYXRlQ29tbWVudCwgY29tbWVudFdvcmtlclNhZ2EpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24qIHJvb3RTYWdhKCl7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgcG9zdFNhZ2EoKSxcbiAgICAgICAgY29tbWVudFNhZ2EoKVxuICAgICAgXSlcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/sagas.ts\n");

/***/ }),

/***/ "./redux/store/store.ts":
/*!******************************!*\
  !*** ./redux/store/store.ts ***!
  \******************************/
/*! exports provided: getAllPosts, createComment, createPost, addPost, addComment, apiError, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPosts\", function() { return getAllPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createComment\", function() { return createComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPost\", function() { return createPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiError\", function() { return apiError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sagas */ \"./redux/sagas.ts\");\n\n\n\nconst initialiseSagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();\nconst middleware = [...Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"getDefaultMiddleware\"])(), initialiseSagaMiddleware];\nconst getAllPosts = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(\"getPosts\");\nconst createComment = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(\"createComment\");\nconst createPost = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(\"createPost\");\nconst addPost = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(\"addPost\");\nconst addComment = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(\"addComment\");\nconst apiError = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(\"apiErrored\");\nconst defaulState = {\n  posts: [],\n  error: null\n};\nconst rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createReducer\"])(defaulState, builder => {\n  builder.addCase(getAllPosts, (state, action) => {\n    state.posts.push(...action.payload);\n  }).addCase(addComment, (state, action) => {\n    const pid = state.posts.findIndex(post => post.id === action.payload.postId);\n    state.posts[pid].comments.push(action.payload);\n  }).addCase(addPost, (state, action) => {\n    state.posts.push(action.payload);\n  }).addCase(apiError, (state, action) => {\n    state.error = action.payload;\n  });\n});\nconst store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"configureStore\"])({\n  reducer: rootReducer,\n  middleware\n});\ninitialiseSagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_2__[\"rootSaga\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS9zdG9yZS50cz9kYTRhIl0sIm5hbWVzIjpbImluaXRpYWxpc2VTYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwiZ2V0QWxsUG9zdHMiLCJjcmVhdGVBY3Rpb24iLCJjcmVhdGVDb21tZW50IiwiY3JlYXRlUG9zdCIsImFkZFBvc3QiLCJhZGRDb21tZW50IiwiYXBpRXJyb3IiLCJkZWZhdWxTdGF0ZSIsInBvc3RzIiwiZXJyb3IiLCJyb290UmVkdWNlciIsImNyZWF0ZVJlZHVjZXIiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInN0YXRlIiwiYWN0aW9uIiwicHVzaCIsInBheWxvYWQiLCJwaWQiLCJmaW5kSW5kZXgiLCJwb3N0IiwiaWQiLCJwb3N0SWQiLCJjb21tZW50cyIsInN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJyZWR1Y2VyIiwicnVuIiwicm9vdFNhZ2EiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBR0EsTUFBTUEsd0JBQXdCLEdBQUdDLGlEQUFvQixFQUFyRDtBQUNBLE1BQU1DLFVBQVUsR0FBRyxDQUFDLEdBQUdDLDZFQUFvQixFQUF4QixFQUE0Qkgsd0JBQTVCLENBQW5CO0FBRU8sTUFBTUksV0FBVyxHQUFHQyxxRUFBWSxDQUFRLFVBQVIsQ0FBaEM7QUFDQSxNQUFNQyxhQUFhLEdBQUdELHFFQUFZLENBQWEsZUFBYixDQUFsQztBQUNBLE1BQU1FLFVBQVUsR0FBR0YscUVBQVksQ0FBVSxZQUFWLENBQS9CO0FBQ0EsTUFBTUcsT0FBTyxHQUFHSCxxRUFBWSxDQUFXLFNBQVgsQ0FBNUI7QUFDQSxNQUFNSSxVQUFVLEdBQUdKLHFFQUFZLENBQVUsWUFBVixDQUEvQjtBQUNBLE1BQU1LLFFBQVEsR0FBR0wscUVBQVksQ0FBUyxZQUFULENBQTdCO0FBT1AsTUFBTU0sV0FBa0IsR0FBRztBQUN6QkMsT0FBSyxFQUFFLEVBRGtCO0FBRXpCQyxPQUFLLEVBQUU7QUFGa0IsQ0FBM0I7QUFLQSxNQUFNQyxXQUFXLEdBQUdDLHNFQUFhLENBQUNKLFdBQUQsRUFBZUssT0FBRCxJQUFhO0FBQzFEQSxTQUFPLENBQ0pDLE9BREgsQ0FDV2IsV0FEWCxFQUN3QixDQUFDYyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDdkNELFNBQUssQ0FBQ04sS0FBTixDQUFZUSxJQUFaLENBQWlCLEdBQUdELE1BQU0sQ0FBQ0UsT0FBM0I7QUFDRCxHQUhILEVBSUdKLE9BSkgsQ0FJV1IsVUFKWCxFQUl1QixDQUFDUyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDdEMsVUFBTUcsR0FBRyxHQUFHSixLQUFLLENBQUNOLEtBQU4sQ0FBWVcsU0FBWixDQUNUQyxJQUFELElBQVVBLElBQUksQ0FBQ0MsRUFBTCxLQUFZTixNQUFNLENBQUNFLE9BQVAsQ0FBZUssTUFEM0IsQ0FBWjtBQUdBUixTQUFLLENBQUNOLEtBQU4sQ0FBWVUsR0FBWixFQUFpQkssUUFBakIsQ0FBMEJQLElBQTFCLENBQStCRCxNQUFNLENBQUNFLE9BQXRDO0FBQ0QsR0FUSCxFQVVHSixPQVZILENBVVdULE9BVlgsRUFVb0IsQ0FBQ1UsS0FBRCxFQUFPQyxNQUFQLEtBQWtCO0FBQ2xDRCxTQUFLLENBQUNOLEtBQU4sQ0FBWVEsSUFBWixDQUFpQkQsTUFBTSxDQUFDRSxPQUF4QjtBQUNELEdBWkgsRUFhR0osT0FiSCxDQWFXUCxRQWJYLEVBYXFCLENBQUNRLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUNwQ0QsU0FBSyxDQUFDTCxLQUFOLEdBQWNNLE1BQU0sQ0FBQ0UsT0FBckI7QUFDRCxHQWZIO0FBZ0JELENBakJnQyxDQUFqQztBQW1CTyxNQUFNTyxLQUFLLEdBQUdDLHVFQUFjLENBQUM7QUFBRUMsU0FBTyxFQUFFaEIsV0FBWDtBQUF3Qlo7QUFBeEIsQ0FBRCxDQUE1QjtBQUNQRix3QkFBd0IsQ0FBQytCLEdBQXpCLENBQTZCQywrQ0FBN0IiLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS9zdG9yZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZUFjdGlvbixcbiAgY29uZmlndXJlU3RvcmUsXG4gIGNyZWF0ZVJlZHVjZXIsXG4gIGdldERlZmF1bHRNaWRkbGV3YXJlLFxufSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XG5pbXBvcnQgeyByb290U2FnYSB9IGZyb20gXCIuLi9zYWdhc1wiO1xuaW1wb3J0IHsgUmF3Q29tbWVudCwgQ29tbWVudCwgUG9zdHMsUG9zdFR5cGUsUmF3UG9zdCB9IGZyb20gXCIuLi8uLi9saWIvdHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbGlzZVNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbmNvbnN0IG1pZGRsZXdhcmUgPSBbLi4uZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKSwgaW5pdGlhbGlzZVNhZ2FNaWRkbGV3YXJlXTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbFBvc3RzID0gY3JlYXRlQWN0aW9uPFBvc3RzPihcImdldFBvc3RzXCIpO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbW1lbnQgPSBjcmVhdGVBY3Rpb248UmF3Q29tbWVudD4oXCJjcmVhdGVDb21tZW50XCIpO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3QgPSBjcmVhdGVBY3Rpb248UmF3UG9zdD4oXCJjcmVhdGVQb3N0XCIpO1xuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSBjcmVhdGVBY3Rpb248UG9zdFR5cGU+KFwiYWRkUG9zdFwiKVxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSBjcmVhdGVBY3Rpb248Q29tbWVudD4oXCJhZGRDb21tZW50XCIpO1xuZXhwb3J0IGNvbnN0IGFwaUVycm9yID0gY3JlYXRlQWN0aW9uPHN0cmluZz4oXCJhcGlFcnJvcmVkXCIpO1xuXG5leHBvcnQgdHlwZSBTdGF0ZSA9IHtcbiAgcG9zdHM6IFBvc3RzO1xuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcbn07XG5cbmNvbnN0IGRlZmF1bFN0YXRlOiBTdGF0ZSA9IHtcbiAgcG9zdHM6IFtdLFxuICBlcnJvcjogbnVsbCxcbn07XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihkZWZhdWxTdGF0ZSwgKGJ1aWxkZXIpID0+IHtcbiAgYnVpbGRlclxuICAgIC5hZGRDYXNlKGdldEFsbFBvc3RzLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUucG9zdHMucHVzaCguLi5hY3Rpb24ucGF5bG9hZCk7XG4gICAgfSlcbiAgICAuYWRkQ2FzZShhZGRDb21tZW50LCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgY29uc3QgcGlkID0gc3RhdGUucG9zdHMuZmluZEluZGV4KFxuICAgICAgICAocG9zdCkgPT4gcG9zdC5pZCA9PT0gYWN0aW9uLnBheWxvYWQucG9zdElkXG4gICAgICApO1xuICAgICAgc3RhdGUucG9zdHNbcGlkXS5jb21tZW50cy5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcbiAgICB9KVxuICAgIC5hZGRDYXNlKGFkZFBvc3QsIChzdGF0ZSxhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLnBvc3RzLnB1c2goYWN0aW9uLnBheWxvYWQpXG4gICAgfSlcbiAgICAuYWRkQ2FzZShhcGlFcnJvciwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoeyByZWR1Y2VyOiByb290UmVkdWNlciwgbWlkZGxld2FyZSB9KTtcbmluaXRpYWxpc2VTYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/store/store.ts\n");

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