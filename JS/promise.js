// //Eg for promise
// isHalwaThere = false;

// function waitInQueue(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(isHalwaThere){
//                 resolve('Buy 1/2 kg Halwa');
//             }
//             else{
//                 reject('Halwa finish');
//             }
//         }, 1000);
//     });
// }

// function buyHalwa(){
//     waitInQueue().then((message)=>{
//         console.log(message);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
//     .finally(()=>{
//         console.log('Go home');
//     })
// }

// buyHalwa(); //prints Halwa finish and Go home
// console.log('Halwa wala'); //now it prints Halwa wala, Halwa finish, Go time . The order of execution changes because during the waiting time, this line will executes



























//concept of async await => this concept is used to store the result of promise in a variable
isHalwaThere = true;

function waitInQueue(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isHalwaThere){
                resolve('Buy 1/2 kg Halwa');
            }
            else{
                reject('Halwa finish');
            }
        }, 1000);
    });
}

async function buyHalwa(){
    try{
        let result = await waitInQueue();
        console.log(result);
    }
    catch(error){
        console.log('Halwa over');
    }
    
}

buyHalwa();   //prints Buy 1/2 kg Halwa
