"use strict";

window.addEventListener("load", startApp);

const redSlider = document.querySelector("#red-slider");
const greenSlider = document.querySelector("#green-slider");
const blueSlider = document.querySelector("#blue-slider");

function startApp() {
    console.log("app is running...");
    redSlider.addEventListener("change", setColorValue);
    greenSlider.addEventListener("change", setColorValue);
    blueSlider.addEventListener("change", setColorValue);
}

function setColorValue() {
    document.querySelector("#red-label").textContent = "R: " + redSlider.value;
    document.querySelector("#green-label").textContent = "G: " + greenSlider.value;
    document.querySelector("#blue-label").textContent = "B: " + blueSlider.value;

    document.querySelector("body").style.backgroundColor = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`;
}
