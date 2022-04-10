// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
const WINNING_Format =[
  [1, 5, 9],
  [3, 5, 7],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
  ]
let Arrayx = [];
let Arrayo = [];
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
  if (text === "X"){
    Arrayx.push(index);
    document.getElementById(index).setAttribute("disabled","disabled");
    document.getElementById(index).style.color = "green";
  }
  else if (text === "O"){
    Arrayo.push(index);
    document.getElementById(index).setAttribute("disabled","disabled");
    document.getElementById(index).style.color = "red";
  }
  ck();
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if(confirm(`Horraaay, ${winner} wins!`)){
     // The code here will be exectued if you press on OK button that will pop on the window 
     restartGame();
  }
}

function ck(){
  if (Arrayx.length >= 3) {
    WINNING_Format.some(COMBINATION => {
      let target = COMBINATION;
      let arr= Arrayx;
      let checker = (arr, target) => target.every(v => arr.includes(v));
  
      if (checker(Arrayx ,COMBINATION) === true) {
          winningAlert("X");
      } 
  });
  } 
  if (Arrayo.length >= 3 ){
    WINNING_Format.some(COMBINATION => {
      let target = COMBINATION;
      let arr= Arrayo;
      let checker = (arr, target) => target.every(v => arr.includes(v));
  
      if (checker(Arrayo ,COMBINATION) === true) {
          winningAlert("O");
      } 
  });
  }
  if(Arrayo.length >= 5 || Arrayx.length >= 5){
    alert("Draw");
    restartGame();
  }
}
// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  // Your main code here.
  if(!this.text){
      this.text= "X";
    }
  else if (this.text ==="X"){
      this.text= "O";
  }
  else if (this.text ==="O"){
    this.text= "X";
  }

  fillButton(index, text);
  
}
function restartGame(){
Arrayx = [];
Arrayo = [];
for (var i = 1; i <= 9 ;i++){
  document.getElementById(i).innerHTML = "";
  document.getElementById(i).removeAttribute("disabled");
}
}
/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame
