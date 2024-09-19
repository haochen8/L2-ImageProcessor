import { rotateImage } from "./util.js";

/**
 * Class for processing images.
 */
export class ImageProcessor {
  constructor(imageData) {
    this.imageData = imageData;
  }

  rotate(angle) {
    this.imageData = rotateImage(this.imageData, angle);
  }

  getImageData() {
    return this.imageData;
  }
}
