// *Expression and Operators

// ! 1.Assignment
// ! 2.Arithmetic
// ! 3.Comparision
// ! 4.Logical
// ! 5.String
// ! 6.Conditional(Ternary) "Discussed in Chap-4"


//TODO: 1.Assignment(=)
var x=5;
var y=5;
//* Error in 1st because we are using and operator
console.log("Both are equal or not equal"+ x==y);
console.log(x==y);
//TODO: 2.Arithmetic (+,-,*,/,%)
console.log(4/2.3);

//TODO: Increment VS Decreent
/* 
1.Incrememnt x++ or ++x==y
2.Decrement x-- or --x

 */
var num =15;
var newnum =num++;
console.log(num);
console.log(newnum);

var num2=15;
var newnum2=++num2;
console.log(newnum2)
console.log(newnum2)
// Prefix decrement operator
var num3=15;
var newnum3=--num3;
console.log(num3)
console.log(newnum3)

// 3.Comparision 
var a=1;
var b=1;
console.log(a==b);
console.log(a!=b);
// 4.Logical Operators

var a1=10;
var b1=20;
// Logical AND
console.log((a&&b)>0);
console.log((a&&b)<0);

// Concatenate string and number
console.log("P"+5)

//TODO: Swap two numbers using third variable
var s=20;
var r=30;
var temp=s;
var s=r;
var  r=temp;
console.log(r,s)

//TODO: Swap without using third variable
var u=20;
var v=50;
u=u+v; //70
v=u-v; //20
u= u-v   //50
console.log(v,u)

//TODO: Difference between == and ===
/*" == "only checks value 
 where as "=== "check value and datatype also.
*/
var f=20;
var d="20";
console.log(f==d);//True
console.log(f===d);//False





