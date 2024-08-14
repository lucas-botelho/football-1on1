/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ce82eb4b7e1dbad3badc70dac5ee1961.png");

/***/ }),

/***/ "./src/img/ball.png":
/*!**************************!*\
  !*** ./src/img/ball.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ae5775ebd82a7a14fe8b24ea2183f46f.png");

/***/ }),

/***/ "./src/img/player.png":
/*!****************************!*\
  !*** ./src/img/player.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "df0e05e467055f23146e783715fdf145.png");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_player_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/player.png */ "./src/img/player.png");
/* harmony import */ var _img_ball_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/ball.png */ "./src/img/ball.png");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CANVAS_WIDTH = window.innerWidth;
var CANVAS_HEIGHT = window.innerHeight;
var MID_FIELD = 370;
var GRAVITY = 0.5;
var BOUNCE_DAMPING = 0.7;
var PLAYER_WIDTH = 30;
var PLAYER_HEIGHT = 30;
var PLAYER_JUMP_VELOCITY = -15;
var PLAYER_MOVE_SPEED = 5;
var BALL_WIDTH = 60;
var BALL_HEIGHT = 60;
var BALL_START_HEIGHT = 500; // Height above the player
var LEFT_BOUNDARY = 210;
var RIGHT_BOUNDARY = 1605;
var canvas = document.querySelector("canvas");
var canvasContext = canvas.getContext("2d");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
var GameObject = /*#__PURE__*/function () {
  function GameObject(x, y, width, height, imageSrc) {
    _classCallCheck(this, GameObject);
    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = imageSrc;
  }
  _createClass(GameObject, [{
    key: "draw",
    value: function draw() {
      canvasContext.drawImage(this.image, this.position.x, this.position.y);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }]);
  return GameObject;
}();
var Player = /*#__PURE__*/function (_GameObject) {
  _inherits(Player, _GameObject);
  var _super = _createSuper(Player);
  function Player() {
    _classCallCheck(this, Player);
    return _super.call(this, 700, MID_FIELD, PLAYER_WIDTH, PLAYER_HEIGHT, _img_player_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }
  _createClass(Player, [{
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(Player.prototype), "update", this).call(this);
      if (this.position.y + this.height + this.velocity.y <= MID_FIELD) {
        this.velocity.y += GRAVITY;
      } else {
        this.velocity.y = 0;
        this.position.y = MID_FIELD - this.height;
      }
    }
  }, {
    key: "moveX",
    value: function moveX(keys) {
      if (keys.right.pressed && this.position.x + this.width < RIGHT_BOUNDARY) {
        this.velocity.x = PLAYER_MOVE_SPEED;
      } else if (keys.left.pressed && this.position.x > LEFT_BOUNDARY) {
        this.velocity.x = -PLAYER_MOVE_SPEED;
      } else {
        this.velocity.x = 0;
      }
    }
  }, {
    key: "jump",
    value: function jump() {
      if (this.position.y === MID_FIELD - this.height) {
        this.velocity.y = PLAYER_JUMP_VELOCITY;
      }
    }
  }]);
  return Player;
}(GameObject);
var Background = /*#__PURE__*/function () {
  function Background() {
    _classCallCheck(this, Background);
    this.image = new Image();
    this.image.src = _img_background_png__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
  _createClass(Background, [{
    key: "draw",
    value: function draw() {
      canvasContext.drawImage(this.image, 0, 0);
    }
  }]);
  return Background;
}();
var Ball = /*#__PURE__*/function (_GameObject2) {
  _inherits(Ball, _GameObject2);
  var _super2 = _createSuper(Ball);
  function Ball() {
    _classCallCheck(this, Ball);
    return _super2.call(this, 890, 110, BALL_WIDTH, BALL_HEIGHT, _img_ball_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
  _createClass(Ball, [{
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(Ball.prototype), "update", this).call(this);
      if (this.position.y + this.velocity.y <= MID_FIELD) {
        this.velocity.y += GRAVITY;
      } else {
        this.velocity.y = -this.velocity.y * BOUNCE_DAMPING; // Invert and dampen the velocity

        // Prevent the ball from bouncing indefinitely
        if (Math.abs(this.velocity.y) < 1) {
          this.velocity.y = 0;
        }
      }
    }
  }, {
    key: "reset",
    value: function reset(playerX, playerY) {
      this.position.x = playerX + PLAYER_WIDTH / 2 - BALL_WIDTH / 2;
      this.position.y = playerY - BALL_START_HEIGHT;
      this.velocity.y = 0;
    }
  }]);
  return Ball;
}(GameObject);
var player = new Player();
var background = new Background();
var ball = new Ball();
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
function animate() {
  requestAnimationFrame(animate);
  canvasContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  background.draw();
  player.update();
  player.moveX(keys);
  ball.update();

  // Reset ball position if it hits the ground
  if (ball.position.y === MID_FIELD) {}
}
animate();
window.addEventListener("keydown", function (_ref) {
  var keyCode = _ref.keyCode;
  switch (keyCode) {
    case 65:
      keys.left.pressed = true;
      break;
    case 68:
      keys.right.pressed = true;
      break;
    case 87:
      player.jump();
      break;
  }
});
window.addEventListener("keyup", function (_ref2) {
  var keyCode = _ref2.keyCode;
  switch (keyCode) {
    case 65:
      keys.left.pressed = false;
      break;
    case 68:
      keys.right.pressed = false;
      break;
  }
});
/******/ })()
;
//# sourceMappingURL=canvas.bundle.js.map