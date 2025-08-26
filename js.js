const body = document.body
const containerDiv = document.querySelector(".container");
let gridSize = 16;
let squareSize = 0;
let elements = {};


function createElements(){



    const title = document.createElement("h1");
    title.textContent = titleText(gridSize);
    

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
    rangeSlider.value = gridSize;
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
    resetButton.textContent = resetGridText(gridSize);
    resetDiv.appendChild(resetButton);

    const textDiv = document.createElement("div");
    textDiv.classList.add("textDiv");
    elementsDiv.appendChild(textDiv);

    const rulesDiv = document.createElement("div");
    rulesDiv.classList.add("rulesDiv");
    textDiv.appendChild(rulesDiv);

    const daRulez = document.createElement("p");
    daRulez.classList.add("daRulez");
    daRulez.textContent = "You can reset the current grid or create a new grid with your desired size; max size is 100x100.";
    rulesDiv.appendChild(daRulez);

    const controlsDiv = document.createElement("div");
    controlsDiv.classList.add("controlsDiv");
    textDiv.appendChild(controlsDiv);

    const controlsTitle = document.createElement("p");
    controlsTitle.classList.add("controlsTitle")
    controlsTitle.textContent = "-----CONTROLS-----";
    controlsDiv.appendChild(controlsTitle);

    const controlListDiv = document.createElement("div");
    controlListDiv.classList.add("controlListDiv");
    controlsDiv.appendChild(controlListDiv);

    const daControls = document.createElement("ul");
    daControls.classList.add("daControls");
    controlsDiv.appendChild(daControls);

    const daControlsListTop = document.createElement("li");
    daControlsListTop.classList.add("daControlsListTop");
    daControlsListTop.textContent = "Hold alt and hover over squares to turn them to white. ";
    daControls.appendChild(daControlsListTop);

    const daControlsListBottom = document.createElement("li");
    daControlsListBottom.classList.add("daControlsListBottom");
    daControlsListBottom.textContent = "Hold shift to select specific squares; you can click on the square to color it. You can do the same with shift+alt+click to color a square white.";
    daControls.appendChild(daControlsListBottom);
    
    
    const lateDiv = document.createElement("div");
    lateDiv.classList.add("lateDiv");
    containerDiv.appendChild(lateDiv);

    lateDiv.appendChild(title);

    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid");
    lateDiv.appendChild(gridDiv);



    

    return {
         title, elementsDiv, colorDiv, palette, paletteText,
        sizeDiv, rangeSlider, rangeValue, rangeButton, resetDiv, resetButton,
        rulesDiv, daRulez, gridDiv, textDiv, controlsDiv, controlsTitle, daControls,
         lateDiv, daControlsListTop, daControlsListBottom, controlListDiv
    };


}
    
document.addEventListener('DOMContentLoaded', function() {
    console.log("hi")
    elements = createElements();
    newGrid(gridSize)
    slider();
    mouseControls();
});



function slider(){
let rangeNum = 0;
    elements.rangeValue.textContent = grideSizeText(gridSize);

    elements.rangeSlider.addEventListener("input", (event) => {
     rangeNum = event.target.value;
     elements.rangeValue.textContent = grideSizeText(rangeNum);
    });

    elements.rangeButton.addEventListener("click", () =>{
        gridSize = rangeNum;
        newGrid(gridSize);
    });

    elements.resetButton.addEventListener("click", () =>{
        elements.rangeSlider.value = gridSize;
        elements.rangeValue.textContent = grideSizeText(gridSize);
        resetGrid();
    }) 
}


function newGrid(size){

    if(elements.gridDiv.hasChildNodes()){
        let child = elements.gridDiv.lastElementChild;
        while (child) {
            elements.gridDiv.removeChild(child);
            child = elements.gridDiv.lastElementChild;
        }
    }

    for(let i = 0; i < size*size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        elements.gridDiv.appendChild(square);
        squareSize = (800/size) -2;
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;
    }

    elements.title.textContent = titleText(size);
    elements.resetButton.textContent = resetGridText(size);
}

function resetGrid(){
    console.log(elements.gridDiv.children.length)
    for(const child of elements.gridDiv.children){
        child.style.backgroundColor = "white";
        child.style.borderColor = "black";
    }
}

function grideSizeText(size){
    return `New Grid Size: ${size}x${size}`;
}

function titleText(size){
    return `Etch-a-Sketch ${size}x${size}`;
}

function resetGridText(size){
    return `Reset Current Grid\n${size}x${size}`;
}

function mouseControls(){
    elements.gridDiv.addEventListener("mouseover", (event) =>{
        if (!event.shiftKey) {
            if (event.altKey) {
                event.target.style.backgroundColor = "white";
                event.target.style.borderColor = "black";
            } else {
                event.target.style.backgroundColor = elements.palette.value;
                event.target.style.borderColor = elements.palette.value;
            }
        }
    })


    elements.gridDiv.addEventListener("click", (event) =>{
            if (event.altKey) {
                event.target.style.backgroundColor = "white";
                event.target.style.borderColor = "black";
            } else {
                event.target.style.backgroundColor = elements.palette.value;
                event.target.style.borderColor = elements.palette.value;
            }
    })    
    
}