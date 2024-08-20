/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canvasContext: () => (/* binding */ canvasContext)
/* harmony export */ });
/* harmony import */ var _models_Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Player.js */ "./src/js/models/Player.js");
/* harmony import */ var _models_Background_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Background.js */ "./src/js/models/Background.js");
/* harmony import */ var _models_Ball_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Ball.js */ "./src/js/models/Ball.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./src/js/constants.js");




var canvas = document.querySelector("canvas");
var canvasContext = canvas.getContext("2d");
canvas.width = _constants_js__WEBPACK_IMPORTED_MODULE_3__.CANVAS_WIDTH;
canvas.height = _constants_js__WEBPACK_IMPORTED_MODULE_3__.CANVAS_HEIGHT;

var player = new _models_Player_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var background = new _models_Background_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
var ball = new _models_Ball_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
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
  canvasContext.clearRect(0, 0, _constants_js__WEBPACK_IMPORTED_MODULE_3__.CANVAS_WIDTH, _constants_js__WEBPACK_IMPORTED_MODULE_3__.CANVAS_HEIGHT);
  background.draw();
  player.update();
  player.moveX(keys);
  ball.update();
  player.isColliding(ball);

  // Reset ball position if it hits the ground
  if (ball.position.y === _constants_js__WEBPACK_IMPORTED_MODULE_3__.MID_FIELD) {}
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

// window.addEventListener("mousemove", (event) => {
//   const mouseX = event.clientX;
//   const mouseY = event.clientY;
//   console.clear();
//   console.log(`Mouse position: x = ${mouseX}, y = ${mouseY}`);
// });

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BALL_GRAVITY: () => (/* binding */ BALL_GRAVITY),
/* harmony export */   BALL_HEIGHT: () => (/* binding */ BALL_HEIGHT),
/* harmony export */   BALL_START_HEIGHT: () => (/* binding */ BALL_START_HEIGHT),
/* harmony export */   BALL_WIDTH: () => (/* binding */ BALL_WIDTH),
/* harmony export */   BOUNCE_DAMPING: () => (/* binding */ BOUNCE_DAMPING),
/* harmony export */   CANVAS_HEIGHT: () => (/* binding */ CANVAS_HEIGHT),
/* harmony export */   CANVAS_WIDTH: () => (/* binding */ CANVAS_WIDTH),
/* harmony export */   LEFT_BOUNDARY: () => (/* binding */ LEFT_BOUNDARY),
/* harmony export */   MID_FIELD: () => (/* binding */ MID_FIELD),
/* harmony export */   PLAYER_GRAVITY: () => (/* binding */ PLAYER_GRAVITY),
/* harmony export */   PLAYER_HEIGHT: () => (/* binding */ PLAYER_HEIGHT),
/* harmony export */   PLAYER_JUMP_VELOCITY: () => (/* binding */ PLAYER_JUMP_VELOCITY),
/* harmony export */   PLAYER_MOVE_SPEED: () => (/* binding */ PLAYER_MOVE_SPEED),
/* harmony export */   PLAYER_WIDTH: () => (/* binding */ PLAYER_WIDTH),
/* harmony export */   RIGHT_BOUNDARY: () => (/* binding */ RIGHT_BOUNDARY)
/* harmony export */ });
var CANVAS_WIDTH = window.innerWidth;
var CANVAS_HEIGHT = window.innerHeight;
var MID_FIELD = 430;
var BALL_GRAVITY = 0.2;
var PLAYER_GRAVITY = 0.3;
var BOUNCE_DAMPING = 0.9;
var PLAYER_WIDTH = 67;
var PLAYER_HEIGHT = 77;
var PLAYER_JUMP_VELOCITY = -15;
var PLAYER_MOVE_SPEED = 5;
var BALL_WIDTH = 60;
var BALL_HEIGHT = 60;
var BALL_START_HEIGHT = 500; // Height above the player
var LEFT_BOUNDARY = 210;
var RIGHT_BOUNDARY = 1605;

/***/ }),

/***/ "./src/js/models/Background.js":
/*!*************************************!*\
  !*** ./src/js/models/Background.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Background)
/* harmony export */ });
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/background.png */ "./src/img/background.png");
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../canvas.js */ "./src/js/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Background = /*#__PURE__*/function () {
  function Background() {
    _classCallCheck(this, Background);
    this.image = new Image();
    this.image.src = _img_background_png__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
  _createClass(Background, [{
    key: "draw",
    value: function draw() {
      _canvas_js__WEBPACK_IMPORTED_MODULE_1__.canvasContext.drawImage(this.image, 0, 0);
    }
  }]);
  return Background;
}();


