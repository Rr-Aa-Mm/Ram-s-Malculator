let calcEval = "";
let justComputed = 0;

gemCalcButtonBuilder();
function gemCalcButtonBuilder() {
    let screenDisplay = document.getElementById("screenDisplay");
    let buttonContainer = document.getElementById("buttonGrid");
    let buttonSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let fullButtonSet = {
        row1: { 1 : "(", 2 : ")", 3 : "%", 4 : "AC"},
        row2: { 1: 7, 2 : 8, 3 : 9, 4: "/"},
        row3: { 1: 4, 2 : 5, 3 : 6, 4: "*"},
        row4: { 1: 1, 2: 2, 3 : 3, 4: "-"},
        row5: { 1: 0, 2 : ".", 3 : "=", 4: "+"},
    };
    console.log("BUTTON OBJECT SUMMARY Rows: " + Object.keys(fullButtonSet));
    console.log("BUTTON OBJECT SUMMARY Row count is : " + Object.keys(fullButtonSet).length);
    var fullButtonSetSize = Object.keys(fullButtonSet).length;
    
    //Loop into each row within the button object...
    for (let i = 0; i < fullButtonSetSize; i++) { 
        let thisRowKeys = Object.keys(fullButtonSet)[i];
        let thisRowValues = Object.values(fullButtonSet)[i];
        let thisRowValuesCount = Object.keys(thisRowValues).length;
        console.log("Looping into " + thisRowKeys);
        console.log("This row has " + thisRowValuesCount + " buttons.");
        console.log("The button values are " + Object.values(thisRowValues));
        console.log(thisRowValues);
        let buttonDiv = document.createElement('div'); //create a flex row div for this line of buttons
        buttonDiv.className = "flex row justifySpaceEvenly padded";
        
        //For each row in the button object,loop into each button...
        for (let ii = 0; ii < thisRowValuesCount; ii++) { 
            let thisButtonValue = Object.values(thisRowValues)[ii];
            console.log(thisButtonValue);
            let thisButton = document.createElement('div');
            //thisButton.innerText = "Ram";
            thisButton.classList = "gemButtonClass";
            let thisButtonLabel = document.createElement('h1');
            thisButtonLabel.innerText = thisButtonValue;
            thisButtonLabel.classList = "gemButtonText";
            
                        //Setup click listeners for each button...
                        if (thisButtonLabel.innerText === "AC") { //Check if this is the AC button...
                            thisButton.addEventListener('click', () => { //Behavior when button is clicked...
                                //alert("clicked " + thisButtonValue);
                                screenDisplay.innerText = ""; //clear the screen if this is the AC button...
                                calcEval = "";
                            });
                            
                        } else if (thisButtonLabel.innerText === "=") {
                            thisButton.addEventListener('click', () => { //Behavior when button is clicked...
                                //alert("clicked " + thisButtonValue);
                                //screenDisplay.innerText = ""; //clear the screen if this is the AC button...
                                let calcResult = eval(calcEval);
                                screenDisplay.innerText = calcResult;
                                calcEval = "", //empty the formula string
                                justComputed = 1; //toggle this switch for clear the sreen on next button push
                            });
                        } else {
            
                            thisButton.addEventListener('click', () => { //Behavior when button is clicked...
                                //alert("clicked " + thisButtonValue);
                                if (justComputed = 1) {
                                    justComputed = 0;
                                    screenDisplay.innerText = "";
                                };
                                screenDisplay.innerText = screenDisplay.innerText + thisButtonValue;
                                //screenDisplay.innerText = "";
                                calcEval = calcEval + thisButton.innerText;
                            });  
                        }
            


            //stylize each button based on datatype...
            if (typeof thisButtonValue === "number") {      
                let thisGemUnder = document.createElement("img");
                thisGemUnder.src = "./Art/1x/orangeSolid80.png";
                thisGemUnder.classList = "gemButton";
    
                let thisGemOver = document.createElement("img");
                thisGemOver.src = "./Art/1x/whiteTrans20.png";
                thisGemOver.classList = "gemButton";
    
                thisButton.appendChild(thisGemUnder);
                thisButton.appendChild(thisGemOver);
                thisButton.appendChild(thisButtonLabel);
            } else {
                let thisGemUnder = document.createElement("img");
                thisGemUnder.src = "./Art/1x/pinkSolid.png";
                thisGemUnder.classList = "gemButton";
    
                let thisGemOver = document.createElement("img");
                thisGemOver.src = "./Art/1x/pinkTrans.png";
                thisGemOver.classList = "gemButton";
    
                thisButton.appendChild(thisGemUnder);
                thisButton.appendChild(thisGemOver);
                thisButton.appendChild(thisButtonLabel);
            };
            
            /*
            thisButton.classList = "gemButtonClass";
            thisButton.innerText = "R";
            
            let thisButton = document.createElement('img');
            thisButton.src = "./Art/1x/gemsAsset 2.png";
            thisButton.classList = "lobster gemButton"
            */
            buttonDiv.appendChild(thisButton); //send the built button into the button div on frontEnd. 
        }
        console.log(buttonDiv);
        document.getElementById("buttonGrid").appendChild(buttonDiv);
    }
    
}





