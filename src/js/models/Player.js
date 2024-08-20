import GameObject from "./GameObject.js";
import playerImg from "../../img/player.png";
import {
  PLAYER_WIDTH,
  PLAYER_HEIGHT,
  PLAYER_MOVE_SPEED,
  PLAYER_JUMP_VELOCITY,
  PLAYER_GRAVITY,
  MID_FIELD,
  LEFT_BOUNDARY,
  RIGHT_BOUNDARY,
} from "../constants.js";

export default class Player extends GameObject {
  constructor() {
    super(700, MID_FIELD, PLAYER_WIDTH, PLAYER_HEIGHT, playerImg);
  }

  update() {
    super.update();
    if (this.position.y + this.height + this.velocity.y <= MID_FIELD) {
      this.velocity.y += PLAYER_GRAVITY;
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

  isColliding(ball) {
    if (
      this.position.x < ball.position.x + ball.width &&
      this.position.x + this.width > ball.position.x &&
      this.position.y < ball.position.y + ball.height &&
      this.position.y + this.height > ball.position.y
    ) {
      console.log("Collision detected!");
      ball.calculateBallDirectionAndSpeed(
        { x: this.position.x, y: this.position.y },
        { x: this.velocity.x, y: this.velocity.y }
      );

      return true;
    }
    return false;
  }
}
