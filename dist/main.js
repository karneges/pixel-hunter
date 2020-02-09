/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./img/correct.svg":
/*!*************************!*\
  !*** ./img/correct.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/correct-0f0cbde.svg\");\n\n//# sourceURL=webpack:///./img/correct.svg?");

/***/ }),

/***/ "./img/egg_big.png":
/*!*************************!*\
  !*** ./img/egg_big.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/egg_big-11ad7b9.png\");\n\n//# sourceURL=webpack:///./img/egg_big.png?");

/***/ }),

/***/ "./img/egg_distort.png":
/*!*****************************!*\
  !*** ./img/egg_distort.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/egg_distort-b0111a3.png\");\n\n//# sourceURL=webpack:///./img/egg_distort.png?");

/***/ }),

/***/ "./img/flash.svg":
/*!***********************!*\
  !*** ./img/flash.svg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/flash-b41902a.svg\");\n\n//# sourceURL=webpack:///./img/flash.svg?");

/***/ }),

/***/ "./img/heart__full.svg":
/*!*****************************!*\
  !*** ./img/heart__full.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/heart__full-d07a69f.svg\");\n\n//# sourceURL=webpack:///./img/heart__full.svg?");

/***/ }),

/***/ "./img/icons.png":
/*!***********************!*\
  !*** ./img/icons.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/icons-a8d8161.png\");\n\n//# sourceURL=webpack:///./img/icons.png?");

/***/ }),

/***/ "./img/paint_big.png":
/*!***************************!*\
  !*** ./img/paint_big.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/paint_big-e83dba7.png\");\n\n//# sourceURL=webpack:///./img/paint_big.png?");

/***/ }),

/***/ "./img/photo_big.png":
/*!***************************!*\
  !*** ./img/photo_big.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/photo_big-601f118.png\");\n\n//# sourceURL=webpack:///./img/photo_big.png?");

/***/ }),

/***/ "./img/turtle.svg":
/*!************************!*\
  !*** ./img/turtle.svg ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/turtle-b57fce0.svg\");\n\n//# sourceURL=webpack:///./img/turtle.svg?");

/***/ }),

/***/ "./img/unknown.svg":
/*!*************************!*\
  !*** ./img/unknown.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/unknown-c91545a.svg\");\n\n//# sourceURL=webpack:///./img/unknown.svg?");

/***/ }),