//calcButtonBuilder();
function calcButtonBuilder() {
    let screenDisplay = document.getElementById("screenDisplay");
    let buttonContainer = document.getElementById("buttonGrid");
    let buttonSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let fullButtonSet = {
        row1: { 1 : "(", 2 : ")", 3 : "%", 4 : "AC"},
        row2: { 1: 7, 2 : 8, 3 : 9, 4: "/"},
        row3: { 1: 4, 2 : 5, 3 : 6, 4: "*"},
        row4: { 1: 1, 2: 2, 3 : 3, 4: "-"},
        row5: { 1: 0, 2 : ".", 3 : "=", 4: "+"},
    };
    console.log("BUTTON OBJECT SUMMARY Rows: " + Object.keys(fullButtonSet));
    console.log("BUTTON OBJECT SUMMARY Row count is : " + Object.keys(fullButtonSet).length);
    var fullButtonSetSize = Object.keys(fullButtonSet).length;
    
    //Loop into each row within the button object...
    for (let i = 0; i < fullButtonSetSize; i++) { 
        let thisRowKeys = Object.keys(fullButtonSet)[i];
        let thisRowValues = Object.values(fullButtonSet)[i];
        let thisRowValuesCount = Object.keys(thisRowValues).length;
        console.log("Looping into " + thisRowKeys);
        console.log("This row has " + thisRowValuesCount + " buttons.");
        console.log("The button values are " + Object.values(thisRowValues));
        console.log(thisRowValues);
        let buttonDiv = document.createElement('div'); //create a flex row div for this line of buttons
        buttonDiv.className = "flex row justifySpaceEvenly padded";
        
        //For each row in the button object,loop into each button...
        for (let ii = 0; ii < thisRowValuesCount; ii++) { 
            let thisButtonValue = Object.values(thisRowValues)[ii];
            console.log(thisButtonValue);
            let thisButton = document.createElement('button');
            thisButton.innerText = thisButtonValue;
            
            
            //stylize each button based on datatype...
            if (typeof thisButtonValue === "number") {      
                thisButton.className = "lobster button-74-secondary";
            } else {
                thisButton.className = "lobster button-74";
            };

            //Setup click listeners for each button...
            if (thisButton.innerText === "AC") { //Check if this is the AC button...
                thisButton.addEventListener('click', () => { //Behavior when button is clicked...
                    //alert("clicked " + thisButtonValue);
                    screenDisplay.innerText = ""; //clear the screen if this is the AC button...
                    calcEval = "";
                });
                
            } else if (thisButton.innerText === "=") {
                thisButton.addEventListener('click', () => { //Behavior when button is clicked...
                    //alert("clicked " + thisButtonValue);
                    //screenDisplay.innerText = ""; //clear the screen if this is the AC button...
                    let calcResult = eval(calcEval);
                    screenDisplay.innerText = calcResult;
                    calcEval = "", //empty the formula string
                    justComputed = 1; //toggle this switch for clear the sreen on next button push
                });
            } else {

                thisButton.addEventListener('click', () => { //Behavior when button is clicked...
                    //alert("clicked " + thisButtonValue);
                    if (justComputed = 1) {
                        justComputed = 0;
                        screenDisplay.innerText = "";
                    };
                    screenDisplay.innerText = screenDisplay.innerText + thisButtonValue;
                    //screenDisplay.innerText = "";
                    calcEval = calcEval + thisButton.innerText;
                });  
            }

            /*
            if (thisButton.thisButtonValue = "AC") {
                thisButton.addEventListener('click', () => { //Behavior when button is clicked...
                    //alert("clicked " + thisButtonValue);
                    alert("OK!");
                    screenDisplay.innerText = "";
                });
            } else {
                thisButton.addEventListener('click', () => { //Behavior when button is clicked...
                    //alert("clicked " + thisButtonValue);
                    alert("Other!");
                    screenDisplay.innerText = screenDisplay.innerText + thisButtonValue;
                });
            }
            */           
            buttonDiv.appendChild(thisButton); //send the built button into the button div on frontEnd. 
        }
        console.log(buttonDiv);
        document.getElementById("buttonGrid").appendChild(buttonDiv);
    }
    
}

