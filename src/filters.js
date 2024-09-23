/**
 * Add filter to the image
 *
 * @file filters.js
 * @author Hao Chen
 * @version 1.0.0
 */

export function grayScale() {
  // Get image data
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

  // NFSC formula
  const formula = (red, green, blue) =>
    0.299 * red + 0.587 * green + 0.114 * blue;

  // Apply the formula to each pixel
  for (let i = 0; i < imageData.length; i += 4) {
    const red = imageData.data[i];
    const green = imageData.data[i + 1];
    const blue = imageData.data[i + 2];
    const gray = formula(red, green, blue);
    imageData.data[i] = gray;
    imageData.data[i + 1] = gray;
    imageData.data[i + 2] = gray;
  }
}
