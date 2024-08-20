import backgroundImg from "../../img/background.png";
import { canvasContext } from "../canvas.js";
export default class Background {
  constructor() {
    this.image = new Image();
    this.image.src = backgroundImg;
  }

  draw() {
    canvasContext.drawImage(this.image, 0, 0);
  }
}
