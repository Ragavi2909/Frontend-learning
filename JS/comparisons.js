//note - comparisons return boolean value
//1.FOR NUMBER DT
//< - less than
let a = 10;
let b = 12;
console.log(a<b); //prints true


// > - greater than
// >= - greater than or equal to
// <= - less than or equal to
// == - checks equal or not
// != - checks not equal or not



//2.FOR STRING DT
let x = 'ragavi'; //compares by letter's unicode known like ascii value g<k 
let y = 'raksavi';
let res = x > y;
console.log(res); //false

//unicode starts with caps values followed by notcaps values  (so value of caps < value of not caps)



//3.comparing string and number
//-if string compares with number, string converts to number then compare
//-if boolean compares with number, boolean converts to num than compares




//1.inconsistency in js
//*convert to boolean and check return false
let q = '0';
q = Boolean(q); 
let g = 0;
g = Boolean(g);
console.log(q,g); //true false
console.log(q==g); //false

//but direct check returns true
console.log('0'==0); //true=>string convert to num and equals so true //here type conversions happens automatically


//strict equality
console.log('0'=== 0); //here type conversion not happens , === checks with the same dt //return false


//2.null and undefined
console.log(null == undefined); //always true
console.log(null === undefined); //both are different dt and return false always if we use ===
console.log(null > 0);  //false -> null converts 0 in number here
console.log(null <= 0); //true  -> null converts 0 here
console.log(null < 0);  //false  -> null converts 0 here
console.log(null == 0);  //return false (inconsistency)


console.log(undefined > 0); //false -> undefined converts in number as NAN
console.log(undefined <= 0); //false -> undefined converts in number as NAN
console.log(undefined == 0);  //false -> undefined converts in number as NAN , so false

 