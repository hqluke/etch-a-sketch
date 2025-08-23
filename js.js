const body = document.body
const containerDiv = document.querySelector(".container");
let currentColor = document.querySelector(".palette") //acess it with  currentColor.value
let gridSize = "16";
let newGridSize = "";


document.addEventListener('DOMContentLoaded', function() {
    console.log("hi")

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("titleDiv");
    body.insertBefore(titleDiv, containerDiv);

    const title = document.createElement("h1");
    title.textContent = `Etch-a-Sketch ${gridSize}x${gridSize}`;
    titleDiv.appendChild(title);

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
    rangeSlider.step = 4;
    rangeSlider.value = 16;
    sizeDiv.appendChild(rangeSlider);

    const rangeValue = document.createElement("p");
    rangeValue.classList.add("rangeValue");
    sizeDiv.appendChild(rangeValue);

    const rangeButton = document.createElement("button");
    rangeButton.classList.add("rangeButton");
    rangeButton.textContent = "Create New Grid";
    sizeDiv.appendChild(rangeButton);

    const resetDiv = document.createElement("div");
    resetDiv.classList.add("resetDiv");
    elementsDiv.appendChild(resetDiv);

    const resetButton = document.createElement("button");
    resetButton.classList.add("resetButton");
    resetButton.textContent = "Reset Current Grid";
    resetDiv.appendChild(resetButton);

    const rulesDiv = document.createElement("div");
    rulesDiv.classList.add("rulesDiv");
    elementsDiv.appendChild(rulesDiv);

    const daRulez = document.createElement("p");
    daRulez.classList.add("daRulez");
    daRulez.textContent = "When you move the mouse over the squares, they get colored in. You can reset the current grid or create a new grid with your desired size; max size is 100x100. You can turn a square back to white by holding alt and hovering over the square with your mouse. Holding shift will prevent you from coloring so you can get to specific squares."
    rulesDiv.appendChild(daRulez);
    
    


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
const newButton = document.querySelector(".rangeButton");
const resButton = document.querySelector(".resetButton");
let rangeNum = 16;
    rValue.textContent = `Grid Size: ${gridSize}x${gridSize}`;

    rSlider.addEventListener("input", (event) => {
     rangeNum = event.target.value;
     rValue.textContent = `Grid Size: ${rangeNum}x${rangeNum}`;
    });

    newButton.addEventListener("click", () =>{
        gridSize = rangeNum;
        newGrid(gridSize);
    });

    resButton.addEventListener("click", () =>{
        rSlider.value = gridSize;
        rValue.textContent = `Grid Size: ${gridSize}x${gridSize}`
        resetGrid(gridSize);
    }) 
}


function newGrid(size){

}

function resetGrid(size){

}