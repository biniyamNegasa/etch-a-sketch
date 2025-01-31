

const container = document.querySelector(".container");
const button = document.querySelector("button");


const SIDE = 600;

function createGrid(number){
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
    for (let i = 0; i < number; i++){
        const node = document.createElement("div");
        container.appendChild(node);
        
        for (let j = 0; j < number; j++){
            const child = document.createElement("div");
            child.style.backgroundColor = "#95D2B3";
            
            child.style.width = `${SIDE/number}px`;
            child.style.height = `${SIDE/number}px`;
    
            child.addEventListener("mouseenter", () => {
                let red = Math.random()*255;
                let green = Math.random()*255;
                let blue = Math.random()*255;
                child.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            });
            node.appendChild(child);
        }
        
    }

}

button.addEventListener("click", () => {
    let num = +prompt("how many side squares do you want? ");
    if (num > 100) alert("The number must be less than or equal to 100");
    else if (num <= 0) {
        alert("number has to be positive");
    }
    else {
        createGrid(num);
    }


});

createGrid(16);
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
