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
export function rotateImage(imageData, angle) {
  // Create a canvas element to draw the rotated image
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;

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

  // Convert angle to radian
  const radian = (angle * Math.PI) / 180;

  // Rotate the canvas
  context.translate(width / 2, height / 2);
  context.rotate(radian);
  context.translate(-width / 2, -height / 2);
  context.putImageData(imageData, 0, 0);

  // Get the rotated image data
  return canvas;
}
