// TODO: ArrayAn array is a special variable, which can hold more than one value at a time.
// ! In JS we can  have array class which can store value of any data types

/* 
TODO: 
*Traverse an Array 
*Search and filter array
*How to sort and compare array
* CRUD Operations
* Map(),Reduce(),Filter()

*/
// ! Declaring the array
let value=[1,2,3,4,,5,6,7]
var new_arr=new Array(5)
new_arr[0]=9
console.log(new_arr)
var arr=new Array(10,"Messi","Ronaldo","Johan","Lewangoalski","Neymar")

for(var element of arr){
    console.log(element)
}

for(var element in arr){
    console.log(element)
}

//!   1.Traverse an Array
//  methods to traverse are  for in, for of ,for each,simple for loop

let name =["Messi","Ronaldo","Lewangoalski","Neymar","Messi","Ronaldo","Lewangoalski","Neymar"]

for(i=0;i<name.length;i++){
    console.log(name[i])
}

//!2. Searching and Filter


//  ? indexof()  
// * It return the indexed element and if not found anything then returns -1
// let name =["Messi","Ronaldo","Lewangoalski","Neymar"]
console.log(name.indexOf("Messi"))

console.log(name.indexOf("Ronaldo"))

// ? Last indexOf() ??
// * 

console.log(name.lastIndexOf("Messi"))








//TODO: CRUD Operations
// ! Adding an element to array using push array

const animals =["Goat","Sheep","PUG","DOG","Cat"]
const new_animal=animals.push("Goat_Messi")
console.log(animals)
console.log(new_animal)
//! unshift  adds elemnt to beginning of the array

const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));

console.log(array1);
console.log(typeof(null))

// ? Push method returns the new length of the array

let songs=new Array("Goat is ", "messi is ","I am ");
console.log(songs)
 new_songs=songs.push("Roniie is ")
console.log(new_songs)  //Returns new length i.e 4
console.log(new_songs)
// console.log(new_songs.pop());

goats =new Array ("Messi","Ronaldo","Lewangoalski","Neymar")
console.log(goats.pop()) //Returns  the element removed 
console.log(goats)

// Todo: Shift 

console.log(goats) //
console.log(goats.shift())
console.log(goats)

// ! Question time:

/*
ToDO: Using Slipce method 
? Add Dec at the end of Array 
? return value of splice value
? update march to March(update)?
? Delete June from an array 
*/

const months=['Jan', 'Feb', 'Mar', 'Apr', 'May','June']

// const count=months.push("Dec")
// console.log(months)

//? Method 2
const newMonth=months.splice('4',0,'Dec')
console.log(months)

const lastMonth=months.splice(2,0,'Nothing')

console.log(months)


const numbers=[1,2,3,4,5]
numbers.splice(5,0,6,7)
numbers_new=console.log(numbers)
console.log(numbers_new)







