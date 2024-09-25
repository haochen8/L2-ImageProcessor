/**
 * Image Processor.
 *
 * @file ImageProccessor.js
 * @author Hao Chen
 * @version 1.0.0
 */

import * as filters from './filters.js'
import { rotateImage, resetImage, imageDataCopy } from './utilities.js'

/**
 * Class for processing images.
 */
export class ImageProcessor {
  /**
   * Create an ImageProcessor object.
   *
   * @param {ImageData} imageData - The image data to process.
   */
  constructor (imageData) {
    this.imageData = imageData
    this.originalImageData = imageDataCopy(imageData)
  }

  /**
   * Rotate the image by a given angle.
   *
   * @param {number} angle - The angle to rotate the image by.
   */
  rotate (angle) {
    this.imageData = rotateImage(this.imageData, angle)
  }

  /**
   * Reset the image to its original state.
   */
  reset () {
    this.imageData = resetImage(this.imageData)
  }

  /**
   * Apply a grayscale filter to the image.
   */
  grayScale () {
    this.imageData = filters.grayScale(this.imageData)
  }

  /**
   * Adjust the brightness of the image.
   *
   * @param {number} value - The value to adjust the brightness by.
   */
  brightness (value) {
    this.imageData = filters.adjustBrightness(this.originalImageData, value)
  }

  /**
   * Return the image data of the canvas.
   *
   * @returns {ImageData} - The image data of the canvas.
   */
  getImageData () {
    return this.imageData
  }
}
