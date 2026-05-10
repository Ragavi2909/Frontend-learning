//what is json? - Javascript Object Notation

//creating an object named user
let user = {
    name : 'ragavi',
    age : 22,
    sal : 10000
};

console.log(JSON.stringify(user)); //prints {"name":"ragavi","age":22,"sal":10000} //converts the object to string/JSON and also converts key to string
//to avoid key being string

let user = {"name":"ragavi","age":22,"sal":10000};
console.log(JSON.parse(user)); //parse helps in converting json format string into object format




//Date and Time
let bday = new Date();
console.log(bday); //prints current date and time - 2026-05-10T05:34:57.468Z

let birth = new Date('2003-09-29');
console.log(birth); //prints 2003-09-29T00:00:00.000Z



console.log(birth.getDate()); //gets and prints date alone - getDate is a function - 29
console.log(birth.getDay()); //prints 1 that is monday
console.log(birth.getFullYear()); //prints year alone - 2003
console.log(birth.getMonth()); //prints 8 (because it cnts from 0)


//**Recursion  - a function calls it repeatedly
//These three needed for a basic recursion
//-base case -> when to stop recursion
//-update statement
//-recursive call


//5 => 0+1+2+3+4+5= 15
function fact(n){
    if(n==1){       //base case
        return 1;
    }
    return n * fact(n-1);  //recursive call and //that n-1 is the update statement here
}
console.log(fact(5));




//trivia question
function add(n){
    if(n==0){
        return 0;
    }
    return n+add(n-1);
}
console.log(add(5));