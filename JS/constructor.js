// //constructor and new keyword
// //-constructor is also a function
// //-constructor name starts with capital letter
// //-use this keyword

// let user ={
//     name : 'ragavi',
// };
// //like the above we are writing in form of constructor - we can call a function for creating an object instead of writing each and every time
// function User(a){
//     this.name = a;
//     this.age = function(){
//         return 23;
//     }
// }

// let ragavi = new User('ragavi'); //new keyword is used to call a constructor we need to write it before
// let rajesh = new User('rajesh');
// console.log(ragavi, rajesh); //prints - User { name: 'ragavi' } User { name: 'rajesh' }
// console.log(ragavi.age(), rajesh); //prints - 23 User { name: 'rajesh', age: [Function (anonymous)] }




// trivia question
function Add(){
    this.a = 5;
    this.b = 10;
    this.add = function(c){
        return this.a+this.b+c;
    }
}

let sum = new Add();
console.log(sum.add(4));