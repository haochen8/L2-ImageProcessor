/**
 * Image Processor.
 *
 * @file ImageProccessor.js
 * @author Hao Chen
 * @version 1.0.0
 */

import * as filters from './filters.js'
import { rotateImage, imageDataCopy } from './utilities.js'

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
    this.imageData = imageDataCopy(this.originalImageData)
  }

  /**
   * Apply a grayscale filter to the image.
   */
  grayScale () {
    this.imageData = filters.applyGrayscale(this.imageData)
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
   * Adjust the contrast of the image.
   *
   * @param {number} value - The value to adjust the contrast by.
   */
  contrast (value) {
    this.imageData = filters.adjustContrast(this.originalImageData, value)
  }

  /**
   * Adjust the brightness of the image.
   *
   * @param {number} value - The value to adjust the brightness by.
   */
  noise (value) {
    this.imageData = filters.applyNoise(this.imageData, value)
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
