let selectedColor = "#65ff00";

/*
colorButtonBuilder();
function colorButtonBuilder() {
    let buttonContainer = document.getElementById("buttonGrid");
    let buttonSet = {
        [],
    };
    let colors = ["Slime Green", "Mega Purple", "Blue Lightning", "Laser Gold", "Vampire Red"];
    let colorsHEX = ["#65ff00", "#FF00FF", "#7FDBFF", "#FFDC00", "#FF4136"];
    for (let i =0; i < colors.length; i++) {
        let colorButton = document.createElement("button");
        colorButton.classList.add("colorButton");
        colorButton.name = colors[i];
        colorButton.value = colors[i];
        colorButton.innerText = colors[i];
        colorButton.style.backgroundColor = colorsHEX[i];
        colorButton.addEventListener("click", function() {
            selectedColor = colorButton.style.backgroundColor;
            console.log("color updated to" + colorButton.style.backgroundColor);
        })
        console.log(colorButton);
        buttonContainer.appendChild(colorButton);

    }
}
*/

calcButtonBuilder();
function calcButtonBuilder() {
    let buttonContainer = document.getElementById("buttonGrid");
    let buttonSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for (let i = 0; i < buttonSet.length; i++) {
        let calcButton = document.createElement("button");
        calcButton.classList.add("colorButton");
        calcButton.innerText = buttonSet[i];
    }
    buttonContainer.appendChild(calcButton);
}




addBorders("div");
function addBorders(divClass) {
    console.log("addBorders() is running now");
    let selectedDivs = document.querySelectorAll(divClass);
    let newArray = Array.from(selectedDivs);
    newArray.forEach((divClass) => {
        console.log(divClass.style.border);
        divClass.style.borderTop = "solid yellow";
        divClass.style.borderBottom = "solid blue";
        divClass.style.borderLeft = "solid lime";
        divClass.style.borderRight = "solid red";
    })
}



