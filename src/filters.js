/**
 * Add filters to the image
 *
 * @file filters.js
 * @author Hao Chen
 * @version 1.0.0
 */

/**
 * Apply a gray scale filter to the image.
 *
 * @returns {ImageData} - The image data of the canvas
 */
export function grayScale () {
  // Get the canvas and context with willREADFrequently set to true
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d', { willREADFrequently: true })

  // Get the image data
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height)

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
  for (let i = 0; i < imageData.data.length; i += 4) {
    const red = imageData.data[i]
    const green = imageData.data[i + 1]
    const blue = imageData.data[i + 2]
    // Calculate the gray value
    const gray = formula(red, green, blue)
    // Set the red, green, and blue values to the gray value
    imageData.data[i] = gray
    imageData.data[i + 1] = gray
    imageData.data[i + 2] = gray
  }
  // Put the image data back on the canvas
  context.putImageData(imageData, 0, 0)

  return imageData
}

/**
 * Adjust the brightness of the image.
 *
 * @param {number} value - The value to adjust the brightness by
 * @returns {ImageData} - The image data of the canvas
 */
export function adjustBrightness (value) {
  // Get the canvas and context with willREADFrequently set to true
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d', { willREADFrequently: true })

  // Get the image data
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height)

  // Apply the brightness adjustment to each pixel
  for (let i = 0; i < imageData.data.length; i += 4) {
    imageData.data[i] += value
    imageData.data[i + 1] += value
    imageData.data[i + 2] += value
  }
  // Put the image data back on the canvas
  context.putImageData(imageData, 0, 0)

  return imageData
}
