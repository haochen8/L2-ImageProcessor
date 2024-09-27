## Reflection on the image processing module

### Introduction
The development of the image processing module was a good learning expericene for understanding image processing and manipulation of RGB values but also calculations of some formulas for the filters.

### Learning outcomes
The understanding of RGB values for image processing was a key learning outcome, since rgb values are the one that manipulates the image pixels. Calculatios of different formulas for the filters was also another good learning outcome, each filter has its own formula to manipulate the image pixels, for example the noise filter has a formula that adds random values to each pixel to create a noise effect, and the grayscale filter that has a NFSC formula for conversion of the image to grayscale.

Code formulas example:
```javascript
// Noise filter formula
NewValue = OldValue + (Math.random() * 255 - 128) * NoiseAmount;

// Grayscale filter formula
NewValue = 0.299 * Red + 0.587 * Green + 0.114 * Blue;
```

Another important learning lesson was creation of deep copies since the original image data kept disappearing when adjusting range-input filters like brightness and constrast. This was solved by creating a deep copy of the image data before applying the filter which allowed the original image data state to be kept.

### Testing and debugging
Since the module is an image proccessor, for best possible debugging and testing, it had to be done visually. Therefore whenver I continued to develop a function, I made sure to implement an element and an event listener first in the test application environment, to see the result of the function visually. This was a good way to see if the function was working correctly or not.

### Reflection on naming functions and implementation
The naming and implementation of the functions
| Name and explanation | Reflection and rules from Clean Code |
|--------|-------------|
| rotateImage, a method that rotates an image | Following rules from Chapter 2, the name of the function is clear with its purpose. The function has a mix of high-level and low-level logic, perhaps it could be seperated into other functions. Less comments in the function could also be avoided if naming of variables were "better" |
| loadImage(file), loads an image from a valid file and returns the image data | The function name is clear with its purpose, it loads an image from a file. The function handles multiple tasks (like validate, read and create image URL), and from Chapter 3 the function should break into smaller functions with a single task.|
| adjustBrightness(imageData, value), adjusts the brightness of an image | The function has a single task, and the name of the function is clear with its purpose. |
| adjustContrast(imageData, value), adjusts the contrast of an image | The function has a single task, and the name of the function is clear with its purpose. |
| applyNoise(imageData), applies noise to an image | The function has a single task, and the name of the function is clear with its purpose. The amount is hardcoded as an constant, perhaps use it as a parameter instead. |


### Conclusion

The module gave new insightful learning experiences that I had not faced before, especially RGB values and formulas of an image. By challenging myself to finish this module, I have gained a lot of new knowledge and understanding of image processing and manipulation of RGB values. I tried to follow Chapter 2 and 3 from Clean Code as much as possible, but there are still some areas that could be improved with time.


