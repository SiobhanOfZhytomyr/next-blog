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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPosts\", function() { return getPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postComment\", function() { return postComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postPost\", function() { return postPost; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst getPosts = async () => {\n  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://simple-blog-api.crew.red/posts`);\n  const ids = res.data.map(post => post.id);\n  return await Promise.all(ids.map(async elem => {\n    const content = await axios__WEBPACK_IMPORTED_MODULE_0___default()({\n      method: 'GET',\n      url: `https://simple-blog-api.crew.red/posts/${elem}`,\n      params: {\n        _embed: 'comments'\n      }\n    });\n    return content.data;\n  }));\n};\nconst postComment = comment => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    method: 'POST',\n    url: 'https://simple-blog-api.crew.red/comments',\n    data: _objectSpread({}, comment)\n  }).then(res => res.data);\n};\nconst postPost = post => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    method: 'POST',\n    url: 'https://simple-blog-api.crew.red/posts',\n    data: _objectSpread({}, post)\n  }).then(res => res.data);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXBpLnRzPzVhOGEiXSwibmFtZXMiOlsiZ2V0UG9zdHMiLCJyZXMiLCJheGlvcyIsImdldCIsImlkcyIsImRhdGEiLCJtYXAiLCJwb3N0IiwiaWQiLCJQcm9taXNlIiwiYWxsIiwiZWxlbSIsImNvbnRlbnQiLCJtZXRob2QiLCJ1cmwiLCJwYXJhbXMiLCJfZW1iZWQiLCJwb3N0Q29tbWVudCIsImNvbW1lbnQiLCJ0aGVuIiwicG9zdFBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBSU8sTUFBTUEsUUFBUSxHQUFHLFlBQTBCO0FBQzlDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVcsd0NBQVgsQ0FBbEI7QUFDQSxRQUFNQyxHQUFRLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSixDQUFTQyxHQUFULENBQWNDLElBQUQsSUFBVUEsSUFBSSxDQUFDQyxFQUE1QixDQUFqQjtBQUNBLFNBQU8sTUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQ1ROLEdBQUcsQ0FBQ0UsR0FBSixDQUFRLE1BQU9LLElBQVAsSUFBZ0I7QUFDcEIsVUFBTUMsT0FBTyxHQUFHLE1BQU1WLDRDQUFLLENBQUM7QUFDeEJXLFlBQU0sRUFBRSxLQURnQjtBQUV4QkMsU0FBRyxFQUFHLDBDQUF5Q0gsSUFBSyxFQUY1QjtBQUd4QkksWUFBTSxFQUFFO0FBQ0pDLGNBQU0sRUFBRTtBQURKO0FBSGdCLEtBQUQsQ0FBM0I7QUFPQSxXQUFPSixPQUFPLENBQUNQLElBQWY7QUFDSCxHQVRELENBRFMsQ0FBYjtBQVlILENBZk07QUFpQkEsTUFBTVksV0FBVyxHQUFJQyxPQUFELElBQTJDO0FBQ2xFLFNBQU9oQiw0Q0FBSyxDQUFDO0FBQ1RXLFVBQU0sRUFBRSxNQURDO0FBRVRDLE9BQUcsRUFBRSwyQ0FGSTtBQUdUVCxRQUFJLG9CQUNHYSxPQURIO0FBSEssR0FBRCxDQUFMLENBTUpDLElBTkksQ0FNRWxCLEdBQUQsSUFBU0EsR0FBRyxDQUFDSSxJQU5kLENBQVA7QUFPSCxDQVJNO0FBVUEsTUFBTWUsUUFBUSxHQUFJYixJQUFELElBQWlDO0FBQ3JELFNBQU9MLDRDQUFLLENBQUM7QUFDVFcsVUFBTSxFQUFFLE1BREM7QUFFVEMsT0FBRyxFQUFFLHdDQUZJO0FBR1RULFFBQUksb0JBQ0dFLElBREg7QUFISyxHQUFELENBQUwsQ0FNSlksSUFOSSxDQU1FbEIsR0FBRCxJQUFTQSxHQUFHLENBQUNJLElBTmQsQ0FBUDtBQU9ILENBUk0iLCJmaWxlIjoiLi9saWIvYXBpLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFBvc3RzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBJZHMsIFJhd0NvbW1lbnQsIFJhd1Bvc3QsIENvbW1lbnQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RzID0gYXN5bmMgKCk6IFByb21pc2U8YW55PiA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0c2ApO1xuICAgIGNvbnN0IGlkczogSWRzID0gcmVzLmRhdGEubWFwKChwb3N0KSA9PiBwb3N0LmlkKTtcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGw8UG9zdHM+KFxuICAgICAgICBpZHMubWFwKGFzeW5jIChlbGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMvJHtlbGVtfWAsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIF9lbWJlZDogJ2NvbW1lbnRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gY29udGVudC5kYXRhO1xuICAgICAgICB9KSxcbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHBvc3RDb21tZW50ID0gKGNvbW1lbnQ6IFJhd0NvbW1lbnQpOiBQcm9taXNlPENvbW1lbnQ+ID0+IHtcbiAgICByZXR1cm4gYXhpb3Moe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvY29tbWVudHMnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAuLi5jb21tZW50LFxuICAgICAgICB9LFxuICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IHBvc3RQb3N0ID0gKHBvc3Q6IFJhd1Bvc3QpOiBQcm9taXNlPGFueT4gPT4ge1xuICAgIHJldHVybiBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICB1cmw6ICdodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cycsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIC4uLnBvc3QsXG4gICAgICAgIH0sXG4gICAgfSkudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store/store */ \"./redux/store/store.ts\");\nvar _jsxFileName = \"/home/nik/projects/js/next-blog/pages/_app.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n    store: _redux_store_store__WEBPACK_IMPORTED_MODULE_2__[\"store\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUFpRDtBQUM1RCxTQUNJLE1BQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVDLHdEQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxTQUFELGVBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKLENBREo7QUFLSCIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL3JlZHV4L3N0b3JlL3N0b3JlJztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./redux/sagas.ts":
/*!************************!*\
  !*** ./redux/sagas.ts ***!
  \************************/