/***/ "./img/wrong.svg":
/*!***********************!*\
  !*** ./img/wrong.svg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/wrong-cb172a4.svg\");\n\n//# sourceURL=webpack:///./img/wrong.svg?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/style.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/style.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/egg_big.png */ \"./img/egg_big.png\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../img/egg_distort.png */ \"./img/egg_distort.png\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../img/icons.png */ \"./img/icons.png\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../img/photo_big.png */ \"./img/photo_big.png\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../img/paint_big.png */ \"./img/paint_big.png\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../img/unknown.svg */ \"./img/unknown.svg\");\nvar ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../img/wrong.svg */ \"./img/wrong.svg\");\nvar ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../img/correct.svg */ \"./img/correct.svg\");\nvar ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ../img/turtle.svg */ \"./img/turtle.svg\");\nvar ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ../img/flash.svg */ \"./img/flash.svg\");\nvar ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ../img/heart__full.svg */ \"./img/heart__full.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);\n// Module\nexports.push([module.i, \".central {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-between;\\n  position: relative;\\n  max-width: 1000px;\\n  margin: 0 auto; }\\n\\n.central__content {\\n  display: flex;\\n  min-height: 740px; }\\n\\n.intro {\\n  width: 800px;\\n  height: 740px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center;\\n  background-size: contain;\\n  position: relative; }\\n\\n.intro__asterisk {\\n  text-align: center;\\n  font-size: 172px;\\n  color: #de1f1f;\\n  cursor: pointer;\\n  position: relative;\\n  top: 220px;\\n  left: 30px; }\\n  .intro__asterisk:hover {\\n    color: #df4e4e; }\\n  .intro__asterisk:active {\\n    color: #af3636; }\\n\\n.intro__motto {\\n  font-size: 18px;\\n  position: absolute;\\n  bottom: 0; }\\n\\n.greeting {\\n  position: relative;\\n  width: 780px;\\n  height: 740px;\\n  transition: background-image 1s ease-in-out;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat center;\\n  background-size: contain; }\\n\\n.greeting__asterisk {\\n  font-size: 80px;\\n  color: #de1f1f;\\n  text-align: center; }\\n\\n.greeting__logo {\\n  text-align: center; }\\n\\n.greeting__challenge {\\n  margin: 0 auto;\\n  text-align: center; }\\n  .greeting__challenge h3 {\\n    font-family: 'Roboto', sans-serif;\\n    font-size: 30px;\\n    font-weight: bold;\\n    line-height: 30px; }\\n  .greeting__challenge p {\\n    font-family: 'Roboto', sans-serif;\\n    font-size: 22px;\\n    font-weight: 500;\\n    line-height: 34px; }\\n\\n.greeting__continue {\\n  position: absolute;\\n  right: -20px;\\n  top: 300px;\\n  cursor: pointer; }\\n\\n.rules {\\n  padding-top: 100px;\\n  text-align: center; }\\n\\n.rules__title {\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 30px;\\n  font-weight: bold;\\n  line-height: 30px; }\\n\\n.rules__description {\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 22px;\\n  font-weight: 500;\\n  line-height: 34px; }\\n\\n.rules__form {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-between; }\\n\\n.rules__input {\\n  font-weight: bold;\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 22px;\\n  line-height: 30px;\\n  height: 50px;\\n  text-align: center;\\n  border-radius: 5px;\\n  border: 2px transparent;\\n  border-style: solid; }\\n  .rules__input:hover {\\n    border-color: #e2a0a1; }\\n  .rules__input:focus {\\n    border-color: #d74040; }\\n\\n.rules__button {\\n  margin-top: 50px;\\n  width: 90px;\\n  height: 90px;\\n  cursor: pointer;\\n  display: block;\\n  font-weight: bold;\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 30px;\\n  line-height: 60px;\\n  color: #ffffff;\\n  background-color: #df4e4e;\\n  border-width: 0;\\n  border-radius: 45px; }\\n  .rules__button:enabled:hover {\\n    background-color: #ff6969; }\\n  .rules__button:active {\\n    background-color: #af3636; }\\n  .rules__button:disabled {\\n    background-color: #c6a5a5; }\\n\\n.header {\\n  height: 100px; }\\n\\n.header__back {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  padding-top: 20px; }\\n\\n.social-link {\\n  display: inline-block;\\n  width: 32px;\\n  height: 32px;\\n  margin: 0 2px;\\n  font-size: 0;\\n  vertical-align: top;\\n  text-decoration: none;\\n  background: transparent url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat center; }\\n  .social-link--academy {\\n    width: 120px;\\n    height: 40px;\\n    background-position: -108px -10px; }\\n  .social-link--tw {\\n    background-position: -59px -59px; }\\n  .social-link--ins {\\n    background-position: -10px -59px; }\\n  .social-link--fb {\\n    background-position: -59px -10px; }\\n  .social-link--vk {\\n    background-position: -10px -10px; }\\n\\n.footer {\\n  display: flex;\\n  flex-direction: column;\\n  flex-wrap: nowrap;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-top: 50px; }\\n\\n.footer__made-in {\\n  display: block;\\n  margin-top: 5px;\\n  margin-bottom: 15px;\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 12px;\\n  font-weight: normal;\\n  line-height: 12px; }\\n\\n.footer__link {\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 12px;\\n  font-weight: normal;\\n  line-height: 12px; }\\n  .footer__link:hover {\\n    color: #df4e4e; }\\n  .footer__link:active {\\n    color: #af3636; }\\n\\n.game {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.game__timer {\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 30px;\\n  font-weight: bold;\\n  line-height: 30px;\\n  font-size: 60px;\\n  position: absolute;\\n  margin-top: 0;\\n  top: 25px;\\n  left: 50%;\\n  transform: translateX(-50%); }\\n\\n.game__lives {\\n  position: absolute;\\n  top: 20px;\\n  right: 0; }\\n\\n.game__task {\\n  font-size: 22px;\\n  line-height: 35px; }\\n\\n.game__content {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: nowrap;\\n  justify-content: space-between; }\\n\\n.game__option {\\n  position: relative;\\n  border: 10px solid transparent;\\n  width: 468px;\\n  height: 458px;\\n  font-size: 0;\\n  text-align: center;\\n  vertical-align: middle; }\\n\\n.game__answer input {\\n  position: absolute;\\n  left: -99999px; }\\n  .game__answer input + span {\\n    display: block;\\n    width: 100%;\\n    height: 100%;\\n    border-radius: 70px;\\n    background: rgba(0, 0, 0, 0.5) no-repeat center;\\n    font-size: 0; }\\n    .game__answer input + span:hover {\\n      background-color: #000000; }\\n  .game__answer input:checked + span {\\n    background-color: #df4e4e; }\\n\\n.game__answer {\\n  position: absolute;\\n  width: 78px;\\n  height: 78px;\\n  bottom: 30px; }\\n  .game__answer--photo {\\n    left: 30px; }\\n    .game__answer--photo input + span {\\n      background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \"); }\\n  .game__answer--paint {\\n    right: 30px; }\\n    .game__answer--paint input + span {\\n      background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \"); }\\n\\n.game__content--wide .game__option {\\n  width: 705px;\\n  height: 455px; }\\n\\n.game__content--wide .game__answer {\\n  top: 208px; }\\n\\n.game__content--wide .game__answer--photo {\\n  left: -100px; }\\n\\n.game__content--wide .game__answer--paint {\\n  right: -100px; }\\n\\n.game__content--triple .game__option {\\n  cursor: pointer;\\n  width: 304px;\\n  height: 455px; }\\n  .game__content--triple .game__option:hover {\\n    border-color: #df4e4e; }\\n  .game__content--triple .game__option:active::after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    z-index: 1;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    background-color: rgba(223, 78, 78, 0.4); }\\n\\n.stats {\\n  padding: 0;\\n  list-style: none;\\n  font-size: 0;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center; }\\n\\n.stats__result {\\n  display: inline-block;\\n  vertical-align: bottom;\\n  overflow: hidden;\\n  width: 30px;\\n  height: 30px;\\n  margin: 5px; }\\n  .stats__result--unknown {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \") no-repeat center; }\\n  .stats__result--wrong {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \") no-repeat center; }\\n  .stats__result--correct {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \") no-repeat center; }\\n  .stats__result--slow {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \") no-repeat center; }\\n  .stats__result--fast {\\n    position: relative;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \") no-repeat center; }\\n    .stats__result--fast::after {\\n      content: \\\"\\\";\\n      position: absolute;\\n      left: 0;\\n      top: 0;\\n      width: 30px;\\n      height: 30px;\\n      background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \") no-repeat center; }\\n  .stats__result--alive {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \") no-repeat center; }\\n\\n.result {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-between; }\\n\\n.result__table {\\n  width: 670px;\\n  margin-bottom: 40px; }\\n  .result__table td {\\n    border: 10px solid transparent; }\\n  .result__table .stats {\\n    justify-content: flex-end; }\\n\\n.result__number {\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 30px;\\n  font-weight: bold;\\n  line-height: 30px;\\n  font-size: 22px; }\\n\\n.result__extra {\\n  min-width: 50px;\\n  text-align: right; }\\n\\n.result__total {\\n  min-width: 40px;\\n  text-align: right;\\n  text-transform: uppercase; }\\n  .result__total--final {\\n    font-family: 'Roboto', sans-serif;\\n    font-size: 30px;\\n    font-weight: bold;\\n    line-height: 30px; }\\n\\nhtml {\\n  min-height: 100%;\\n  margin: 0;\\n  padding: 0; }\\n\\nbody {\\n  background: #a8c8c4 linear-gradient(to bottom left, #ccdeeb, #84b39e) no-repeat;\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 22px;\\n  font-weight: 500;\\n  line-height: 34px;\\n  color: #00222d;\\n  min-height: 100%; }\\n\\na {\\n  color: #00222d; }\\n\\n.back {\\n  border: 0;\\n  background-color: transparent;\\n  cursor: pointer; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./scss/style.scss?");

