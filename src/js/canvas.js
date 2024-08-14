import backgroundImg from "../img/background.png";
import playerImg from "../img/player.png";
import ballImg from "../img/ball.png";

const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;
const MID_FIELD = 370;
const GRAVITY = 0.5;
const BOUNCE_DAMPING = 0.7;
const PLAYER_WIDTH = 30;
const PLAYER_HEIGHT = 30;
const PLAYER_JUMP_VELOCITY = -15;
const PLAYER_MOVE_SPEED = 5;
const BALL_WIDTH = 60;
const BALL_HEIGHT = 60;
const BALL_START_HEIGHT = 500; // Height above the player
const LEFT_BOUNDARY = 210;
const RIGHT_BOUNDARY = 1605;

const canvas = document.querySelector("canvas");
const canvasContext = canvas.getContext("2d");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

class GameObject {
  constructor(x, y, width, height, imageSrc) {
    this.position = { x, y };
    this.velocity = { x: 0, y: 0 };
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = imageSrc;
  }

  draw() {
    canvasContext.drawImage(this.image, this.position.x, this.position.y);
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

class Player extends GameObject {
  constructor() {
    super(700, MID_FIELD, PLAYER_WIDTH, PLAYER_HEIGHT, playerImg);
  }

  update() {
    super.update();
    if (this.position.y + this.height + this.velocity.y <= MID_FIELD) {
      this.velocity.y += GRAVITY;
    } else {
      this.velocity.y = 0;
      this.position.y = MID_FIELD - this.height;
    }
  }

  moveX(keys) {
    if (keys.right.pressed && this.position.x + this.width < RIGHT_BOUNDARY) {
      this.velocity.x = PLAYER_MOVE_SPEED;
    } else if (keys.left.pressed && this.position.x > LEFT_BOUNDARY) {
      this.velocity.x = -PLAYER_MOVE_SPEED;
    } else {
      this.velocity.x = 0;
    }
  }

  jump() {
    if (this.position.y === MID_FIELD - this.height) {
      this.velocity.y = PLAYER_JUMP_VELOCITY;
    }
  }
}

class Background {
  constructor() {
    this.image = new Image();
    this.image.src = backgroundImg;
  }

  draw() {
    canvasContext.drawImage(this.image, 0, 0);
  }
}

class Ball extends GameObject {
  constructor() {
    super(890, 110, BALL_WIDTH, BALL_HEIGHT, ballImg);
  }

  update() {
    super.update();
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

  reset(playerX, playerY) {
    this.position.x = playerX + PLAYER_WIDTH / 2 - BALL_WIDTH / 2;
    this.position.y = playerY - BALL_START_HEIGHT;
    this.velocity.y = 0;
  }
}

const player = new Player();
const background = new Background();
const ball = new Ball();

const keys = {
  right: { pressed: false },
  left: { pressed: false },
};

function animate() {
  requestAnimationFrame(animate);
  canvasContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  background.draw();
  player.update();
  player.moveX(keys);
  ball.update();

  // Reset ball position if it hits the ground
  if (ball.position.y === MID_FIELD) {
  }
}

animate();

window.addEventListener("keydown", ({ keyCode }) => {
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

window.addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      keys.left.pressed = false;
      break;
    case 68:
      keys.right.pressed = false;
      break;
  }
});
