import backgroundImg from "../../img/background.png";
import { canvasContext } from "../canvas.js";
import { BACKGROUND_WIDTH, CANVAS_WIDTH, MID_FIELD_X } from "../constants.js";

export default class Background {
  constructor() {
    this.image = new Image();
    this.image.src = backgroundImg;
  }

  draw() {
    canvasContext.drawImage(
      this.image,
      CANVAS_WIDTH / 2 - BACKGROUND_WIDTH / 2,
      0
    );
  }
}
