//Implicit type conversion - js engine itself converts the dt
let age = 23;
console.log(age);

console.log('2'/'2'); //prints 1 ->given as string but performed operation ->implicit
console.log('2'*'2'); //prints 4 -> given as string but performed operation ->implicit
console.log('2'-'2'); //prints 0 ->given as string but performed operation ->implicit
console.log('2'+'2'); //prints 22 ->given as string but performed diff operation ->not an implicit => here happens conatenation instead of additionn


//explicit type conversion
let myAge = 23;
console.log(typeof myAge); //prints number
myAge = String(myAge);
console.log(typeof myAge); //prints string


let isAdult = true;
console.log(typeof isAdult); //prints boolean
isAdult = String(isAdult);
console.log(typeof isAdult); //prints string


//note -> in conversions value dont change but dt alone change




//String to Number type conversion
let num = '23';
console.log(typeof num);
// let totNum = num+3;  //prints 233 but i want 26
num = Number(num); //convert to number
console.log(num+3);  //prints 26




//NOTE:-
//when conversions fail and given NaN?
//-when the string is 'false' or 'true '
//-when the string is '123ggh' (number with characters)
//-if it gives without string format , alone false or true , it gives 0 and 1 respectively
//undefined = NAN



//Boolean conversion
//*if it is a value , all ok 
let x = 1;
console.log(typeof x); //prints number
x = Boolean(x);
console.log(typeof x);  //prints boolean
console.log(x);  //true

//*if it is a string and it is true 
let y = 'true';
console.log(typeof y); //prints string
y = Boolean(y);
console.log(typeof y); //prints boolean
console.log(y); //prints true;

//*if it is a string and it is false
let z = 'false';
console.log(typeof z); //string
z = Boolean(z);
console.log(typeof z); //boolean
console.log(z);  //prints true - instead of false , if it is a string like string with space and nothing inside ' ' =>prints true


//*if it is ''  or undefined then the value will be false 
let r = undefined;
console.log(typeof r); //string //if undefined -> then undefined
r = Boolean(r);
console.log(typeof r); //boolean
console.log(r); //prints false



