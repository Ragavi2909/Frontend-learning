//1.print the given number is positive, negative or zero
let givenNum = 0;
let number;
if(givenNum > 0){
    number = 'positive';
}
else if(givenNum < 0){
    number = 'negative';
}
else{
    number = 'zero';
}
console.log(number);


//2.given year is leap year or not
let year = 2003;
if((year%4==0 && year%100!=0) || (year%400==0)){
    console.log("leap year");
}
else{
    console.log("not a leap year");
}