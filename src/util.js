/**
 * Utility functions
 *
 * @module util.js
 * @author Hao Chen
 * @version 1.0.0
 */

/**
 * Rotate an image by a given angle (0°, 90°, 180°, 270°).
 *
 * @param {ImageData} imageData - The image data to rotate.
 * @param {number} angle - The angle to rotate the image.
 */
function rotateImage(imageData, angle) {
  // Set angle to a value between 0 and 360
  angle = angle % 360;
  if (angle < 0) {
    angle += 360;
  }

  // Round angle to the nearest 90 degrees
  angle = Math.round(angle / 90) * 90;

  // If angle is 0 or 360, return the original image
  if (angle === 0 || angle === 360) {
    return imageData;
  }

  // Create temporary canvas and context for the original image
  const temporaryCanvas = document.createElement("canvas");
  temporaryCanvas.width = imageData.width;
  temporaryCanvas.height = imageData.height;
  const temporaryContext = temporaryCanvas.getContext("2d");
  temporaryContext.putImageData(imageData, 0, 0);

  // Set new dimensions for the rotated image
  let newWidth, newHeight;
  if (angle === 90 || angle === 270) {
    newWidth = imageData.height;
    newHeight = imageData.width;
  } else {
    // If angle is 180 degrees
    newWidth = imageData.width;
    newHeight = imageData.height;
  }

  // Create a new canvas and context for the rotated image
  const canvas = document.createElement("canvas");
  canvas.width = newWidth;
  canvas.height = newHeight;
  const context = canvas.getContext("2d");

  // Apply transformation based on angle
  if (angle === 90) {
    context.translate(newWidth, 0);
    context.rotate(Math.PI / 2);
  } else if (angle === 180) {
    context.translate(newWidth, newHeight);
    context.rotate(Math.PI);
  } else if (angle === 270) {
    context.translate(0, newHeight);
    context.rotate((3 * Math.PI) / 2);
  }

  // Draw original image on the transformed context
  context.drawImage(temporaryCanvas, 0, 0);

  // Get the rotated image data and return it
  const rotatedImageData = context.getImageData(0, 0, newWidth, newHeight);

  return rotatedImageData;
}

function loadImage() {
  
}