/***/ }),

/***/ "./src/Application.js":
/*!****************************!*\
  !*** ./src/Application.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Application; });\n/* harmony import */ var _data_GameModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/GameModel */ \"./src/data/GameModel.js\");\n/* harmony import */ var _screens_GameScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/GameScreen */ \"./src/screens/GameScreen.js\");\n/* harmony import */ var _screens_stats_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/stats-screen */ \"./src/screens/stats-screen.js\");\n\n\n\nclass Application {\n  static showGame(state) {\n    const model = new _data_GameModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](state);\n    const gameScreen = new _screens_GameScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"](model);\n    const screen = gameScreen.startGame();\n    let modelScreen = {\n      model,\n      screen\n    };\n    return modelScreen;\n  }\n\n  static showStats(state) {\n    const statistics = new _screens_stats_screen__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    statistics.showStats(state);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/Application.js?");

/***/ }),

/***/ "./src/data/GameModel.js":
/*!*******************************!*\
  !*** ./src/data/GameModel.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameModel; });\n/* harmony import */ var _questions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions */ \"./src/data/questions.js\");\n/* harmony import */ var _constans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constans */ \"./src/data/constans.js\");\n\n // const getLevel = (state) => questions[state.level];\n\nclass GameModel {\n  constructor(state) {\n    this.state = Object.assign({}, state);\n  }\n\n  setLevel(nextLevel) {\n    if (this.state.level < 0 || this.state.level > _constans__WEBPACK_IMPORTED_MODULE_1__[\"LEVELS_COUNT\"]) {\n      return null;\n    }\n\n    this.state.level = nextLevel;\n    return this.state;\n  }\n\n  setLives(lives) {\n    if (lives > _constans__WEBPACK_IMPORTED_MODULE_1__[\"LEVELS_COUNT\"]) {\n      return null;\n    }\n\n    this.state.lives = lives;\n    return this.state;\n  }\n\n  addAnswer(answer, time) {\n    this.state.answers.push(this.getAnswerValue(answer, time));\n  }\n\n  getLevel() {\n    return _questions__WEBPACK_IMPORTED_MODULE_0__[\"default\"][this.state.level];\n  }\n\n  getTime() {\n    return this.state.timer;\n  }\n\n  getAnswers() {\n    return this.state.answers;\n  }\n\n  getAnswerValue(isCorrectAnswer, levelTime) {\n    if (!isCorrectAnswer) {\n      return _constans__WEBPACK_IMPORTED_MODULE_1__[\"ANSWER_VALUES\"].wrong;\n    }\n\n    if (levelTime >= _constans__WEBPACK_IMPORTED_MODULE_1__[\"TIME_TO_GAME\"] - _constans__WEBPACK_IMPORTED_MODULE_1__[\"FAST_ANSWER\"]) {\n      return _constans__WEBPACK_IMPORTED_MODULE_1__[\"ANSWER_VALUES\"].fast;\n    }\n\n    return levelTime <= _constans__WEBPACK_IMPORTED_MODULE_1__[\"TIME_TO_GAME\"] - _constans__WEBPACK_IMPORTED_MODULE_1__[\"SLOW_ANSWER\"] ? _constans__WEBPACK_IMPORTED_MODULE_1__[\"ANSWER_VALUES\"].slow : _constans__WEBPACK_IMPORTED_MODULE_1__[\"ANSWER_VALUES\"].correct;\n  }\n\n  goToNextLevel(isCorrectAnswer) {\n    const nextLevel = this.state.level + 1;\n\n    if (!isCorrectAnswer) {\n      this.setLives(this.state.lives - 1);\n    }\n\n    this.setLevel(nextLevel);\n    console.log(this.state);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/data/GameModel.js?");

/***/ }),

