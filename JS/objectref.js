//in operator -> returns true or false
let user = {
    name : 'Ragavi',
    age : 22,
};
console.log(user.dob); //prints undefined
console.log('age' in user); //prints true if present
console.log('dob' in user); //prints false if not present



//**using in operator to access all the pros in object without loop - like loop
let cnt = 0
for(key in user){   //user in key => syntax: (user in objectname)
    console.log(key + ":" + user[key]); //prints name : ragavi and age:22
    cnt += 1;
}
console.log(cnt); //prints 2





reference concept
let a = 5;
let b = a;
console.log(a, b); //prints 5 5
b = 10;
console.log(a, b); //prints 5 10

//like that - lets see for object
let x = {
    name : 'Ragavi',
    age : 22,
};
let y = x;
console.log(x,y); //prints - { name: 'Ragavi', age: 22 } { name: 'Ragavi', age: 22 }
y = {} //empty object
console.log(x,y); // prints - { name: 'Ragavi', age: 22 } {}


y.age = 30;
console.log(x,y); //prints - { name: 'Ragavi', age: 30 } { name: 'Ragavi', age: 30 }

//basically what is happening here is, the x and y are referring to the same object, so if we change y'value - xchanges and vice versa





//using const
const a = {              //this constant a is considered as a single variable . so , we cant change completely but we can still change individual props
    name : 'ragsvi',
    age: 20,
};
//a = {}; //error but to complete modification of an object a
a.name = 'rag';
console.log(a);  //prints - { name: 'rag', age: 20 }







//garbage value => the unused meemory will be removed
let a = {
    name : 'Ragvi',
    age : 22,
};
console.log(a); //prints complete a with props
a = null;
console.log(a); //will be null - becomes garbage value



//trivia question
let a = {
    name: 'ara',
};
let b = a;
console.log(a);
a = {};
console.log(b); // b already has an copy of a, so be will be name: ara and not {}

