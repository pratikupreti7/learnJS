//* Let vs Const vs Var
// * let and const are Block scoped where as var is function scoped

//* Using var  Redeclare and reassign the values within a function

// var myName ="Ramesh"
// console.log(myName)
// var myName ="Suresh"
// console.log(myName)

//* Cant redeclare but can reassign in a block scope
// let myName ="Ramesh"
// console.log(myName)
// let myName ="Suresh"
// console.log(myName)

 //* Cannot reassign and cannot declare in a block scope
// const myName ="Ramesh"
// console.log(myName)
//  myName ="Suresh"
// console.log(myName)


//* 2. Template Literals(templete string)
// Use back ticks ` ` and using ${write variable here}
const number=4;
for(i=1;i<=10;i++){
    console.log(`${number} X ${i} = ${number*i} `)
}

//* Fat Arrow Functions

const sum = () => {
    let a=10,b=20;
    let total =a+b;
    return `Sum of  ${a} and ${b} is ${total}`
}

sum1=sum()
console.log(sum1)

const substract= (a,b) =>{
    if(a>b){
        sub=a-b;
        return `Subtraction of ${a} and ${b} is ${sub}`
    }else{
        sub = b-a;
        return `Subtraction of ${b} and ${a} is ${sub}`
    }
}
console.log(substract(20,30))
console.log(substract(50,30))


/* 
 TODO:1.Practice-1
    
 function sum(a,b){
     return a + b
 }
 */
//! Arrow Functions
const sum =(a,b) => a+b

/*
TODO: TODO:2.Practice-2

function isPositive(number){
    return number >=0

} */
//! Arrow Functions
const isPositive=() => number >=0

/*
TODO: TODO:3.Practice-3

function randomNumber(){
    return Math.random
}
*/

// ! Arrow Functions
const randomNumber= () => Math.random


/*
TODO: TODO:3.Practice-3

document.addEventListener('click',function(){

    console.log('Click')
})


*/

document.addEventListener('click',() => console.log('Click'))



