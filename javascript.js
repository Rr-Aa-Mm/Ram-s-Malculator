calcButtonBuilder();
function calcButtonBuilder() {
    let buttonContainer = document.getElementById("buttonGrid");
    let buttonSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let fullButtonSet = {
        row1: { 1 : "(", 2 : ")", 3 : "%", 4 : "AC"},
        row2: { 1: 7, 2 : 8, 3 : 9, 4: "/"},
        row3: { 1: 4, 2 : 5, 3 : 6, 4: "X"},
        row4: { 1: 1, 2: 2, 3 : 3, 4: "-"},
        row5: { 1: 0, 2 : ".", 3 : "=", 4: "+"},
    };
    console.log("BUTTON OBJECT SUMMARY Rows: " + Object.keys(fullButtonSet));
    console.log("BUTTON OBJECT SUMMARY Row count is : " + Object.keys(fullButtonSet).length);
    var fullButtonSetSize = Object.keys(fullButtonSet).length;
    for (let i = 0; i < fullButtonSetSize; i++) { //LOOP INTO EACH ROW OF OBJECT
        let thisRowKeys = Object.keys(fullButtonSet)[i];
        let thisRowValues = Object.values(fullButtonSet)[i];
        let thisRowValuesCount = Object.keys(thisRowValues).length;
        console.log("Looping into " + thisRowKeys);
        console.log("This row has " + thisRowValuesCount + " buttons.");
        console.log("The button values are " + Object.values(thisRowValues));
        console.log(thisRowValues);
        let buttonDiv = document.createElement('div'); //create a flex row div for this line of buttons
        buttonDiv.className = "flex row justifySpaceEvenly padded";
        
        for (let ii = 0; ii < thisRowValuesCount; ii++) { //LOOP INTO EACH BUTTON WITHIN A ROW
            //console.log(Object.values(fullButtonSet)[i][ii]);
            let thisButtonValue = Object.values(thisRowValues)[ii];
            console.log(thisButtonValue);
            let thisButton = document.createElement('button');
            thisButton.innerText = thisButtonValue;
            if (typeof thisButtonValue === "number") {
                thisButton.className = "lobster button-74-secondary";
            } else {
                thisButton.className = "lobster button-74";
            };
           
            buttonDiv.appendChild(thisButton);
        }
        console.log(buttonDiv);
        document.getElementById("buttonGrid").appendChild(buttonDiv);
    }
    
}




//addBorders("div");
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