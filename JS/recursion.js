//what is json? - Javascript Object Notation


//creating an object named user
let user = {
    name : 'ragavi',
    age : 22,
    sal : 10000
};

console.log(JSON.stringify(user)); //prints {"name":"ragavi","age":22,"sal":10000} //converts the object to string/JSON and also converts key to string
//to avoid key being string
console.log(JSON.parse(user));





