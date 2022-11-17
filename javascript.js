let calcEval = "";
let justComputed = 0;

//Calc Button Imagery

//number buttons
let buttonAbaseSrc = "./Art/1x/solidBlue.png";
let buttonAhoverSrc = "./Art/1x/orangeSolid80.png";
let buttonAtransSrc = "./Art/1x/whiteTrans20.png";

//other buttons
let buttonBbaseSrc = "./Art/1x/pinkSolid.png";
let buttonBhoverSrc = "./Art/1x/GemsAsset 9.png";
let buttonBtransSrc = "./Art/1x/pinkTrans.png";

screenBackgroundSrc = ".Art/1x/thingBlue.png";


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
        buttonDiv.className = "flex row";
        buttonDiv.id = "buttonDiv";
        
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
                thisGemUnder.src = buttonAbaseSrc;
                thisGemUnder.classList = "gemButton";

                let thisGemHover = document.createElement("img");
                thisGemHover.src = buttonAhoverSrc;
                thisGemHover.classList = "gemButton hoverFadeIn";
    
                let thisGemOver = document.createElement("img");
                thisGemOver.src = buttonAtransSrc;
                thisGemOver.classList = "gemButton";
    
                thisButton.appendChild(thisGemUnder);
                thisButton.appendChild(thisGemHover);
                thisButton.appendChild(thisButtonLabel);
                thisButton.appendChild(thisGemOver);
                
            } else {
                let thisGemUnder = document.createElement("img");
                thisGemUnder.src = buttonBbaseSrc;
                thisGemUnder.classList = "gemButton";

                let thisGemUnder2 = document.createElement("img");
                thisGemUnder2.src = "./Art/1x/pinkSolid.png";
                thisGemUnder2.classList = "gemButton";

                let thisGemHover = document.createElement("img");
                thisGemHover.src = buttonBhoverSrc;
                thisGemHover.classList = "gemButton hoverFadeIn";
    
                let thisGemOver = document.createElement("img");
                thisGemOver.src = buttonBtransSrc;
                thisGemOver.classList = "gemButton";
    
                thisButton.appendChild(thisGemUnder);
                thisButton.appendChild(thisGemUnder2);
                thisButton.appendChild(thisGemHover);
                thisButton.appendChild(thisButtonLabel);
                thisButton.appendChild(thisGemOver);  
                
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