/***/ "./src/data/constans.js":
/*!******************************!*\
  !*** ./src/data/constans.js ***!
  \******************************/
/*! exports provided: LEVELS_COUNT, LIVES_COUNT, FAST_ANSWER, SLOW_ANSWER, TIME_TO_GAME, answers, QUESTION_TYPES, QUESTION_ACTIONS, QUESTION_TITLES, ANSWER_TYPES, ANSWER_VALUES, POINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LEVELS_COUNT\", function() { return LEVELS_COUNT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIVES_COUNT\", function() { return LIVES_COUNT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FAST_ANSWER\", function() { return FAST_ANSWER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SLOW_ANSWER\", function() { return SLOW_ANSWER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TIME_TO_GAME\", function() { return TIME_TO_GAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"answers\", function() { return answers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUESTION_TYPES\", function() { return QUESTION_TYPES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUESTION_ACTIONS\", function() { return QUESTION_ACTIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUESTION_TITLES\", function() { return QUESTION_TITLES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ANSWER_TYPES\", function() { return ANSWER_TYPES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ANSWER_VALUES\", function() { return ANSWER_VALUES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POINTS\", function() { return POINTS; });\n/* harmony import */ var _screens_question_choose_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../screens/question-choose-type */ \"./src/screens/question-choose-type.js\");\n/* harmony import */ var _screens_question_find_pic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../screens/question-find-pic */ \"./src/screens/question-find-pic.js\");\n/* harmony import */ var _screens_question_photo_or_pic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../screens/question-photo-or-pic */ \"./src/screens/question-photo-or-pic.js\");\n\n\n\nconst LEVELS_COUNT = 10;\nconst LIVES_COUNT = 3;\nconst FAST_ANSWER = 9;\nconst SLOW_ANSWER = 21;\nconst TIME_TO_GAME = 30;\nconst answers = [];\nconst QUESTION_TYPES = {\n  chooseType: `chooseType`,\n  findPic: `findPic`,\n  photoOrPic: `photoOrPic`\n};\nconst QUESTION_ACTIONS = {\n  [QUESTION_TYPES.chooseType]: _screens_question_choose_type__WEBPACK_IMPORTED_MODULE_0__,\n  [QUESTION_TYPES.findPic]: _screens_question_find_pic__WEBPACK_IMPORTED_MODULE_1__,\n  [QUESTION_TYPES.photoOrPic]: _screens_question_photo_or_pic__WEBPACK_IMPORTED_MODULE_2__\n};\nconst QUESTION_TITLES = {\n  [QUESTION_TYPES.chooseType]: `Угадайте для каждого изображения фото или рисунок?`,\n  [QUESTION_TYPES.photoOrPic]: `Угадай, фото или рисунок?`,\n  [QUESTION_TYPES.findPic]: `Найдите рисунок среди изображений`\n};\nconst ANSWER_TYPES = {\n  photo: `photo`,\n  paint: `paint`\n};\nconst ANSWER_VALUES = {\n  correct: `correct`,\n  wrong: `wrong`,\n  fast: `fast`,\n  slow: `slow`\n};\nconst POINTS = {\n  [ANSWER_VALUES.correct]: 100,\n  [ANSWER_VALUES.wrong]: 0,\n  [ANSWER_VALUES.fast]: 50,\n  [ANSWER_VALUES.slow]: -50,\n  lives: 50\n};\n\n//# sourceURL=webpack:///./src/data/constans.js?");

/***/ }),

/***/ "./src/data/game-state.js":
/*!********************************!*\
  !*** ./src/data/game-state.js ***!
  \********************************/
/*! exports provided: defaultState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultState\", function() { return defaultState; });\n/* harmony import */ var _constans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constans */ \"./src/data/constans.js\");\n\nconst defaultState = Object.freeze({\n  level: 0,\n  lives: _constans__WEBPACK_IMPORTED_MODULE_0__[\"LIVES_COUNT\"],\n  timer: null,\n  answers: []\n});\n\n//# sourceURL=webpack:///./src/data/game-state.js?");

/***/ }),

