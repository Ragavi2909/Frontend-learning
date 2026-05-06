let isAdult;
let age = 18;
if(age >= 18){
    isAdult = true;
}
else{
    isAdult = false;
}



if(true){          //always runs - known as truthstatement
    isAdult = true;
}
console.log(isAdult);


let person;
let age = 10;
if(age > 18){
    person = 'Adult';
}
else if (age <18 && age>15){
    person = 'teenager';
}
else{
    person='child';
}

console.log(person);



//**conditional operator
let person;
let age = 10;

person = (age>18)? 'Adult':'Child';  //like if-else
console.log(person); //prints child

person = (age>18)? 'Adult' : (age>12)? 'Teenager':'Child'; //like if-elseif-else
console.log(person); //prints child
