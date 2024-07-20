

const container = document.querySelector(".container");

for (let i = 0; i < 16; i++){
    const node = document.createElement("div");
    container.appendChild(node);
    
    for (let j = 0; j < 16; j++){
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


container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
