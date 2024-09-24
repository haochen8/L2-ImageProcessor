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
  // Get the canvas and context with willREADFrequently set to true
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d', { willREADFrequently: true })

  // Get the image data
  imageData = context.getImageData(0, 0, canvas.width, canvas.height)

  const brightness = (value / 100) * 255

  /**
   * Clamp a value to be between 0 and 255.
   *
   * @param {number} value - The value to clamp
   * @returns {number} - The clamped value
   */
  const clamp = (value) => Math.min(255, Math.max(0, value))

  // Apply the brightness adjustment to each pixel
  for (let i = 0; i < imageData.data.length; i += 4) {
    imageData.data[i] = clamp(imageData.data[i] + brightness)
    imageData.data[i + 1] = clamp(imageData.data[i + 1] + brightness)
    imageData.data[i + 2] = clamp(imageData.data[i + 2] + brightness)
  }
  console.log('Brightness:' + imageData.data)
  // Put the image data back on the canvas
  context.putImageData(imageData, 0, 0)

  return imageData
}
