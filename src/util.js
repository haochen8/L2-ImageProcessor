/**
 * Utility functions
 *
 * @module util.js
 * @author Hao Chen 
 * @version 1.0.0
 */

export function rotateImage(imageData, angle, width, height) {
  // Create a canvas element to draw the rotated image
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.width = width;
  context.height = height;

  // Set angle to a value between 0 and 360
  let angle= angle % 360;
  if (angle < 0) {
    angle = 360 + angle;
  }

  // Round angle to the nearest 90 degrees
  angle = Math.round(angle / 90) * 90;
  
  // Convert angle to radian and rotate the image
  const radian = (angle * Math.PI) / 180;



}