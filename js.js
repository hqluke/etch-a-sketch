const body = document.body
const containerDiv = document.querySelector(".container");
let currentColor = document.querySelector(".palette") //acess it with  currentColor.value
let gridSize = "16x16";

document.addEventListener('DOMContentLoaded', function() {
    console.log("hi")

    const title = document.createElement("h1");
    title.textContent = `Etch-a-Sketch ${gridSize}`;
    body.appendChild(title);

    const elementsDiv = document.createElement("div");
    elementsDiv.classList.add("elements");
    containerDiv.appendChild(elementsDiv);

    const colorDiv = document.createElement("div");
    colorDiv.classList.add("colorDiv");
    elementsDiv.appendChild(colorDiv);

    const palette = document.createElement("input");
    palette.type = "color";
    palette.classList.add("palette");
    palette.value = "#FF0000";
    colorDiv.appendChild(palette);

    const paletteText = document.createElement("p");
    paletteText.classList.add("paletteText")
    paletteText.textContent = "Select your color above.";
    colorDiv.appendChild(paletteText);

    const sizeDiv = document.createElement("div");
    sizeDiv.classList.add("sizeDiv");
    elementsDiv.appendChild(sizeDiv);

    const rangeSlider = document.createElement("input");
    rangeSlider.type = "range";
    rangeSlider.classList.add("rangeSlider");
    rangeSlider.min = 4;
    rangeSlider.max = 100;
    rangeSlider.step = 4
    sizeDiv.appendChild(rangeSlider);

    const rangeValue = document.createElement("p");
    rangeValue.classList.add("rangeValue");
    sizeDiv.appendChild(rangeValue);

    const rangeButton = document.createElement("button");
    rangeButton.classList.add("rangeButton");
    rangeButton.textContent = "Create New Grid";
    sizeDiv.appendChild(rangeButton);

    



    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid");
    containerDiv.appendChild(gridDiv);

    for(let i = 0; i < 16; i++){
        const box = document.createElement("div");
        box.classList.add("square");
        gridDiv.appendChild(box);
    }

    slider();
});

function slider(){
const rSlider = document.querySelector(".rangeSlider");
const rValue = document.querySelector(".rangeValue");
const rButton = document.querySelector(".rangeButton");
let rangeNum;
    rValue.textContent = `New Grid Size: ${gridSize}`;

    rSlider.addEventListener("input", (event) => {
     rangeNum = event.target.value;
     rValue.textContent = `New Grid Size: ${rangeNum}x${rangeNum}`;
    });

    rButton.addEventListener("click", () =>{
        gridSize = rValue.textContent;
        console.log(gridSize);
    }) 
}