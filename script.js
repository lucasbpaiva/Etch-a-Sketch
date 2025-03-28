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
let n = 64;
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
let color = "pink";

eraserBtn.addEventListener("click", () => {
    color = "white";
})

penBtn.addEventListener("click", () => {
    color = "pink";
}) //------------------

let tileList = document.querySelectorAll(".tile");
for (let i = 0; i < tileList.length; i++) {
    let currentTile = tileList[i];
    currentTile.addEventListener("mouseover", () => {
        if (mousePressed) {
            fillSquare(currentTile, color);
        }
    });

    currentTile.addEventListener("mousedown", () => {
        fillSquare(currentTile, color);
    })
}