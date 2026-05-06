//jump statements -> break (comes out of loop after that particular condition) and continue(Skips the particular condition)

//switch
let n = 3;

switch(n){
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three'); //if n==3 out of the switch case
        break;
    default:
        console.log('number greater than 3');
}

