## Test report for the image processing module

### Introduction
The knowledge of knowing that the module is working correctly is a crucial part in the development-process. Since the module is an image proccesor, it is highly more useful for debugging the functions and operations visually.

Test environment will be done in a browser environment (localhost), using the `canvas` element to display the image. An jpg image will be used for manual testing.

### Overview
Utilities:
- loadImage: Loads an image file, (jpg, png, gif), and sets it to ImageData.
- rotateImage: Rotates the image by 90 degrees.
- imageDataCopy: Creates a deep copy of ImageData.

Filters:
- applyGrayscale: Converts the image to grayscale.
- adjustBrightness: Adjusts the brightness of the image.
- adjustContrast: Adjusts the contrast of the image.
- applyInvert: Inverts the colors of the image.

### Test cases
#### TC 1. Verify that a valid image is loaded:
- Steps: Load different image files but also invalid files like pdf.
- Expectations: The image should be displayed correctly, otherwise reject and display an error message which can be found in test application environment.
- Result: The image is displayed correctly when a valid image is loaded and an error message is displayed when an invalid file is loaded.
#### TC 2. Rotate the image by 90 degrees:
- Steps: Load an image and rotate it by 90 degrees clockwise.
- Expectations: The image should be rotated by 90 degrees clockwise.
- Result: The image is rotated by 90 degrees clockwise.
#### TC 3. Apply grayscale filter:
- Steps: Load an image and apply the grayscale filter.
- Expectations: The image should be converted to grayscale.
- Result: The image is converted to grayscale.
#### TC 4. Adjust the brightness of the image:
- Steps: Load an image and adjust the brightness.
- Expectations: The brightness of the image should be adjusted from range input.
- Result: The brightness of the image is adjusted with the range input.
#### TC 5. Adjust the contrast of the image:
- Steps: Load an image and adjust the contrast.
- Expectations: The contrast of the image should be adjusted from range input.
- Result: The contrast of the image is adjusted with the range input.
#### TC 6. Apply invert filter:
- Steps: Load an image and apply the invert filter.
- Expectations: The colors of the image should be inverted.
- Result: The colors of the image are inverted.

### Conclusion
The module was manually tested and all test cases on ulitities and filters passed successfully.