

const container = document.querySelector(".container");
const button = document.querySelector("button");

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
            child.style.margin = "5px";
            child.style.padding = "5px";
            child.style.width = "15px";
            child.style.height = "15px";
    
            child.addEventListener("mouseenter", () => {
                child.style.backgroundColor = "#E4003A";
            });
    
            // child.addEventListener("mouseleave", () => {
            //     child.style.backgroundColor = "#95D2B3";
            // });
    
            node.appendChild(child);
        }
        
    }

}

button.addEventListener("click", () => {
    let num = +prompt("how many side squares do you want? ");
    if (num > 100) alert("The number must be less than or equal to 100");

    else {
        createGrid(num);
    }


});

createGrid(16);
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
