/**
 * Add filters to the image
 *
 * @file filters.js
 * @author Hao Chen
 * @version 1.0.0
 */

import { imageDataCopy } from './utilities.js'

/**
 * Apply a gray scale filter to the image.
 *
 * @param {ImageData} imageData - The image data to apply the gray scale filter
 * @returns {ImageData} - The image data of the canvas
 */
export function grayScale (imageData) {
  // Create a copy of the image data
  const newImageData = imageDataCopy(imageData)
  const data = newImageData.data

  /**
   * Calculate the gray value of a pixel using the NFSC formula.
   *
   * @param {number} red - The red value of the pixel
   * @param {number} green - The green value of the pixel
   * @param {number} blue - The blue value of the pixel
   * @returns {number} - The gray value of the pixel
   */
  const formula = (red, green, blue) =>
    0.299 * red + 0.587 * green + 0.114 * blue

  // Apply the formula to each pixel
  for (let i = 0; i < data.length; i += 4) {
    const red = data[i]
    const green = data[i + 1]
    const blue = data[i + 2]
    // Calculate the gray value
    const gray = formula(red, green, blue)
    // Set the red, green, and blue values to the gray value
    data[i] = gray
    data[i + 1] = gray
    data[i + 2] = gray
  }

  return newImageData
}

/**
 * Adjust the brightness of the image.
 *
 * @param {ImageData} imageData - The image data to adjust the brightness
 * @param {number} value - The value to adjust the brightness by
 * @returns {ImageData} - The image data of the canvas
 */
export function adjustBrightness (imageData, value) {
  // Create a copy of the image data
  const newImageData = imageDataCopy(imageData)
  const data = newImageData.data

  // Calculate the brightness value
  const brightness = value / 100 * 255

  /**
   * Clamp a value to be between 0 and 255.
   *
   * @param {number} val - The value to clamp
   * @returns {number} - The clamped value
   */
  const clamp = (val) => Math.min(255, Math.max(0, val))

  // Apply the brightness adjustment to each pixel
  for (let i = 0; i < data.length; i += 4) {
    // Adjust the red, green, and blue values
    data[i] = clamp(data[i] + brightness) // Red
    data[i + 1] = clamp(data[i + 1] + brightness) // Green
    data[i + 2] = clamp(data[i + 2] + brightness) // Blue
  }
  return newImageData
}

/**
 * Apply a contrast filter to the image.
 *
 * @param {ImageData} imageData - The image data to apply the contrast filter
 * @param {number} value - The value to adjust the contrast by
 * @returns {ImageData} - The image data of the canvas
 */
export function adjustContrast (imageData, value) {
  // Create a copy of the image data
  const newImageData = imageDataCopy(imageData)
  const data = newImageData.data

  // Calculate the contrast factor
  const contrastFactor = (259 * (value + 255)) / (255 * (259 - value))

  /**
   * Clamp a value to be between 0 and 255.
   *
   * @param {number} val - The value to clamp
   * @returns {number} - The clamped value
   */
  const clamp = (val) => Math.min(255, Math.max(0, val))

  // Apply the contrast adjustment to each pixel
  for (let i = 0; i < data.length; i += 4) {
    data[i] = clamp(contrastFactor * (data[i] - 128) + 128) // Red
    data[i + 1] = clamp(contrastFactor * (data[i + 1] - 128) + 128) // Green
    data[i + 2] = clamp(contrastFactor * (data[i + 2] - 128) + 128) // Blue
  }
  return newImageData
}