/***/ }),

/***/ "./src/js/models/Ball.js":
/*!*******************************!*\
  !*** ./src/js/models/Ball.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ball)
/* harmony export */ });
/* harmony import */ var _GameObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject.js */ "./src/js/models/GameObject.js");
/* harmony import */ var _img_ball_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/ball.png */ "./src/img/ball.png");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ "./src/js/constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Ball = /*#__PURE__*/function (_GameObject) {
  _inherits(Ball, _GameObject);
  var _super = _createSuper(Ball);
  function Ball() {
    var _this;
    _classCallCheck(this, Ball);
    _this = _super.call(this, 890, 110, _constants_js__WEBPACK_IMPORTED_MODULE_2__.BALL_WIDTH, _constants_js__WEBPACK_IMPORTED_MODULE_2__.BALL_HEIGHT, _img_ball_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
    _this.velocity = {
      x: 0,
      y: 0
    }; // Initialize velocity
    return _this;
  }
  _createClass(Ball, [{
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(Ball.prototype), "update", this).call(this);
      if (this.position.y + this.height + this.velocity.y <= _constants_js__WEBPACK_IMPORTED_MODULE_2__.MID_FIELD) {
        this.velocity.y += _constants_js__WEBPACK_IMPORTED_MODULE_2__.BALL_GRAVITY;
      } else {
        this.velocity.y = -this.velocity.y * _constants_js__WEBPACK_IMPORTED_MODULE_2__.BOUNCE_DAMPING; // Invert and dampen the velocity

        // Prevent the ball from bouncing indefinitely
        if (Math.abs(this.velocity.y) < 1) {
          this.velocity.y = 0;
        }
      }

      // Apply velocity to position
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // Ensure position stays within bounds (adjust as needed)
      this.position.x = Math.max(0, Math.min(this.position.x, 1920 - _constants_js__WEBPACK_IMPORTED_MODULE_2__.BALL_WIDTH)); // Assuming 1920 is the game width
      this.position.y = Math.max(this.position.y, Math.min(this.position.y, _constants_js__WEBPACK_IMPORTED_MODULE_2__.MID_FIELD - _constants_js__WEBPACK_IMPORTED_MODULE_2__.BALL_HEIGHT));
    }
  }, {
    key: "reset",
    value: function reset(playerX, playerY) {
      this.position.x = playerX + _constants_js__WEBPACK_IMPORTED_MODULE_2__.PLAYER_WIDTH / 2 - _constants_js__WEBPACK_IMPORTED_MODULE_2__.BALL_WIDTH / 2;
      this.position.y = playerY - _constants_js__WEBPACK_IMPORTED_MODULE_2__.BALL_START_HEIGHT;
      this.velocity.x = 0;
      this.velocity.y = 0;
    } // Helper functions
  }, {
    key: "subtractVectors",
    value: function subtractVectors(v1, v2) {
      return [v1[0] - v2[0], v1[1] - v2[1]];
    }
  }, {
    key: "normalize",
    value: function normalize(vector) {
      var magnitude = Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2));
      return [vector[0] / magnitude, vector[1] / magnitude];
    }
  }, {
    key: "addVectors",
    value: function addVectors(v1, v2) {
      return [v1[0] + v2[0], v1[1] + v2[1]];
    }
  }, {
    key: "scaleVector",
    value: function scaleVector(vector, scalar) {
      return [vector[0] * scalar, vector[1] * scalar];
    }
  }, {
    key: "dotProduct",
    value: function dotProduct(v1, v2) {
      return v1[0] * v2[0] + v1[1] * v2[1];
    }
  }, {
    key: "calculateBallDirectionAndSpeed",
    value: function calculateBallDirectionAndSpeed(playerPos, playerVel) {
      var restitution = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.8;
      // Calculate collision normal
      var normal = this.normalize([this.position.x - playerPos.x, this.position.y - playerPos.y]);

      // Calculate relative velocity
      var relVel = this.subtractVectors([this.velocity.x, this.velocity.y], [playerVel.x, playerVel.y]);

      // Calculate velocity along the normal
      var velAlongNormal = this.dotProduct(relVel, normal);

      // If velocities are separating, do nothing
      if (velAlongNormal > 0) {
        return;
      }

      // Calculate impulse scalar
      var impulse = -(1 + restitution) * velAlongNormal;

      // Apply impulse to the ball's velocity
      var newBallVel = this.addVectors([this.velocity.x, this.velocity.y], this.scaleVector(normal, impulse));
      this.velocity.x = newBallVel[0];
      this.velocity.y = newBallVel[1];

      // Add a small offset to prevent sticking
      this.position.x += normal[0];
      this.position.y += normal[1];
    }
  }]);
  return Ball;
}(_GameObject_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/js/models/GameObject.js":
/*!*************************************!*\
  !*** ./src/js/models/GameObject.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameObject)
/* harmony export */ });
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas.js */ "./src/js/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    key: "setVelocity",
    value: function setVelocity(x, y) {
      this.velocity.x = x;
      this.velocity.y = y;
    }
  }, {
    key: "draw",
    value: function draw() {
      _canvas_js__WEBPACK_IMPORTED_MODULE_0__.canvasContext.fillRect(this.position.x, this.position.y, this.width, this.height);
      _canvas_js__WEBPACK_IMPORTED_MODULE_0__.canvasContext.drawImage(this.image, this.position.x, this.position.y);
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


/***/ }),

