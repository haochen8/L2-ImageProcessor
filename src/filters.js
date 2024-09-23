/**
 * Add filter to the image
 *
 * @file filters.js
 * @author Hao Chen
 * @version 1.0.0
 */

export function grayScale() {
  // Get the canvas and context with willREADFrequently set to true
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d", { willREADFrequently: true });

  // Get the image data
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

  // NFSC formula
  const formula = (red, green, blue) =>
    0.299 * red + 0.587 * green + 0.114 * blue;

  // Apply the formula to each pixel
  for (let i = 0; i < imageData.data.length; i += 4) {
    const red = imageData.data[i];
    const green = imageData.data[i + 1];
    const blue = imageData.data[i + 2];
    // Calculate the gray value
    const gray = formula(red, green, blue);
    // Set the red, green, and blue values to the gray value
    imageData.data[i] = gray;
    imageData.data[i + 1] = gray;
    imageData.data[i + 2] = gray;
  }
  // Put the image data back on the canvas
  context.putImageData(imageData, 0, 0);

  return imageData;
}
