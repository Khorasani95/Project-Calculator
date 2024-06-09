// var message = "Thanks "
// var banger  = "!"
// var full = message + banger
// alert(full)

// Ask the user for their name and store it in a variable
// var userName = prompt("What's your name?", "John Doe");

// // Display a greeting message using the user's name
// alert("Hello, " + userName + "! Welcome to our website.");

// var x = prompt("What is the Capital of Pakistan")
// if (x === "Islamabad") {
//   alert("True")
// }
// else {
//   alert("False")
// }


// CALCULATOR PROGRAM
let equation = ""
function appendToDisplay(number) {
  equation += number
  document.getElementById("display").value = equation
  
}
function clearDisplay() {
  equation = ""
  document.getElementById("display").value = "" 
}
function calculate() {
  let result = eval(equation)
  document.getElementById("display").value = result

}
