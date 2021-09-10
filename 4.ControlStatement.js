/*
  ! 1.if else

if (condition){

}else{

}

*/
//TODO: Code for taking raincoat or not

var tomorrow = "rain";
if (tomorrow == "rain") {
  console.log("Take raincoat");
} else {
  console.log("No need to take raincoat");
}

//TODO: Check if its a leap year

var year = 2100;
if ((year % 4) === 0 && (year % 100 != 0) && (year % 400 === 0)) {
  console.log("Leap year")
} else {
  console.log("Not a  leap year")
}

//TODO: Truthy and falsy value in JavaScript??

/*
*We have total 5 falsy values in JavaScript
           ! 1. 0
           ! 2." "
           ! 3. undefined
           ! 4.null
           !5.NaN 

           !False is false itself
*/
if (score = 0) {
  console.log("We lost the game")
} else {
  console.log("We won the game")
}

// TODO:Conditional Ternary operator 
// *It takes 3 operands (only operator)

var condition = 10;
condition = (condition == 10) ? "Messi" : "Ronaldo";
console.log(condition)
//! Better example  **LOL**
var age = 20;
condition = (age > 20) ? "Elligible to vote" : "Not Elligible"
console.log(condition)

// TODO: Switch Statements
var text = "Banana";


switch (text) {
  case "Banana":
    text = "Banana is good!";
    break;
  case "Orange":
    text = "I am not a fan of orange.";
    break;
  case "Apple":
    text = "How you like them apples?";
    break;
  default:
    text = "I have never heard of that fruit...";
}
console.log(text)
//TODO: Ternary operator Revision
var name = "Pratik";
text2 = (name == "Pratik") ? "Hello Pratik!" : "I dont know you";

console.log(text2)

// ! https://youtu.be/KGkiIBTq0y0?t=10006

//TODO: While statement
console.log("While loop")
number = 0;
while (number < 5) {
  console.log(number)
  number++;

}
console.log("DO while")
number2 = 0;
do {
  console.log(number2)
  number2++;
}
while (number2 < 5)

//TODO: For Loop
console.log("For loop")

for (var i = 0; i < 5; i++) {
  console.log(i)
}


// TODO: Print table for number 4
var number3 = 4
for (var j = 1; j <= 10; j++) {
  console.log(number3 + "*" + j + "=" + number3 * j)
}

//TODO:  For in -provides element's index number
let goals =["Messi","Ronaldo","Lewangoalski","Neymar"]

for(let elements in goals){
  console.log(elements)
}
//TODO: For of loop gives value of that element
let striker =["Messi","Ronaldo","Lewangoalski","Neymar"]

for(let elements of striker){
  console.log(elements)
}

//TODO: For each loop gives value of that element

// let strikers =["Messi","Ronaldo","Lewangoalski","Neymar"]

// strikers.forEach((elements,index,array) => {
//   console.log()
// });

/*
 TODO: Function in JS
 * We need to define function before using it.
 * to define function =>> 
 *    function function_Name(parameters){
 
 *       }
 * }
 */
// Todo: Sum of two number
function addNumber(x, y) {
  total = x + y;
  console.log("Sum is :" + total);
}
/*
! defining  a  function doesnot call it.

 */
addNumber(10, 20);

// TODO: Parameter vs arguments

// * Annoymous  Function Expression
var sum=function(x, y) {
  total = x + y;
  return total;
}
console.log("Sum is :"+ sum(20,40));

// Subtraction using function
var substract = function(a, b) {
  if(a>b){
      sub=a-b;
      return sub
  }else{
      sub = b-a;
      return sub
  }
}
console.log(substract(200,30))