function screenBuilder() {

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

/*
gemCalcButtonBuilder();
function gemCalcButtonBuilder() {
    let screenDisplay = document.getElementById("screenDisplay");
    let buttonContainer = document.getElementById("buttonGrid");
    let buttonSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let fullButtonSet = {
        row1: { 1 : "(", 2 : ")", 3 : "%", 4 : "AC"},
        row2: { 1: 7, 2 : 8, 3 : 9, 4: "/"},
        row3: { 1: 4, 2 : 5, 3 : 6, 4: "*"},
        row4: { 1: 1, 2: 2, 3 : 3, 4: "-"},
        row5: { 1: 0, 2 : ".", 3 : "=", 4: "+"},
    };
    console.log("BUTTON OBJECT SUMMARY Rows: " + Object.keys(fullButtonSet));
    console.log("BUTTON OBJECT SUMMARY Row count is : " + Object.keys(fullButtonSet).length);
    var fullButtonSetSize = Object.keys(fullButtonSet).length;
    
    //Loop into each row within the button object...
    for (let i = 0; i < fullButtonSetSize; i++) { 
        let thisRowKeys = Object.keys(fullButtonSet)[i];
        let thisRowValues = Object.values(fullButtonSet)[i];
        let thisRowValuesCount = Object.keys(thisRowValues).length;
        console.log("Looping into " + thisRowKeys);
        console.log("This row has " + thisRowValuesCount + " buttons.");
        console.log("The button values are " + Object.values(thisRowValues));
        console.log(thisRowValues);
        let buttonDiv = document.createElement('div'); //create a flex row div for this line of buttons
        buttonDiv.className = "flex row justifySpaceEvenly padded";
        
        //For each row in the button object,loop into each button...
        for (let ii = 0; ii < thisRowValuesCount; ii++) { 
            let thisButtonValue = Object.values(thisRowValues)[ii];
            console.log(thisButtonValue);
            let thisButton = document.createElement('button');
            thisButton.classList = "gemButtonClass";
            thisButton.innerText = "R";
            /*
            let thisButton = document.createElement('img');
            thisButton.src = "./Art/1x/gemsAsset 2.png";
            thisButton.classList = "lobster gemButton"
            
            buttonDiv.appendChild(thisButton); //send the built button into the button div on frontEnd. 
        }
        console.log(buttonDiv);
        document.getElementById("buttonGrid").appendChild(buttonDiv);
    }
    
}
*/


function screenBuilder() {

}