/***/ "./src/data/questions.js":
/*!*******************************!*\
  !*** ./src/data/questions.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constans */ \"./src/data/constans.js\");\n\nlet questions = [{\n  type: _constans__WEBPACK_IMPORTED_MODULE_0__[\"QUESTION_TYPES\"].chooseType,\n  images: [`https://k42.kn3.net/CF42609C8.jpg`, `http://i.imgur.com/1KegWPz.jpg`],\n  correctAnswer: [_constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_TYPES\"].paint, _constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_TYPES\"].photo]\n}, {\n  type: _constans__WEBPACK_IMPORTED_MODULE_0__[\"QUESTION_TYPES\"].photoOrPic,\n  images: [`https://k42.kn3.net/D2F0370D6.jpg`],\n  correctAnswer: _constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_TYPES\"].paint\n}, {\n  type: _constans__WEBPACK_IMPORTED_MODULE_0__[\"QUESTION_TYPES\"].findPic,\n  images: [`https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`],\n  correctAnswer: 1\n}, {\n  type: _constans__WEBPACK_IMPORTED_MODULE_0__[\"QUESTION_TYPES\"].chooseType,\n  images: [`https://k42.kn3.net/CF42609C8.jpg`, `http://i.imgur.com/1KegWPz.jpg`],\n  correctAnswer: [_constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_TYPES\"].paint, _constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_TYPES\"].photo]\n}, {\n  type: _constans__WEBPACK_IMPORTED_MODULE_0__[\"QUESTION_TYPES\"].photoOrPic,\n  images: [`https://k42.kn3.net/D2F0370D6.jpg`],\n  correctAnswer: _constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_TYPES\"].paint\n}, {\n  type: _constans__WEBPACK_IMPORTED_MODULE_0__[\"QUESTION_TYPES\"].findPic,\n  images: [`https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`],\n  correctAnswer: 1\n}, {\n  type: _constans__WEBPACK_IMPORTED_MODULE_0__[\"QUESTION_TYPES\"].chooseType,\n  images: [`https://k42.kn3.net/CF42609C8.jpg`, `http://i.imgur.com/1KegWPz.jpg`],\n  correctAnswer: [_constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_TYPES\"].paint, _constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_TYPES\"].photo]\n}, {\n  type: _constans__WEBPACK_IMPORTED_MODULE_0__[\"QUESTION_TYPES\"].photoOrPic,\n  images: [`https://k42.kn3.net/D2F0370D6.jpg`],\n  correctAnswer: _constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_TYPES\"].paint\n}, {\n  type: _constans__WEBPACK_IMPORTED_MODULE_0__[\"QUESTION_TYPES\"].findPic,\n  images: [`https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`],\n  correctAnswer: 1\n}, {\n  type: _constans__WEBPACK_IMPORTED_MODULE_0__[\"QUESTION_TYPES\"].chooseType,\n  images: [`https://k42.kn3.net/CF42609C8.jpg`, `http://i.imgur.com/1KegWPz.jpg`],\n  correctAnswer: [_constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_TYPES\"].paint, _constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_TYPES\"].photo]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (questions);\n\n//# sourceURL=webpack:///./src/data/questions.js?");

/***/ }),

/***/ "./src/data/stats-count.js":
/*!*********************************!*\
  !*** ./src/data/stats-count.js ***!
  \*********************************/
/*! exports provided: calculateStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateStats\", function() { return calculateStats; });\n/* harmony import */ var _constans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constans */ \"./src/data/constans.js\");\n\nconst calculateStats = model => {\n  if (model.getAnswers().length < _constans__WEBPACK_IMPORTED_MODULE_0__[\"LEVELS_COUNT\"]) {\n    return {\n      answers: model.getAnswers(),\n      bonuses: [],\n      totalPoints: 0,\n      totalResult: {\n        success: false\n      }\n    };\n  }\n\n  let totalFastAnsvers = model.getAnswers().filter(answers => answers === _constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_VALUES\"].fast).length;\n  let totalSlowAnswers = model.getAnswers().filter(answers => answers === _constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_VALUES\"].slow).length;\n  let totalCorrectAnswers1 = model.getAnswers().filter(answers => answers === _constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_VALUES\"].correct).length;\n  let totalCorrectAnswers = totalFastAnsvers + totalSlowAnswers + totalCorrectAnswers1;\n  let totalLivesRemained = model.state.lives;\n  let regularPoints = totalCorrectAnswers * _constans__WEBPACK_IMPORTED_MODULE_0__[\"POINTS\"][_constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_VALUES\"].correct];\n  const fastBonus = totalFastAnsvers * _constans__WEBPACK_IMPORTED_MODULE_0__[\"POINTS\"][_constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_VALUES\"].fast];\n  const slowBonus = totalSlowAnswers * _constans__WEBPACK_IMPORTED_MODULE_0__[\"POINTS\"][_constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_VALUES\"].slow];\n  const livesBonus = totalLivesRemained * _constans__WEBPACK_IMPORTED_MODULE_0__[\"POINTS\"].lives;\n  let bonuses = [];\n\n  if (totalFastAnsvers) {\n    bonuses.push({\n      title: `Бонус за скорость`,\n      icon: `fast`,\n      count: totalFastAnsvers,\n      points: _constans__WEBPACK_IMPORTED_MODULE_0__[\"POINTS\"][_constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_VALUES\"].fast],\n      total: fastBonus\n    });\n  }\n\n  if (totalSlowAnswers) {\n    bonuses.push({\n      title: `Штраф за медлительность`,\n      icon: `slow`,\n      count: totalSlowAnswers,\n      points: _constans__WEBPACK_IMPORTED_MODULE_0__[\"POINTS\"][_constans__WEBPACK_IMPORTED_MODULE_0__[\"ANSWER_VALUES\"].slow],\n      total: slowBonus\n    });\n  }\n\n  if (totalLivesRemained) {\n    bonuses.push({\n      title: `Бонус за жизни`,\n      icon: `alive`,\n      count: totalLivesRemained,\n      points: _constans__WEBPACK_IMPORTED_MODULE_0__[\"POINTS\"].lives,\n      total: livesBonus\n    });\n  }\n\n  const score = regularPoints + livesBonus + fastBonus + slowBonus;\n  return {\n    answers: model.getAnswers(),\n    bonuses,\n    regularPoints,\n    totalResult: {\n      success: true,\n      score\n    }\n  };\n};\n\n//# sourceURL=webpack:///./src/data/stats-count.js?");

/***/ }),

