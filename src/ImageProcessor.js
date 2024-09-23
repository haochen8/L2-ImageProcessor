/**
 * Image Processor.
 *
 * @file ImageProccessor.js
 * @author Hao Chen
 * @version 1.0.0
 */

import * as filters from "./filters.js";
import { rotateImage, resetImage } from "./utilities.js";

/**
 * Class for processing images.
 */
export class ImageProcessor {
  /**
   * Create an ImageProcessor object.
   * @param {ImageData} imageData - The image data to process.
   */
  constructor(imageData) {
    this.imageData = imageData;
  }

  /**
   * Rotate the image by a given angle.
   */
  rotate(angle) {
    this.imageData = rotateImage(this.imageData, angle);
  }

  /**
   * Reset the image to its original state.
   */
  reset() {
    this.imageData = resetImage(this.imageData);
  }

  /**
   * Apply a grayscale filter to the image.
   */
  grayScale() {
    this.imageData = filters.grayScale(this.imageData);
  }

  /**
   * Get the image data.
   */
  getImageData() {
    return this.imageData;
  }
}
