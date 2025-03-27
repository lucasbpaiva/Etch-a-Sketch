function createGrid(n) {

    for (let i = 0; i < n * n; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        let sizeOfTile = 600 / n;
        tile.setAttribute("style", `width: ${sizeOfTile}px; height: ${sizeOfTile}px;`);
        grid.appendChild(tile);
    }
}

function fillSquare(tile) {
    tile.classList.add("filled");
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


let tileList = document.querySelectorAll(".tile");
for (let i = 0; i < tileList.length; i++) {
    let currentTile = tileList[i];
    currentTile.addEventListener("mouseover", () => {
        if (mousePressed) {
            fillSquare(currentTile);
        }
    });

    currentTile.addEventListener("click", () => {
        fillSquare(currentTile);
    })
}