/***/ "./src/getElementFromTemplate.js":
/*!***************************************!*\
  !*** ./src/getElementFromTemplate.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getElementFromTemplate(inner) {\n  let myDiv = document.createElement(`div`);\n  myDiv.innerHTML = inner;\n  return myDiv;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getElementFromTemplate);\n\n//# sourceURL=webpack:///./src/getElementFromTemplate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Application */ \"./src/Application.js\");\n/* harmony import */ var _data_game_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/game-state */ \"./src/data/game-state.js\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _img_egg_big_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../img/egg_big.png */ \"./img/egg_big.png\");\n\n // import './../sass/style.scss'\n\n\n\n_Application__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showGame(_data_game_state__WEBPACK_IMPORTED_MODULE_1__[\"defaultState\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/screens/GameScreen.js":
/*!***********************************!*\
  !*** ./src/screens/GameScreen.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameScreen; });\n/* harmony import */ var _data_constans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/constans */ \"./src/data/constans.js\");\n/* harmony import */ var _View_game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View/game-view */ \"./src/screens/View/game-view.js\");\n/* harmony import */ var _showDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../showDisplay */ \"./src/showDisplay.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timer */ \"./src/timer.js\");\n/* harmony import */ var _Application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Application */ \"./src/Application.js\");\n\n\n\n\n\nclass GameScreen {\n  constructor(model) {\n    this.model = model;\n    this.levels = model.getLevel();\n  }\n\n  startGame() {\n    if (this.model.state.level < _data_constans__WEBPACK_IMPORTED_MODULE_0__[\"LEVELS_COUNT\"] && this.model.state.lives >= 0) {\n      const screen = new _View_game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.model.state);\n      Object(_showDisplay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(screen.element);\n      _timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].stopTimer(this.model.state);\n      _timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].startTimer(this.model.state);\n\n      screen.onAnswerGiven = index => {\n        let isCorrectAnswer = false;\n\n        if (this.model.getLevel().type === `chooseType`) {\n          let gameOption = screen.element.querySelectorAll(`.game__option`);\n          let chekedInputs = screen.element.querySelectorAll(`input[type=\"radio\"]:checked`);\n\n          if (gameOption.length === chekedInputs.length) {\n            isCorrectAnswer = this.levels.correctAnswer[0] === chekedInputs[0].value && this.levels.correctAnswer[1] === chekedInputs[1].value;\n            this.model.addAnswer(isCorrectAnswer, this.model.state.timer);\n            this.model.goToNextLevel(isCorrectAnswer);\n            this.startGame();\n            return;\n          }\n        }\n\n        if (this.model.getLevel().type === `photoOrPic`) {\n          let chekedInputs = screen.element.querySelectorAll(`input[type=\"radio\"]:checked`);\n\n          if (chekedInputs) {\n            isCorrectAnswer = this.levels.correctAnswer[0] === chekedInputs[0].value;\n            this.model.addAnswer(isCorrectAnswer, this.model.state.timer);\n            this.model.goToNextLevel(isCorrectAnswer);\n            this.startGame();\n            return;\n          }\n        }\n\n        if (this.model.getLevel().type === `findPic`) {\n          console.log(this.model.getLevel().type);\n          console.log(this.levels);\n          isCorrectAnswer = this.model.getLevel().correctAnswer === index;\n          this.model.addAnswer(isCorrectAnswer, this.model.state.timer);\n          this.model.goToNextLevel(isCorrectAnswer);\n          this.startGame();\n          return;\n        }\n      };\n    } else {\n      _Application__WEBPACK_IMPORTED_MODULE_4__[\"default\"].showStats(this.model);\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/screens/GameScreen.js?");

/***/ }),

/***/ "./src/screens/View/abstractView.js":
/*!******************************************!*\
  !*** ./src/screens/View/abstractView.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AbstractView; });\n/* harmony import */ var _getElementFromTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../getElementFromTemplate */ \"./src/getElementFromTemplate.js\");\n\nclass AbstractView {\n  constructor() {\n    if (new.target === AbstractView) {\n      throw new Error(`Can't create AbstractView directly`);\n    }\n  }\n\n  get template() {}\n\n  render() {\n    return Object(_getElementFromTemplate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.template);\n  }\n\n  bind() {}\n\n  get element() {\n    if (!this._elem) {\n      this._elem = this.render();\n      this.bind();\n    }\n\n    return this._elem;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/screens/View/abstractView.js?");

/***/ }),

