/**
 * Test application for the image processor module.
 *
 * @module test.js
 * @author Hao Chen
 * @version 1.0.0
 */

import { ImageProcessor, loadImage } from "../src/index.js";

// Get elements from the DOM
const fileInput = document.getElementById("fileInput");
const rotateButton = document.getElementById("rotateButton");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let imageData;
let processor;

// Event listener for the file input
fileInput.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  const imageData = await loadImage(file);
  processor = new ImageProcessor(imageData);
  displayImage(processor.getImageData());
});

// Event listener for the rotate button
rotateButton.addEventListener("click", () => {
  processor.rotate(90);
  displayImage(processor.getImageData());
});

/**
 * Display the image on the canvas.
 *
 * @param {ImageData} imageData - The image data to display.
 */
function displayImage(imageData) {
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  context.putImageData(imageData, 0, 0);
}
