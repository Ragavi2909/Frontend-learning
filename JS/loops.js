//loops/iterations
//while(entry controlled loop), do-while(exit control loop), for loop (3 types)
//loop needs - initialization, validation, updation




//1.while loop
//printing from 1 to 10
let num = 1; 
while(num <= 10){ //runs until the condition the true
    console.log(num);
    num++;
}
console.log('out of loop');




//2.do-while loop  (atleast runs 1 time)
num = 1; 
do{ //runs until the condition the true
    console.log(num);                       //prints
    num++;
}while(num<=10);                            //then checks condition
console.log('out of loop');





//3.for loop (if we know fixed no of loops)
for(let num = 1;num <= 10 ;num++){
    console.log(num);
}