const body = document.body
const containerDiv = document.querySelector(".container");
let currentColor = document.querySelector(".palette") //acess it with  currentColor.value
let gridSize = "16x16";

document.addEventListener('DOMContentLoaded', function() {
    console.log("hi")

    let title = document.createElement("h1");
    title.textContent = `Etch-a-Sketch ${gridSize}`;
    body.appendChild(title);

    let elementsDiv = document.createElement("div");
    elementsDiv.classList.add("elements");
    containerDiv.appendChild(elementsDiv);

    let colorDiv = document.createElement("div");
    colorDiv.classList.add("colorDiv");
    elementsDiv.appendChild(colorDiv);

    let palette = document.createElement("input");
    palette.type = "color";
    palette.classList.add("palette");
    palette.value = "#FF0000";
    colorDiv.appendChild(palette);

    let paletteText = document.createElement("p");
    paletteText.classList.add("paletteText")
    paletteText.textContent = "Select your color above.";
    colorDiv.appendChild(paletteText);

    let sizeDiv = document.createElement("div");
    sizeDiv.classList.add("sizeDiv");
    elementsDiv.appendChild(sizeDiv);

    let rangeSlider = document.createElement("input");
    rangeSlider.type = "range";
    rangeSlider.classList.add("range");
    rangeSlider.min = 2;
    rangeSlider.max = 100;

    let rangeLabel = document.createElement("label");
    rangeLabel.htmlFor = ".range"; //gonna needa figure out the label
    


    let gridDiv = document.createElement("div");
    gridDiv.classList.add("grid");
    containerDiv.appendChild(gridDiv);

    for(let i = 0; i < 16; i++){
        const box = document.createElement("div");
        box.classList.add("square");
        gridDiv.appendChild(box);
        count++;
    }


});