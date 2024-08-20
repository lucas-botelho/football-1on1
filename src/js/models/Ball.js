import GameObject from "./GameObject.js";
import ballImg from "../../img/ball.png";
import {
  BALL_WIDTH,
  BALL_HEIGHT,
  BALL_START_HEIGHT,
  GRAVITY,
  BOUNCE_DAMPING,
  MID_FIELD,
  PLAYER_WIDTH,
} from "../constants.js";

export default class Ball extends GameObject {
  constructor() {
    super(890, 110, BALL_WIDTH, BALL_HEIGHT, ballImg);
    this.velocity = { x: 0, y: 0 }; // Initialize velocity
  }

  update() {
    super.update();
    if (this.position.y + this.height + this.velocity.y <= MID_FIELD) {
      this.velocity.y += GRAVITY;
    } else {
      this.velocity.y = -this.velocity.y * BOUNCE_DAMPING; // Invert and dampen the velocity

      // Prevent the ball from bouncing indefinitely
      if (Math.abs(this.velocity.y) < 1) {
        this.velocity.y = 0;
      }
    }

    // Apply velocity to position
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Ensure position stays within bounds (adjust as needed)
    this.position.x = Math.max(0, Math.min(this.position.x, 1920 - BALL_WIDTH)); // Assuming 1920 is the game width
    this.position.y = Math.max(
      0,
      Math.min(this.position.y, MID_FIELD - BALL_HEIGHT)
    );

    console.log(this.position.x, this.position.y);
  }

  reset(playerX, playerY) {
    this.position.x = playerX + PLAYER_WIDTH / 2 - BALL_WIDTH / 2;
    this.position.y = playerY - BALL_START_HEIGHT;
    this.velocity.x = 0;
    this.velocity.y = 0;
  }

  // Helper functions

  subtractVectors(v1, v2) {
    return [v1[0] - v2[0], v1[1] - v2[1]];
  }

  normalize(vector) {
    const magnitude = Math.sqrt(vector[0] ** 2 + vector[1] ** 2);
    return [vector[0] / magnitude, vector[1] / magnitude];
  }

  addVectors(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
  }

  scaleVector(vector, scalar) {
    return [vector[0] * scalar, vector[1] * scalar];
  }

  dotProduct(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1];
  }

  calculateBallDirectionAndSpeed(playerPos, playerVel, restitution = 0.8) {
    // Calculate collision normal
    const normal = this.normalize([
      this.position.x - playerPos.x,
      this.position.y - playerPos.y,
    ]);

    // Calculate relative velocity
    const relVel = this.subtractVectors(
      [this.velocity.x, this.velocity.y],
      [playerVel.x, playerVel.y]
    );

    // Calculate velocity along the normal
    const velAlongNormal = this.dotProduct(relVel, normal);

    // If velocities are separating, do nothing
    if (velAlongNormal > 0) {
      return;
    }

    // Calculate impulse scalar
    const impulse = -(1 + restitution) * velAlongNormal;

    // Apply impulse to the ball's velocity
    const newBallVel = this.addVectors(
      [this.velocity.x, this.velocity.y],
      this.scaleVector(normal, impulse)
    );

    this.velocity.x = newBallVel[0];
    this.velocity.y = newBallVel[1];

    // Add a small offset to prevent sticking
    this.position.x += normal[0];
    this.position.y += normal[1];
  }
}
