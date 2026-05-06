//logical ops in js -> there are 4 types
//AND, OR, NOT, NULL coalescing

//truth table for or operator
//A        B         OP
// --------------------------
// 1       1          1
// 1       0          1
// 0       1          1
// 0       0          0

//truth table for AND operator
//A        B         OP
// --------------------------
// 1       1          1
// 1       0          0
// 0       1          0
// 0       0          0



//truth table for NOT
// 0 ------> 1
// 1 ------> 0

//for AND and OR , it returns input value
//for NOT, it return either true or false
console.log(1 && 21); //prints 21
console.log(21 && 1); //prints 1
console.log(0 && 21); //here short circuit -> if zero comes it stops  => here op is 0
console.log(0 || 21); //prints 21 -> known as "short circuit", because when the first is 0 , it goes second, else returns first itself
console.log(15 || 21); //prints 15


//important
console.log(!0); //prints true
console.log(!1); //prints false







//NULL coalescing -> represented as ??
let age;
let curr_age = age ?? 19;
console.log(curr_age); //prints 19

//NOTE - if age is undefined or null or nothing , then it takes the value after ?? , otherwise it takes the value of assigned to age and it will be the current age

//trivia question
console.log(0 || null || undefined);  //prints undefined