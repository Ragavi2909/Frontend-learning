//use of function => code reusability

let a =2, b=3;
function operation(a,b){ //this line a,b are known as parameters
    console.log(a*b+a/b*a*a);
}
operation(a,b);
operation(5,6);
operation(2); //prints NaN  



//scope concept
let c; //global variable
function operation(a,b){
    c = a*b+a/b*a*a;  //local variable
}
operation(2,3);
console.log(c);



//using of return [return statement]
let x;
function addition(a,b,c){
    x = a+b+c;
    return x;
}

console.log(addition(5,2,3));  //prints 10



//Q->get a number and find given number is odd or even and return the string odd/even using function
function oddOrEven(x){
    if(x % 2==0)
        return "even";
    else
        return "odd";
}
console.log(oddOrEven(17));