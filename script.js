const container = document.querySelector("#container");
const button = document.querySelector("#button");
let gridSize = 0;

function makeInitialGrid () {
    for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
            const div = document.createElement("div");
            div.style.width = "60px";
            div.style.height = "60px";
            div.classList.add("element");
            container.appendChild(div);
    }
    }   

    const elements = document.querySelectorAll(".element");

    for (const element of elements) {
        element.addEventListener("mouseover", () => element.classList.add("highlight"));
    }

    
}

function makeGrid (gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
                const div = document.createElement("div");
                div.classList.add("element");
                const elementSize = (1 / gridSize);
                div.style.width = `${960 * elementSize}px`;
                div.style.height = `${960 * elementSize}px`;
                container.appendChild(div);
        }
    }   

    const elements = document.querySelectorAll(".element");

    for (const element of elements) {
        element.addEventListener("mouseover", () => element.classList.add("highlight"));
    }

}

button.addEventListener("click", () => {
    gridSize = 0;
    while (gridSize < 1 || gridSize > 100) {
        gridSize = prompt("Size of grid's side (no more than 100)");
        if (gridSize === "") {
            break;
        }
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    makeGrid (gridSize);
});

makeInitialGrid();