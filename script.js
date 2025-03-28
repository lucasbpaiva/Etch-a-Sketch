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

function fillSquare(tile, color) {
    tile.style.backgroundColor = color;
}

let grid = document.querySelector(".grid");

let n = 32;
createGrid(n);

let mousePressed = false;
document.body.addEventListener("mousedown", () => {
    mousePressed = true;
})
document.body.addEventListener("mouseup", () => {
    mousePressed = false;
})

let eraserBtn = document.querySelector(".eraserButton");

let color = "pink";
eraserBtn.addEventListener("click", () => {
    color = "white";
})

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