/*! exports provided: rootSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rootSaga\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/store */ \"./redux/store/store.ts\");\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction* commentWorkerSaga(action) {\n  try {\n    const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(_lib_api__WEBPACK_IMPORTED_MODULE_2__[\"postComment\"], action.payload);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_store_store__WEBPACK_IMPORTED_MODULE_1__[\"addComment\"])(res));\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_store_store__WEBPACK_IMPORTED_MODULE_1__[\"apiError\"])(e));\n  }\n}\n\nfunction* postWorkerSaga(action) {\n  try {\n    const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(_lib_api__WEBPACK_IMPORTED_MODULE_2__[\"postPost\"], action.payload);\n\n    const prep = _objectSpread(_objectSpread({}, res), {}, {\n      comments: []\n    });\n\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_store_store__WEBPACK_IMPORTED_MODULE_1__[\"addPost\"])(prep));\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_store_store__WEBPACK_IMPORTED_MODULE_1__[\"apiError\"])(e));\n  }\n}\n\nfunction* postSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeEvery\"])(_store_store__WEBPACK_IMPORTED_MODULE_1__[\"createPost\"], postWorkerSaga);\n}\n\nfunction* commentSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeEvery\"])(_store_store__WEBPACK_IMPORTED_MODULE_1__[\"createComment\"], commentWorkerSaga);\n}\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([postSaga(), commentSaga()]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zYWdhcy50cz82OTY0Il0sIm5hbWVzIjpbImNvbW1lbnRXb3JrZXJTYWdhIiwiYWN0aW9uIiwicmVzIiwiY2FsbCIsInBvc3RDb21tZW50IiwicGF5bG9hZCIsInB1dCIsImFkZENvbW1lbnQiLCJlIiwiYXBpRXJyb3IiLCJwb3N0V29ya2VyU2FnYSIsInBvc3RQb3N0IiwicHJlcCIsImNvbW1lbnRzIiwiYWRkUG9zdCIsInBvc3RTYWdhIiwidGFrZUV2ZXJ5IiwiY3JlYXRlUG9zdCIsImNvbW1lbnRTYWdhIiwiY3JlYXRlQ29tbWVudCIsInJvb3RTYWdhIiwiYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVUEsaUJBQVYsQ0FBNEJDLE1BQTVCLEVBQW9DO0FBQ2hDLE1BQUk7QUFDQSxVQUFNQyxHQUFHLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0Msb0RBQUQsRUFBY0gsTUFBTSxDQUFDSSxPQUFyQixDQUF0QjtBQUNBLFVBQU1DLDhEQUFHLENBQUNDLCtEQUFVLENBQUNMLEdBQUQsQ0FBWCxDQUFUO0FBQ0gsR0FIRCxDQUdFLE9BQU9NLENBQVAsRUFBVTtBQUNSLFVBQU1GLDhEQUFHLENBQUNHLDZEQUFRLENBQUNELENBQUQsQ0FBVCxDQUFUO0FBQ0g7QUFDSjs7QUFFRCxVQUFVRSxjQUFWLENBQXlCVCxNQUF6QixFQUFpQztBQUM3QixNQUFJO0FBQ0EsVUFBTUMsR0FBRyxHQUFHLE1BQU1DLCtEQUFJLENBQUNRLGlEQUFELEVBQVdWLE1BQU0sQ0FBQ0ksT0FBbEIsQ0FBdEI7O0FBQ0EsVUFBTU8sSUFBSSxtQ0FBUVYsR0FBUjtBQUFhVyxjQUFRLEVBQUU7QUFBdkIsTUFBVjs7QUFDQSxVQUFNUCw4REFBRyxDQUFDUSw0REFBTyxDQUFDRixJQUFELENBQVIsQ0FBVDtBQUNILEdBSkQsQ0FJRSxPQUFPSixDQUFQLEVBQVU7QUFDUixVQUFNRiw4REFBRyxDQUFDRyw2REFBUSxDQUFDRCxDQUFELENBQVQsQ0FBVDtBQUNIO0FBQ0o7O0FBRUQsVUFBVU8sUUFBVixHQUFxQjtBQUNqQixRQUFNQyxvRUFBUyxDQUFDQyx1REFBRCxFQUFhUCxjQUFiLENBQWY7QUFDSDs7QUFFRCxVQUFVUSxXQUFWLEdBQXdCO0FBQ3BCLFFBQU1GLG9FQUFTLENBQUNHLDBEQUFELEVBQWdCbkIsaUJBQWhCLENBQWY7QUFDSDs7QUFFTSxVQUFVb0IsUUFBVixHQUFxQjtBQUN4QixRQUFNQyw4REFBRyxDQUFDLENBQUNOLFFBQVEsRUFBVCxFQUFhRyxXQUFXLEVBQXhCLENBQUQsQ0FBVDtBQUNIIiwiZmlsZSI6Ii4vcmVkdXgvc2FnYXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YWtlRXZlcnksIGNhbGwsIHB1dCwgYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IGNyZWF0ZUNvbW1lbnQsIGNyZWF0ZVBvc3QsIGFkZENvbW1lbnQsIGFwaUVycm9yLCBhZGRQb3N0IH0gZnJvbSAnLi9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgeyBwb3N0Q29tbWVudCwgcG9zdFBvc3QgfSBmcm9tICcuLi9saWIvYXBpJztcblxuZnVuY3Rpb24qIGNvbW1lbnRXb3JrZXJTYWdhKGFjdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhbGwocG9zdENvbW1lbnQsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgeWllbGQgcHV0KGFkZENvbW1lbnQocmVzKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB5aWVsZCBwdXQoYXBpRXJyb3IoZSkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIHBvc3RXb3JrZXJTYWdhKGFjdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhbGwocG9zdFBvc3QsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgY29uc3QgcHJlcCA9IHsgLi4ucmVzLCBjb21tZW50czogW10gfTtcbiAgICAgICAgeWllbGQgcHV0KGFkZFBvc3QocHJlcCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgeWllbGQgcHV0KGFwaUVycm9yKGUpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcbiAgICB5aWVsZCB0YWtlRXZlcnkoY3JlYXRlUG9zdCwgcG9zdFdvcmtlclNhZ2EpO1xufVxuXG5mdW5jdGlvbiogY29tbWVudFNhZ2EoKSB7XG4gICAgeWllbGQgdGFrZUV2ZXJ5KGNyZWF0ZUNvbW1lbnQsIGNvbW1lbnRXb3JrZXJTYWdhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgICB5aWVsZCBhbGwoW3Bvc3RTYWdhKCksIGNvbW1lbnRTYWdhKCldKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/sagas.ts\n");

