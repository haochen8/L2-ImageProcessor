## Image-Proccessor Module

This module is responsible for processing images in JavaScript. It can be used to apply filters like grayscale, brightness, contrast, and invert and also rotate images in png, jpg, and gif formats. The module uses the canvas API to draw the image and manipulate the pixel data. The module also supports creating a deep copy of the image data to keep the original image data state. This ESLint Config in the module are based on Linnaéus University's coding standards which can be installed by running `npm i @lnu/eslint-config`.

### Operations
Image-Proccessor Module supports the following operations:
- `grayScale()`: Converts the image to grayscale.
- `brightness()`: Adjusts the brightness of the image.
- `contrast()`: Adjusts the contrast of the image.
- `invert()`: Inverts the colors of the image.
- `rotate()`: Rotates the image by 90 degrees.
- `noise()`: Adds a noise filter to the image.
- `reset()`: Resets the image to its original state.
- `imageDataCopy`: Creates a deep copy of the image data.

### Installation
Make sure you have a proper project structure, and that the JavaScript files are in the correct directories. Also make sure that Node.js and npm are installed on your machine.

To install the Image-Processor module, you can clone the repository from GitHub and import the necessary files into your project. The module consists of the following files:
- `index.js`: The main file that exports the ImageProcessor class and loadImage function.
- `image-processor.js`: The ImageProcessor class that contains the image processing methods.
- `filters.js`: The filter functions for grayscale, brightness, contrast, invert, and noise.
- `utilities.js`: Utility functions like creating a deep copy of the image data and rotating the image, and loading the image file.

### Usage
To use this Image-Processor module, you need to import the necessary exported class and functions from the main file (index.js) and create an instance of the ImageProcessor class and loadImage() method to load the image. Therefore you can call the methods from the ImageProcessor class to apply the desired manipulations and reset the image to its original state.

```javascript
Example:
import { ImageProcessor, loadImage } from './index.js';

const imageProcessor = new ImageProcessor();
const image = loadImage(file); // file is the image file
```
Furthermore, to set up the module, you need to create an input element for the file, a canvas element, button elements for each operation, and an input element for the brightness and contrast operations. You can then add event listeners to the file input element to call the loadImage() method and add event listeners to the buttons to call the respective methods from the ImageProcessor class. For displaying the image, you need to create a displayImage() function that takes the image data as an argument and draws the image on the canvas.

```javascript
Example:
const fileInput = document.getElementById('file-input');
const brightnessInput = document.getElementById('brightness');
const grayScaleButton = document.getElementById('gray-scale');
const resetButton = document.getElementById('reset');
const canvas = document.getElementById('canvas');

// Function to display the image data on the canvas
function displayImage(imageData) {
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  const context = canvas.getContext('2d');
  context.putImageData(imageData, 0, 0);
}

// Event listener for the file input
fileInput.addEventListener('change', async (event) => {
  const file = event.target.files[0]
  try {
    const imageData = await loadImage(file)
    // Save the original image data
    processor = new ImageProcessor(imageData)
    displayImage(processor.getImageData())
  } catch (error) {
    console.error(error)
  }
})

// Event listener for the gray scale button
grayScaleButton.addEventListener('click', () => {
  const imageData = processor.grayScale()
  displayImage(imageData)
})

// Event listener for the brightness input
brightnessInput.addEventListener('input', () => {
  const imageData = processor.brightness(Number(brightnessInput.value))
  displayImage(imageData)
})

// Event listener for the reset button
resetButton.addEventListener('click', () => {
  const imageData = processor.reset()
  displayImage(imageData)
})
```

### Testing the application
After setting up the module, in the test application you can run it in a local/live server and proceed with testing the different operations by uploading an valid image file and applying filters and reseting it.

### Conclusion
The Image-Processor module is a tool for applying different filters to valid png, jpg, and gif images. This module can be used a good foundation for building an even more advanced image processing module/application with even more filters and features.