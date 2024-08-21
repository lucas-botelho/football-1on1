import Player from "./models/Player.js";
import Background from "./models/Background.js";
import Ball from "./models/Ball.js";
import { CANVAS_WIDTH, CANVAS_HEIGHT, MID_FIELD_Y } from "./constants.js";

const canvas = document.querySelector("canvas");
const canvasContext = canvas.getContext("2d");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

export { canvasContext };

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
  player.isColliding(ball);

  // Reset ball position if it hits the ground
  if (ball.position.y === MID_FIELD_Y) {
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

window.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  console.clear();
  console.log(`Mouse position: x = ${mouseX}, y = ${mouseY}`);
});
