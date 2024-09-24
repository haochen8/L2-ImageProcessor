/**
 * Test application for the image processor module.
 *
 * @file test.js
 * @author Hao Chen
 * @version 1.0.0
 */

import { ImageProcessor, loadImage, imageDataCopy } from '../../src/index.js'

// Get elements from the DOM
const fileInput = document.getElementById('fileInput')
const rotateButton = document.getElementById('rotateButton')
const resetButton = document.getElementById('resetButton')
const grayScaleButton = document.getElementById('grayScaleButton')
const brightnessInput = document.getElementById('brightnessInput')
// Get the canvas and context
const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d', { willREADFrequently: true })

// Variables to store the original image data and the image processor
let originalImageData
let processor

// Event listener for the file input
fileInput.addEventListener('change', async (event) => {
  const file = event.target.files[0]
  try {
    const imageData = await loadImage(file)

    // Save the original image data
    originalImageData = imageDataCopy(imageData)
    processor = new ImageProcessor(imageData)
    displayImage(processor.getImageData())
  } catch (error) {
    console.error(error)
  }
})

// Event listener for the rotate button
rotateButton.addEventListener('click', () => {
  if (processor) {
    processor.rotate(90)
    displayImage(processor.getImageData())
  } else {
    alert('There is none image to rotate')
  }
})

// Event listener for the grayscale button
grayScaleButton.addEventListener('click', () => {
  if (processor) {
    processor.grayScale()
    displayImage(processor.getImageData())
  } else {
    alert('There is none image to grayscale')
  }
})

// Event listener for the reset button
resetButton.addEventListener('click', () => {
  if (originalImageData) {
    processor = new ImageProcessor(originalImageData)
    displayImage(processor.getImageData())
  } else {
    alert('There is none image to reset')
  }
})

// Event listener for the brightness input
brightnessInput.addEventListener('input', (event) => {
  if (processor) {
    const value = parseInt(event.target.value, 10)
    processor.brightness(value)
    displayImage(processor.getImageData())
  } else {
    alert('There is none image to adjust brightness')
  }
})

/**
 * Display the image on the canvas.
 *
 * @param {ImageData} imageData - The image data to display.
 */
function displayImage (imageData) {
  // Set the canvas dimensions to match the image
  canvas.width = imageData.width
  canvas.height = imageData.height

  // Draw the image data on the canvas
  context.putImageData(imageData, 0, 0)
}
