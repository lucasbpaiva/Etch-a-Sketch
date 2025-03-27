function createGrid(n) {

    for (let i = 0; i < n * n; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        container.appendChild(tile);
    }
}

function fillSquare(tile) {
    tile.classList.add("filled");
}

let container = document.querySelector(".container");

let n = 16;
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
}