//Arrays - list of values - here an array have different dt

//array declaration and initialization in different ways
let veggies = new Array(); //or let veggies = []; (or) //let veggies = ['tomato','potato','brinjal'];
console.log(typeof(veggies)); //prints object


veggies = ['tomato','potato','brinjal'];
console.log(veggies);  //prints ['tomato','potato','brinjal']

//0 based indexing
console.log(veggies[0]); //prints tomato that is first element


//here an array have different dt - here is an example
let fruits = ['apple','pear','banana', null, undefined, true]; //we can store objects and functions inside 
console.log(fruits[4]); //prints undefined


let fruits = ['apple','pear','banana'];
fruits[3] = 'strawberry'; //adds strawberry in fruits


fruits.push('strawberry'); //same like above
console.log(fruits); //prints [ 'apple', 'pear', 'banana', 'strawberry', 'strawberry' ]


fruits.unshift('jamun'); //unshift adds element at the first
console.log(fruits);  //prints [ 'jamun', 'apple', 'pear', 'banana', 'strawberry', 'strawberry' ]


fruits.pop(); //pops the last element
console.log(fruits); //prints [ 'jamun', 'apple', 'pear', 'banana', 'strawberry' ]


fruits.shift(); //removes the first element
console.log(fruits); //prints  [ 'apple', 'pear', 'banana', 'strawberry' ]



//to access all element at once in an array
for(fru of fruits){
    console.log(fru);
}
/* prints like this => apple
pear
banana
strawberry */



//to find the length of an array
console.log(fruits.length); //prints 4 here


//we can also like this
let animals = new Array('cat','dog','cow');
console.log(animals); //prints [ 'cat', 'dog', 'cow' ]



//2-dimensional array => Matrix
let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(mat); //prints [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

