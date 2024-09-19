/**
 * Main entry point of the application.
 *
 * @module index.js
 * @author Hao Chen
 * @version 1.0.0
 */

import { rotateImage } from "./util.js";

// Get elements
const uploadInput = document.getElementById("upload");
const selectAngle = document.getElementById("angle");
const rotateButton = document.getElementById("rotate");
const originalCanvas = document.getElementById("originalCanvas");
const rotatedCanvas = document.getElementById("rotatedCanvas");

// Initialize variables
let originalImageData;
let rotatedImageData;
let angle = 0;
let isRotated = false;
let file = "";
let imageData = "";

export function loadImage() {
  
}

