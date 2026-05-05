//second dt in js [BIGINT]
//for large numbers we use bigInt => 2^53-1 = 9007199254740991
//NOTE => runs on modern browser , exception -> not on internet explorer

console.log(9007199254740991 + 1); //gives correct ans
console.log(9007199254740991 + 2); //wrong
console.log(9007199254740991 + 3); //correct

//that's the reason bigint plays a role =>  add n at last  
let val = 9007199254740991n;
console.log(val + 1n); //crct
console.log(val + 2n); //crct
console.log(val + 3n); //crct

console.log(typeof val); //prints bigInt
