let container = document.querySelector(".container");
let n = 256;

for (let i = 0; i < n; i++) {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    container.appendChild(tile);
}