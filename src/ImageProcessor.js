import { rotateImage, resetImage } from "./utilities.js";

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

  reset() {
    this.imageData = resetImage(this.imageData);
  }

  getImageData() {
    return this.imageData;
  }
}
