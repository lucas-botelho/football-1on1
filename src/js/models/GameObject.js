import { canvasContext } from "../canvas.js";

export default class GameObject {
  constructor(x, y, width, height, imageSrc) {
    this.position = { x, y };
    this.velocity = { x: 0, y: 0 };
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = imageSrc;
  }

  setVelocity(x, y) {
    this.velocity.x = x;
    this.velocity.y = y;
  }

  draw() {
    canvasContext.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    canvasContext.drawImage(this.image, this.position.x, this.position.y);
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
