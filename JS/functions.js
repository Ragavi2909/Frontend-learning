// //use of function => code reusability

// let a =2, b=3;
// function operation(a,b){ //this line a,b are known as parameters
//     console.log(a*b+a/b*a*a);
// }
// operation(a,b);
// operation(5,6);
// operation(2); //prints NaN  



// //scope concept
// let c; //global variable
// function operation(a,b){
//     c = a*b+a/b*a*a;  //local variable
// }
// operation(2,3);
// console.log(c);



// //using of return [return statement]
// let x;
// function addition(a,b,c){
//     x = a+b+c;
//     return x;
// }

// console.log(addition(5,2,3));  //prints 10



// //Q->get a number and find given number is odd or even and return the string odd/even using function
// function oddOrEven(x){
//     if(x % 2==0)
//         return "even";
//     else
//         return "odd";
// }
// console.log(oddOrEven(17));




// //assignment
// let x = 20;
// function oddOrEven(x){
//     if(x % 2==0)
//         return "even";
//     else
//         return "odd";
// }

// let oddEven = oddOrEven; //note - function is stored in variable (known as assignment)
// console.log(oddEven);  //prints [Function: oddOrEven]



// //****directly assigning variable (oddEven) instead of functionname to the function
// let x = 20;
// let oddEven = function(x){
//     if(x % 2==0)
//         return "even";
//     else
//         return "odd";
// }
// console.log(oddEven);
// //**instead for the above  we use ARROW function(nameless function) */
// let x = 20;
// let oddEven = (x) => { //removing function keyword and including arrow symbol
//     if(x % 2==0)
//         return "even";
//     else
//         return "odd";
// }
// console.log(oddEven);





// //callback -> function can be used as parameter
// function operation(op, a, b){  //op is a function passed as a parameter
//     return op(a,b);
// }
// let add = (a,b) => a+b; //arrow function

// function sub (a, b){
//     return a-b;         //normal function
// }
// console.log(operation(add,5,6));   //prints 11




//trivia question
let val = 2;
let res = (val) => {
    return 5 *val;
}

console.log(res(val));  //prints 10