/***/ }),

/***/ "./redux/store/store.ts":
/*!******************************!*\
  !*** ./redux/store/store.ts ***!
  \******************************/
/*! exports provided: getAllPosts, createComment, createPost, addPost, addComment, apiError, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPosts\", function() { return getAllPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createComment\", function() { return createComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPost\", function() { return createPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiError\", function() { return apiError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sagas */ \"./redux/sagas.ts\");\n\n\n\nconst initialiseSagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();\nconst middleware = [...Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"getDefaultMiddleware\"])(), initialiseSagaMiddleware];\nconst getAllPosts = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])('getPosts');\nconst createComment = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])('createComment');\nconst createPost = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])('createPost');\nconst addPost = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])('addPost');\nconst addComment = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])('addComment');\nconst apiError = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])('apiErrored');\nconst defaulState = {\n  posts: [],\n  error: null\n};\nconst rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createReducer\"])(defaulState, builder => {\n  builder.addCase(getAllPosts, (state, action) => {\n    state.posts.push(...action.payload);\n  }).addCase(addComment, (state, action) => {\n    const pid = state.posts.findIndex(post => post.id === action.payload.postId);\n    state.posts[pid].comments.push(action.payload);\n  }).addCase(addPost, (state, action) => {\n    state.posts.push(action.payload);\n  }).addCase(apiError, (state, action) => {\n    state.error = action.payload;\n  });\n});\nconst store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"configureStore\"])({\n  reducer: rootReducer,\n  middleware\n});\ninitialiseSagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_2__[\"rootSaga\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS9zdG9yZS50cz9kYTRhIl0sIm5hbWVzIjpbImluaXRpYWxpc2VTYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwiZ2V0QWxsUG9zdHMiLCJjcmVhdGVBY3Rpb24iLCJjcmVhdGVDb21tZW50IiwiY3JlYXRlUG9zdCIsImFkZFBvc3QiLCJhZGRDb21tZW50IiwiYXBpRXJyb3IiLCJkZWZhdWxTdGF0ZSIsInBvc3RzIiwiZXJyb3IiLCJyb290UmVkdWNlciIsImNyZWF0ZVJlZHVjZXIiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInN0YXRlIiwiYWN0aW9uIiwicHVzaCIsInBheWxvYWQiLCJwaWQiLCJmaW5kSW5kZXgiLCJwb3N0IiwiaWQiLCJwb3N0SWQiLCJjb21tZW50cyIsInN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJyZWR1Y2VyIiwicnVuIiwicm9vdFNhZ2EiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0EsTUFBTUEsd0JBQXdCLEdBQUdDLGlEQUFvQixFQUFyRDtBQUNBLE1BQU1DLFVBQVUsR0FBRyxDQUFDLEdBQUdDLDZFQUFvQixFQUF4QixFQUE0Qkgsd0JBQTVCLENBQW5CO0FBRU8sTUFBTUksV0FBVyxHQUFHQyxxRUFBWSxDQUFRLFVBQVIsQ0FBaEM7QUFDQSxNQUFNQyxhQUFhLEdBQUdELHFFQUFZLENBQWEsZUFBYixDQUFsQztBQUNBLE1BQU1FLFVBQVUsR0FBR0YscUVBQVksQ0FBVSxZQUFWLENBQS9CO0FBQ0EsTUFBTUcsT0FBTyxHQUFHSCxxRUFBWSxDQUFXLFNBQVgsQ0FBNUI7QUFDQSxNQUFNSSxVQUFVLEdBQUdKLHFFQUFZLENBQVUsWUFBVixDQUEvQjtBQUNBLE1BQU1LLFFBQVEsR0FBR0wscUVBQVksQ0FBUyxZQUFULENBQTdCO0FBT1AsTUFBTU0sV0FBa0IsR0FBRztBQUN2QkMsT0FBSyxFQUFFLEVBRGdCO0FBRXZCQyxPQUFLLEVBQUU7QUFGZ0IsQ0FBM0I7QUFLQSxNQUFNQyxXQUFXLEdBQUdDLHNFQUFhLENBQUNKLFdBQUQsRUFBZUssT0FBRCxJQUFhO0FBQ3hEQSxTQUFPLENBQ0ZDLE9BREwsQ0FDYWIsV0FEYixFQUMwQixDQUFDYyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDckNELFNBQUssQ0FBQ04sS0FBTixDQUFZUSxJQUFaLENBQWlCLEdBQUdELE1BQU0sQ0FBQ0UsT0FBM0I7QUFDSCxHQUhMLEVBSUtKLE9BSkwsQ0FJYVIsVUFKYixFQUl5QixDQUFDUyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDcEMsVUFBTUcsR0FBRyxHQUFHSixLQUFLLENBQUNOLEtBQU4sQ0FBWVcsU0FBWixDQUF1QkMsSUFBRCxJQUFVQSxJQUFJLENBQUNDLEVBQUwsS0FBWU4sTUFBTSxDQUFDRSxPQUFQLENBQWVLLE1BQTNELENBQVo7QUFDQVIsU0FBSyxDQUFDTixLQUFOLENBQVlVLEdBQVosRUFBaUJLLFFBQWpCLENBQTBCUCxJQUExQixDQUErQkQsTUFBTSxDQUFDRSxPQUF0QztBQUNILEdBUEwsRUFRS0osT0FSTCxDQVFhVCxPQVJiLEVBUXNCLENBQUNVLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUNqQ0QsU0FBSyxDQUFDTixLQUFOLENBQVlRLElBQVosQ0FBaUJELE1BQU0sQ0FBQ0UsT0FBeEI7QUFDSCxHQVZMLEVBV0tKLE9BWEwsQ0FXYVAsUUFYYixFQVd1QixDQUFDUSxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDbENELFNBQUssQ0FBQ0wsS0FBTixHQUFjTSxNQUFNLENBQUNFLE9BQXJCO0FBQ0gsR0FiTDtBQWNILENBZmdDLENBQWpDO0FBaUJPLE1BQU1PLEtBQUssR0FBR0MsdUVBQWMsQ0FBQztBQUFFQyxTQUFPLEVBQUVoQixXQUFYO0FBQXdCWjtBQUF4QixDQUFELENBQTVCO0FBQ1BGLHdCQUF3QixDQUFDK0IsR0FBekIsQ0FBNkJDLCtDQUE3QiIsImZpbGUiOiIuL3JlZHV4L3N0b3JlL3N0b3JlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQWN0aW9uLCBjb25maWd1cmVTdG9yZSwgY3JlYXRlUmVkdWNlciwgZ2V0RGVmYXVsdE1pZGRsZXdhcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcbmltcG9ydCB7IHJvb3RTYWdhIH0gZnJvbSAnLi4vc2FnYXMnO1xuaW1wb3J0IHsgUmF3Q29tbWVudCwgQ29tbWVudCwgUG9zdHMsIFBvc3RUeXBlLCBSYXdQb3N0IH0gZnJvbSAnLi4vLi4vbGliL3R5cGVzJztcblxuY29uc3QgaW5pdGlhbGlzZVNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbmNvbnN0IG1pZGRsZXdhcmUgPSBbLi4uZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKSwgaW5pdGlhbGlzZVNhZ2FNaWRkbGV3YXJlXTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbFBvc3RzID0gY3JlYXRlQWN0aW9uPFBvc3RzPignZ2V0UG9zdHMnKTtcbmV4cG9ydCBjb25zdCBjcmVhdGVDb21tZW50ID0gY3JlYXRlQWN0aW9uPFJhd0NvbW1lbnQ+KCdjcmVhdGVDb21tZW50Jyk7XG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdCA9IGNyZWF0ZUFjdGlvbjxSYXdQb3N0PignY3JlYXRlUG9zdCcpO1xuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSBjcmVhdGVBY3Rpb248UG9zdFR5cGU+KCdhZGRQb3N0Jyk7XG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IGNyZWF0ZUFjdGlvbjxDb21tZW50PignYWRkQ29tbWVudCcpO1xuZXhwb3J0IGNvbnN0IGFwaUVycm9yID0gY3JlYXRlQWN0aW9uPHN0cmluZz4oJ2FwaUVycm9yZWQnKTtcblxuZXhwb3J0IHR5cGUgU3RhdGUgPSB7XG4gICAgcG9zdHM6IFBvc3RzO1xuICAgIGVycm9yOiBzdHJpbmcgfCBudWxsO1xufTtcblxuY29uc3QgZGVmYXVsU3RhdGU6IFN0YXRlID0ge1xuICAgIHBvc3RzOiBbXSxcbiAgICBlcnJvcjogbnVsbCxcbn07XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihkZWZhdWxTdGF0ZSwgKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyXG4gICAgICAgIC5hZGRDYXNlKGdldEFsbFBvc3RzLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUucG9zdHMucHVzaCguLi5hY3Rpb24ucGF5bG9hZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGFkZENvbW1lbnQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwaWQgPSBzdGF0ZS5wb3N0cy5maW5kSW5kZXgoKHBvc3QpID0+IHBvc3QuaWQgPT09IGFjdGlvbi5wYXlsb2FkLnBvc3RJZCk7XG4gICAgICAgICAgICBzdGF0ZS5wb3N0c1twaWRdLmNvbW1lbnRzLnB1c2goYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICB9KVxuICAgICAgICAuYWRkQ2FzZShhZGRQb3N0LCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUucG9zdHMucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRDYXNlKGFwaUVycm9yLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoeyByZWR1Y2VyOiByb290UmVkdWNlciwgbWlkZGxld2FyZSB9KTtcbmluaXRpYWxpc2VTYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/store/store.ts\n");

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