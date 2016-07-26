/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Math = __webpack_require__(1);
	
	var _Canvas = __webpack_require__(2);
	
	var _Canvas2 = _interopRequireDefault(_Canvas);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var canvas = new _Canvas2.default('#canvas-wrap');
	
	canvas.draw();
	
	console.log((0, _Math.add)(1, 2, 3));

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function version() {
	    console.log('version: 1.1.0');
	}
	
	function add(a, b) {
	    var result = 0;
	    result = a + b;
	    return result;
	}
	
	exports.add = add;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Canvas = function () {
	    function Canvas(element) {
	        _classCallCheck(this, Canvas);
	
	        if (element.getContext) {
	            this.context = element.getContext('2d');
	            this.element = element;
	            this.parent = element.parentElement;
	        } else {
	            var canvas = document.createElement('canvas');
	            this.context = canvas.getContext('2d');
	            this.element = canvas;
	            this.parent = document.querySelector(element);
	        }
	        this.element.width = 200;
	        this.element.height = 200;
	        this.parent.appendChild(this.element);
	        this.width = this.element.width;
	        this.height = this.element.height;
	    }
	
	    _createClass(Canvas, [{
	        key: 'draw',
	        value: function draw() {
	            var x = this.width / 2;
	            var y = this.height / 2;
	            var radius = 75;
	            var startAngle = 0 * Math.PI;
	            var endAngle = 1.5 * Math.PI;
	            var counterClockwise = false;
	
	            this.context.beginPath();
	            this.context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
	            this.context.lineWidth = 15;
	
	            // line color
	            this.context.strokeStyle = 'black';
	            this.context.stroke();
	        }
	    }]);
	
	    return Canvas;
	}();
	
	exports.default = Canvas;

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map