/***/ "./src/screens/View/game-view.js":
/*!***************************************!*\
  !*** ./src/screens/View/game-view.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameView; });\n/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractView */ \"./src/screens/View/abstractView.js\");\n/* harmony import */ var _data_constans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/constans */ \"./src/data/constans.js\");\n/* harmony import */ var _data_questions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/questions */ \"./src/data/questions.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header */ \"./src/screens/header.js\");\n/* harmony import */ var _stats_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stats-progress-bar */ \"./src/stats-progress-bar.js\");\n\n\n\n\n\nclass GameView extends _abstractView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(state) {\n    super();\n    this.state = state;\n  }\n\n  get template() {\n    const {\n      askQuestion\n    } = _data_constans__WEBPACK_IMPORTED_MODULE_1__[\"QUESTION_ACTIONS\"][_data_questions__WEBPACK_IMPORTED_MODULE_2__[\"default\"][this.state.level].type];\n    return `\n    ${Object(_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.state)}\n      <div class=\"game\">\n      <p class=\"game__task\">${_data_constans__WEBPACK_IMPORTED_MODULE_1__[\"QUESTION_TITLES\"][_data_questions__WEBPACK_IMPORTED_MODULE_2__[\"default\"][this.state.level].type]}</p>\n      ${askQuestion(_data_questions__WEBPACK_IMPORTED_MODULE_2__[\"default\"][this.state.level].images)}\n      <div class=\"stats\">\n      ${Object(_stats_progress_bar__WEBPACK_IMPORTED_MODULE_4__[\"gameStatsHtml\"])(this.state.answers)}\n      `;\n  }\n\n  bind() {\n    let questionsType = _data_questions__WEBPACK_IMPORTED_MODULE_2__[\"default\"][this.state.level].type;\n\n    if (questionsType === `chooseType` || questionsType === `photoOrPic`) {\n      let trigger = this._elem.querySelector(`.game__content`);\n\n      trigger.addEventListener(`change`, () => {\n        this.onAnswerGiven();\n      });\n    }\n\n    if (questionsType === `findPic`) {\n      let trigger = this._elem.querySelectorAll(`.game__option`);\n\n      trigger.forEach((elem, index) => {\n        elem.addEventListener(`click`, () => {\n          console.log(`событие`);\n          this.onAnswerGiven(index);\n        });\n      });\n    }\n  }\n\n  onAnswerGiven() {}\n\n}\n\n//# sourceURL=webpack:///./src/screens/View/game-view.js?");

/***/ }),

/***/ "./src/screens/View/stats-view.js":
/*!****************************************!*\
  !*** ./src/screens/View/stats-view.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StatsView; });\n/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractView */ \"./src/screens/View/abstractView.js\");\n/* harmony import */ var _stats_progress_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stats-progress-bar */ \"./src/stats-progress-bar.js\");\n/* harmony import */ var _data_stats_count__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/stats-count */ \"./src/data/stats-count.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header */ \"./src/screens/header.js\");\n\n\n\n\nclass StatsView extends _abstractView__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(model) {\n    super();\n    this.model = model;\n  }\n\n  get template() {\n    debugger;\n\n    const statsHtml = ({\n      answers,\n      bonuses,\n      regularPoints,\n      totalResult: {\n        success,\n        score\n      }\n    }, index) => {\n      return `\n      <table class=\"result__table\">\n        <tr>\n          <td class=\"result__number\">${index + 1}.</td>\n          <td colspan=\"2\">${Object(_stats_progress_bar__WEBPACK_IMPORTED_MODULE_1__[\"gameStatsHtml\"])(answers)}</td>\n          <td class=\"result__points\">×&nbsp;100</td>\n          <td class=\"result__total\">${regularPoints ? regularPoints : 0}</td>\n        </tr>\n        ${[...bonuses].map(({\n        title,\n        icon,\n        count,\n        points,\n        total\n      }) => {\n        return `\n        <tr>\n          <td></td>\n          <td class=\"result__extra\">${title}</td>\n          <td class=\"result__extra\">${count}&nbsp;<span class=\"stats__result stats__result--${icon}\"></span></td>\n          <td class=\"result__points\">x&nbsp;${points}</td>\n          <td class=\"result__total\">x&nbsp;${total}</td>\n        </tr>`;\n      }).join(``)}\n        <tr>\n          <td colspan=\"5\" class=\"result__total  result__total--final\">${success ? score : `FAIL`}</td>\n        </tr>\n      </table>`;\n    };\n\n    const statsObj = Object(_data_stats_count__WEBPACK_IMPORTED_MODULE_2__[\"calculateStats\"])(this.model);\n    return `\n\n    <div class=\"result\">\n      <h1>${statsObj.totalResult.success ? `Победа!` : `Вы проиграли`}</h1>\n      ${[statsObj].map((stats, index) => {\n      return statsHtml(stats, index);\n    }).join(``)}\n    </div>`;\n  }\n\n  bind() {}\n\n}\n\n//# sourceURL=webpack:///./src/screens/View/stats-view.js?");

/***/ }),

/***/ "./src/screens/header.js":
/*!*******************************!*\
  !*** ./src/screens/header.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet header = state => {\n  const timeHtml = () => {\n    return `\n    <h1 class=\"game__timer\"></h1>`;\n  };\n\n  let livesHtml = () => {\n    return `\n      <div class=\"game__lives\">\n      ${new Array(state.lives).fill(`<img src=\"img/heart__full.svg\" class=\"game__heart\" alt=\"Life\" width=\"32\" height=\"32\"></img>`).join(``)}\n      ${new Array(3 - state.lives).fill(`<img src=\"img/heart__empty.svg\" class=\"game__heart\" alt=\"Life\" width=\"32\" height=\"32\">`).join(``)}\n\n      </div>`;\n  };\n\n  let el = `\n    <div class=\"header__back\">\n    ${timeHtml(state)}\n  <button class=\"back\">\n    <img src=\"img/arrow_left.svg\" width=\"45\" height=\"45\" alt=\"Back\">\n    <img src=\"img/logo_small.svg\" width=\"101\" height=\"44\">\n  </button>\n    </div>\n\n    ${livesHtml(state)}\n    </header>`;\n  return el;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);\n\n//# sourceURL=webpack:///./src/screens/header.js?");

/***/ }),

/***/ "./src/screens/question-choose-type.js":
/*!*********************************************!*\
  !*** ./src/screens/question-choose-type.js ***!
  \*********************************************/
