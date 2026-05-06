//3rd data type

let content = "This is ragavi";  //note - we can use single quotes also
console.log(content);  //prints this is ragavi
console.log(typeof content);  //prints string

let dialogue = "she said 'I am an angel'";
console.log(dialogue);   //she said 'I am an angel'

//using double tick
let para = `this is batman's movie. And the hero said "I am playing the character of batman`;
console.log(para);
//inside double tick we can use both single and double quotes


//- inside double tick, embedding will happen like 2+1=3
//eg
let expression = `1+2 = ${1+2}`; //prints 3 and also syntax to make this is ${}
console.log(expression);  //prints 1+2 = 3


//practice
let name = 'Ragavi';
let statement = `My name is ${name}`;   //prints my name is ragavi
console.log(statement);