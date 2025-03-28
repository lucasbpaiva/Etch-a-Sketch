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
                fillSquare(node, color);
            }
        });

        node.addEventListener("mousedown", () => {
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

//choose colors
let eraserBtn = document.querySelector(".eraserButton");
let penBtn = document.querySelector(".penButton");
penBtn.classList.add("button-selected");
let clearBtn = document.querySelector(".clearButton");
let buttons = document.querySelectorAll("button");
let color = "pink";

function toggleSelectedButton(event) {
    buttons.forEach((node) => {
        node.classList.remove("button-selected");
    })
    event.target.classList.add("button-selected");
}

penBtn.addEventListener("click", (event) => {
    toggleSelectedButton(event);
    color = "pink";
})

eraserBtn.addEventListener("click", (event) => {
    toggleSelectedButton(event);
    color = "white";
})

clearBtn.addEventListener("click", (event) => {
    let tileList = document.querySelectorAll(".tile");
    tileList.forEach((node) => {
        fillSquare(node, "white");
    });
})
//------------------