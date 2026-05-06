// //7+13= 20
// //+ is an operand
// //7, 13 are operators

// //types of operator => unary(works with one operand) and binary(works with 2 operands)



// //1.unary
let x = 1;
console.log(x); //prints 1
x = -x;
console.log(x) //prints -1


// //2.binary (+, -, *, /, %(gives remainder,modulo operator), **(power operator))
let a = 11 , b = 9;
let sum = a+b;
console.log(sum); //prints 20



// //string concatenation (+ alone used for concat otherwise gives NaN)
let u = "hi", p = " hello";
let concat = u+ p;
console.log(concat); //prints hi hello


// //number(a) = unary plus(a) = +a = converts it to number
let s = '12';
let i = '2';
let add = +s + +i;
console.log(add); //prints 14



// //3.assignment operator (=)
let f=g=h=12; //=> known as chaining assignment
console.log(f,g,h); //12 12 12  



//4.modify in place
let x = 12;
x = x+5;
console.log(x);  //prints 22

x+=5//modify in place
console.log(x); //prints 22



//5.Increment  or Decrement
let x  = 12;
let y = 2;
console.log(x); //12
x++;
console.log(x); //13 (x+1)
y--;
console.log(y); //1


//pre and post increment & pre and post decrement
let x = 12;
console.log(--x);  //return value and then decrease so prints 11
console.log(x); //prints 11