/*! exports provided: askQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"askQuestion\", function() { return askQuestion; });\nconst askQuestion = imgs => {\n  return `\n  <form class=\"game__content\">\n    ${imgs.map((img, ind) => {\n    return `\n      <div class=\"game__option\">\n        <img src=\"${img}\" alt=\"Option ${ind + 1}\" width=\"468\" height=\"458\">\n        <label class=\"game__answer game__answer--photo\">\n          <input name=\"question${ind + 1}\" type=\"radio\" value=\"photo\">\n          <span>Фото</span>\n        </label>\n        <label class=\"game__answer game__answer--paint\">\n          <input name=\"question${ind + 1}\" type=\"radio\" value=\"paint\">\n         <span>Рисунок</span>\n        </label>\n      </div>`;\n  }).join(``)}\n    </form>`;\n};\n\n//# sourceURL=webpack:///./src/screens/question-choose-type.js?");

/***/ }),

/***/ "./src/screens/question-find-pic.js":
/*!******************************************!*\
  !*** ./src/screens/question-find-pic.js ***!
  \******************************************/
/*! exports provided: askQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"askQuestion\", function() { return askQuestion; });\nconst askQuestion = imgs => {\n  return `\n    <form class=\"game__content  game__content--triple\">\n  ${imgs.map(img => {\n    return `\n    <div class=\"game__option\">\n      <img src=\"${img}\" alt=\"Option 1\" width=\"304\" height=\"455\">\n    </div>`;\n  }).join(``)}\n    </form>`;\n};\n\n//# sourceURL=webpack:///./src/screens/question-find-pic.js?");

/***/ }),

/***/ "./src/screens/question-photo-or-pic.js":
/*!**********************************************!*\
  !*** ./src/screens/question-photo-or-pic.js ***!
  \**********************************************/
/*! exports provided: askQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"askQuestion\", function() { return askQuestion; });\nconst askQuestion = imgs => {\n  return `\n    <form class=\"game__content  game__content--wide\">\n      ${imgs.map(img => {\n    return `\n        <div class=\"game__option\">\n          <img src=\"${img}\" alt=\"Option 1\" width=\"705\" height=\"455\">\n          <label class=\"game__answer  game__answer--photo\">\n            <input name=\"question1\" type=\"radio\" value=\"photo\">\n            <span>Фото</span>\n          </label>\n          <label class=\"game__answer  game__answer--wide  game__answer--paint\">\n            <input name=\"question1\" type=\"radio\" value=\"paint\">\n            <span>Рисунок</span>\n          </label>\n        </div>\n        `;\n  }).join(`\n  `)}\n    </form>`;\n};\n\n//# sourceURL=webpack:///./src/screens/question-photo-or-pic.js?");

/***/ }),

/***/ "./src/screens/stats-screen.js":
/*!*************************************!*\
  !*** ./src/screens/stats-screen.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StatsScreen; });\n/* harmony import */ var _View_stats_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View/stats-view */ \"./src/screens/View/stats-view.js\");\n/* harmony import */ var _showDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../showDisplay */ \"./src/showDisplay.js\");\n\n\nclass StatsScreen {\n  showStats(model) {\n    let screen = new _View_stats_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](model);\n    Object(_showDisplay__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(screen.element);\n  }\n\n}\n;\n\n//# sourceURL=webpack:///./src/screens/stats-screen.js?");

/***/ }),

/***/ "./src/showDisplay.js":
/*!****************************!*\
  !*** ./src/showDisplay.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst mainContainer = document.querySelector(`.central`);\n\nconst showDisplay = element => {\n  mainContainer.innerHTML = ``;\n  mainContainer.appendChild(element);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (showDisplay);\n\n//# sourceURL=webpack:///./src/showDisplay.js?");

/***/ }),

/***/ "./src/stats-progress-bar.js":
/*!***********************************!*\
  !*** ./src/stats-progress-bar.js ***!
  \***********************************/
/*! exports provided: gameStatsHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameStatsHtml\", function() { return gameStatsHtml; });\n/* harmony import */ var _data_constans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/constans */ \"./src/data/constans.js\");\n\nconst unknownProgress = `<li class=\"stats__result stats__result--unknown\"></li>`;\nlet gameStatsHtml = answers => {\n  return `\n<ul class=\"stats\">\n  ${[...answers].map(result => {\n    return ` <li class=\"stats__result stats__result--${result}\"></li>`;\n  }).join(`\n  `)}\n\n  ${new Array(_data_constans__WEBPACK_IMPORTED_MODULE_0__[\"LEVELS_COUNT\"] - answers.length).fill(unknownProgress).join(``)}\n</ul>`;\n};\n\n//# sourceURL=webpack:///./src/stats-progress-bar.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_constans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/constans */ \"./src/data/constans.js\");\n\nlet interval;\n\nfunction time(state) {\n  if (!state.timer) {\n    state.timer = _data_constans__WEBPACK_IMPORTED_MODULE_0__[\"TIME_TO_GAME\"];\n  }\n\n  state.timer--;\n  let gameTimer = document.querySelector(`.game__timer`);\n  gameTimer.style.color = `blue`;\n  gameTimer.innerHTML = state.timer;\n  interval = setTimeout(time, 1000, state);\n}\n\nlet timer = {\n  startTimer: time,\n\n  stopTimer(state) {\n    clearTimeout(interval);\n    state.timer = 0;\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (timer);\n\n//# sourceURL=webpack:///./src/timer.js?");

/***/ })

/******/ });