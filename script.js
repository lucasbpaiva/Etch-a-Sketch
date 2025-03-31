//create and update grid
function createGrid(n) {

    for (let i = 0; i < n * n; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        let sizeOfTile = 600 / n;
        tile.setAttribute("style", `width: ${sizeOfTile}px; height: ${sizeOfTile}px;`);
        //ensure border is 1px wide on edge cases
        if ((i + 1) % n == 0) { //right edge of the square grid
            tile.style.borderRight = "0px";
        }
        if (i >= (n * (n - 1))) { //bottom edge of the square grid
            tile.style.borderBottom = "0px";
        }
        grid.appendChild(tile);
    }

    //add event listeners for tiles
    let tileList = document.querySelectorAll(".tile");
    tileList.forEach((node) => {
        node.addEventListener("mouseover", () => {
            if (mousePressed) {
                if (rainbowMode) {
                    selectRandomColor();
                }
                fillSquare(node, color);
            }
        });

        node.addEventListener("mousedown", () => {
            if (rainbowMode) {
                selectRandomColor();
            }
            fillSquare(node, color);
        })
    })
}

function updateGrid () {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    createGrid(sizeSlider.value);
}

let grid = document.querySelector(".grid");
let sizeSlider = document.querySelector(".sizeSlider");
let sizePara = document.querySelector(".sizePara");
let n = 32;
createGrid(n); 

sizeSlider.addEventListener("input", () => {
    sizePara.textContent = `${sizeSlider.value} X ${sizeSlider.value}`;
})

sizeSlider.addEventListener("change", updateGrid)
//-------------------------------------

function fillSquare(tile, color) {
    tile.style.backgroundColor = color;
}

//detect mouse pressed
let mousePressed = false;
document.body.addEventListener("mousedown", () => {
    mousePressed = true;
})
document.body.addEventListener("mouseup", () => {
    mousePressed = false;
}) //-------------------

//menu options
let penBtn = document.querySelector(".penButton");
penBtn.classList.add("button-selected");
let eraserBtn = document.querySelector(".eraserButton");
let rainbowBtn = document.querySelector(".rainbowButton");
let clearBtn = document.querySelector(".clearButton");
let toggleGridBtn = document.querySelector(".toggleGridButton");
let buttons = document.querySelectorAll("button");
let opacity = 1;
let color = `rgba(0,0,0,${opacity})`;
let colorPicker = document.querySelector("#SelectedColor");
let gridless = false;
let eraserMode = false;
let rainbowMode = false;

function convertHexToRGBA (color) {
    let RedValue = parseInt(color.slice(1,3), 16);
    let GreenValue = parseInt(color.slice(3,5), 16);
    let BlueValue = parseInt(color.slice(5), 16);
    return `rgba(${RedValue},${GreenValue},${BlueValue},${opacity})`;
}

colorPicker.addEventListener("input", () => {
    if (!(eraserMode || rainbowMode)) {
        color = convertHexToRGBA(colorPicker.value);
        console.log(color);
    }
})

function toggleSelectedButton(event) {
    buttons.forEach((node) => {
        node.classList.remove("button-selected");
    })
    event.target.classList.add("button-selected");
    eraserMode = event.target == eraserBtn;
    rainbowMode = event.target == rainbowBtn;
}

penBtn.addEventListener("click", (event) => {
    toggleSelectedButton(event);
    color = convertHexToRGBA(colorPicker.value);
})

eraserBtn.addEventListener("click", (event) => {
    toggleSelectedButton(event);
    color = "white";
})

function selectRandomColor () {
    const rgb = [];
    for (let i = 0; i < 3; i++) {
        let element = Math.floor(Math.random() * 256);
        rgb.push(element);
    }
    color = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}

rainbowBtn.addEventListener("click", (event) => {
    toggleSelectedButton(event);
})

clearBtn.addEventListener("click", (event) => {
    let tileList = document.querySelectorAll(".tile");
    tileList.forEach((node) => {
        fillSquare(node, "white");
    });
})

function removeGrid () {
    let tiles = document.querySelectorAll(".tile");
    tiles.forEach((node) => {
        node.style.border = "0px";
    });
}

function addGrid() {
    let tiles = Array.from(document.querySelectorAll(".tile"));
    let n = sizeSlider.value;
    for (const [position, tile] of tiles.entries()) {
        tile.style.border = "1px solid black";
        tile.style.borderTop = "0px";
        tile.style.borderLeft = "0px";
        if ((position + 1) % n == 0) { //right edge of the square grid
            tile.style.borderRight = "0px";
        }
        if (position >= (n * (n - 1))) { //bottom edge of the square grid
            tile.style.borderBottom = "0px";
        }
    }
}

toggleGridBtn.addEventListener("click", () => {
    if (gridless) {
        addGrid();
        gridless = false;
    } else {
        removeGrid();
        gridless = true;
    }
})
//------------------