/***/ "./src/js/models/Player.js":
/*!*********************************!*\
  !*** ./src/js/models/Player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _GameObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject.js */ "./src/js/models/GameObject.js");
/* harmony import */ var _img_player_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/player.png */ "./src/img/player.png");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ "./src/js/constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Player = /*#__PURE__*/function (_GameObject) {
  _inherits(Player, _GameObject);
  var _super = _createSuper(Player);
  function Player() {
    _classCallCheck(this, Player);
    return _super.call(this, 700, _constants_js__WEBPACK_IMPORTED_MODULE_2__.MID_FIELD, _constants_js__WEBPACK_IMPORTED_MODULE_2__.PLAYER_WIDTH, _constants_js__WEBPACK_IMPORTED_MODULE_2__.PLAYER_HEIGHT, _img_player_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }
  _createClass(Player, [{
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(Player.prototype), "update", this).call(this);
      if (this.position.y + this.height + this.velocity.y <= _constants_js__WEBPACK_IMPORTED_MODULE_2__.MID_FIELD) {
        this.velocity.y += _constants_js__WEBPACK_IMPORTED_MODULE_2__.PLAYER_GRAVITY;
      } else {
        this.velocity.y = 0;
        this.position.y = _constants_js__WEBPACK_IMPORTED_MODULE_2__.MID_FIELD - this.height;
      }
    }
  }, {
    key: "moveX",
    value: function moveX(keys) {
      if (keys.right.pressed && this.position.x + this.width < _constants_js__WEBPACK_IMPORTED_MODULE_2__.RIGHT_BOUNDARY) {
        this.velocity.x = _constants_js__WEBPACK_IMPORTED_MODULE_2__.PLAYER_MOVE_SPEED;
      } else if (keys.left.pressed && this.position.x > _constants_js__WEBPACK_IMPORTED_MODULE_2__.LEFT_BOUNDARY) {
        this.velocity.x = -_constants_js__WEBPACK_IMPORTED_MODULE_2__.PLAYER_MOVE_SPEED;
      } else {
        this.velocity.x = 0;
      }
    }
  }, {
    key: "jump",
    value: function jump() {
      if (this.position.y === _constants_js__WEBPACK_IMPORTED_MODULE_2__.MID_FIELD - this.height) {
        this.velocity.y = _constants_js__WEBPACK_IMPORTED_MODULE_2__.PLAYER_JUMP_VELOCITY;
      }
    }
  }, {
    key: "isColliding",
    value: function isColliding(ball) {
      if (this.position.x < ball.position.x + ball.width && this.position.x + this.width > ball.position.x && this.position.y < ball.position.y + ball.height && this.position.y + this.height > ball.position.y) {
        console.log("Collision detected!");
        ball.calculateBallDirectionAndSpeed({
          x: this.position.x,
          y: this.position.y
        }, {
          x: this.velocity.x,
          y: this.velocity.y
        });
        return true;
      }
      return false;
    }
  }]);
  return Player;
}(_GameObject_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/canvas.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=canvas.bundle.js.map