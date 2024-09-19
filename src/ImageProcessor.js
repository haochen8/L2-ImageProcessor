import { rotateImage, loadImage } from "./utilities.js";

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
