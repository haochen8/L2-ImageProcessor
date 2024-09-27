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

### Conclusion

The module gave new insightful learning experiences that I had not faced before, especially RGB values and formulas of an image. By challenging myself to finish this module, I have gained a lot of new knowledge and understanding of image processing and manipulation of RGB values.


