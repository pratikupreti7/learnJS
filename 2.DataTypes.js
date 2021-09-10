/*
6 Primitive  DataTypes 
undefined
Boolean
Number
String
BigInt
Symbol

*/
// 1.String
var myname ="John Doe"
// type of operator
console.log(typeof(myname));
// 2.Number
var myAge=30;
console.log(typeof(myAge));
// 3.Boolean
var amIJohn=true;
console.log(typeof(amIJohn));

/* Difference between null and undefined */
/*null is a special value meaning "no value".
 null is a special object because typeof null returns 'object'. 
 On the other hand, undefined means that the variable has not been declared, 
 or has not been given a value. */

// 4.Undefined
var Iamnotdefined;
console.log(Iamnotdefined)

// Null
var Iamnull=null;
console.log(Iamnull)

/*What is NAN
 NaN is a property of the global object.
In other words, it is a variable in global scope.
*/
amINan=isNaN("Rock on!"); 
console.log(amINan)
amINumber=isNaN(8282)
console.log(amINumber)




