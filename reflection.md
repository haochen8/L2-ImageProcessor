## Reflection on the image processing module

### Introduction
The development of the image processing module was a good learning expericene for understanding image processing and manipulation of RGB values but also calculations of some formulas for the filters.

### Learning outcomes
The understanding of RGB values for image processing was a key learning outcome, since rgb values are the one that manipulates the image pixels. Calculations of different formulas for the filters was also another good learning outcome, each filter has its own formula to manipulate the image pixels, for example the noise filter has a formula that adds random values to each pixel to create a noise effect, and the grayscale filter that has a NFSC formula for conversion of the image to grayscale.

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

### Reflection on naming functions
| Function Name                              | Reflection and Rules from Clean 
|--------------------------------------------|------------------------------------|
| `rotateImage(imageData, angle)`            | The name clearly describes the function's purpose, which follows **Chapter 2** principles. However, the logic could be split into smaller functions to improve clarity. |
| `loadImage(file)`                          | The name is clear and describes the purpose of loading an image. Since the function handles multiple tasks (validation, reading, conversion to URL), it could be split into more specific functions. |
| `adjustBrightness(imageData, value)`       | The function name is clear, and it describes its purpose well. It follows the single responsibility principle, as suggested in **Chapter 2**. |
| `adjustContrast(imageData, value)`         | Similar to `adjustBrightness`, the name is clear and reflects its purpose, following the principles of **Chapter 2** on meaningful names. |
| `applyNoise(imageData)`                    | The function name is clear and descriptive. However, the noise amount is hardcoded; it could be made a parameter for better flexibility, following **Clean Code** principles. |
| `applyGrayscale(imageData)`                | The name clearly describes the function’s purpose, and it adheres to **Chapter 2** principles of using meaningful names. |
| `applyInvert(imageData)`                   | The name is straightforward and clearly communicates the function’s purpose. This follows **Chapter 2** principles on meaningful and simple names. |
| `data[i]`                                  | The variable name is not descriptive and could be improved for example like color. Following **Chapter 2**, variable names should be meaningful and reflect their purpose. |

### Reflection on Clean Code, Chapter 2: Meaningful names
In Chapter 2, the importance of meaningful names is emphasized. Functions like ***adjustBrightness*** and ***applyGrayscale*** effectively bring out this purpose. However, some variable names within the module could be improved. For example, within the ***applyNoise*** function, more descriptive variable names for data[i] or the noiseFormula would make the code more "readable and easier" to understand.

Meaningful names not only improve readability but also reduce the need for extensive comments. For example, in ***rotateImage***, separating the angle calculation logic from the image rotation logic into smaller, well-named functions would both improve clarity and reduce the need for comments explaining the code's behavior.

### Reflection on functions
| Function and its Purpose                                 | Reflection and Rules from Clean Code |
|----------------------------------------------------------|----------------------------------------- |
| `rotateImage(imageData, angle)`, rotates an image        | The function performs both high-level (angle calculation) and low-level (canvas manipulation) logic. According to **Chapter 3** the function should be split into smaller functions. |
| `loadImage(file)`, loads an image from a file            | The function handles multiple tasks: file validation, reading, and image creation. **Chapter 3** emphasizes, it should be broken down into smaller, single-responsibility functions.|
| `adjustBrightness(imageData, value)`, adjusts brightness | The function does one thing (adjust brightness), which follows the **single responsibility principle** from **Chapter 3**. It’s simple and focused.|
| `adjustContrast(imageData, value)`, adjusts contrast     | Like `adjustBrightness`, the function has a single, well-defined purpose and follows **Chapter 3** by being small and focused. |
| `applyNoise(imageData)`, applies noise                   | The function does one thing, which is good according to **Chapter 3**, but the noise amount is hardcoded. It should be passed as a parameter for greater flexibility and reusability.|
| `applyGrayscale(imageData)`, applies a grayscale filter  | The function has a clear and singular purpose. It follows **Chapter 3**'s rule to keep functions small and focused. |
| `applyInvert(imageData)`, inverts colors             | The function is simple and focused, which adheres to **Chapter 3** about keeping functions small and with a single responsibility. |


### Reflection on Clean Code, Chapter 3: Functions
***Chapter 3*** of Clean Code stands for writing small, focused functions that do one thing well (single responsibility principle). In this module, most functions follow this principle, such as adjustBrightness and applyGrayscale, which focus on a single image manipulation task. However, some functions, like loadImage, handle multiple responsibilities—file validation, file reading, and converting the file to image data. This could be refactored into smaller functions to follow the single responsibility principle.

Additionally, the applyNoise function would benefit from taking the noise amount as a parameter rather than using it as a hardcoded value. This would make the function more flexible and reusable, allowing the noise intensity to be adjusted dynamically. Refactoring functions to accept parameters for customization would enhance both flexibility and readability, as also highlighted in ***Chapter 3***.


### Conclusion

The module gave new insightful learning experiences that I had not faced before, especially RGB values and formulas of an image. By challenging myself to finish this module, I have gained a lot of new knowledge and understanding of image processing and manipulation of RGB values. I tried to follow Chapter 2 and 3 from Clean Code as much as possible, but there are still some areas that could be improved with time.


