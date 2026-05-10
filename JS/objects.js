//declaring an object - without class we can declare an object in js
let x;
console.log(x); //prints undefined


//declaring and initializing an object
let x = {};
console.log(typeof(x));  //prints object






let car = {   //here car is an object
    //prperties are in "key value" pair
    name : 'Nexon',
    brand : 'Tata',
    driveTrain : 'petrol, diesel, ev',
    price : 15
};
console.log(car); 
// //prints {
//   name: 'Nexon',
//   brand: 'Tata',
//   driveTrain: 'petrol, diesel, ev',
//   price: 15
// }
console.log(car.name); //prints (value alone)
delete car.price; //deletes price property
car['modelyear'] = 2020;
car['brand'] = 'honda'; //car object with brand updated to honda
console.log(car);  //price prop removed and prints remaining







let car = {   //here car is an object
    //properties are in "key value" pair
    name : 'Nexon',
    brand : 'Tata',
    driveTrain : 'petrol, diesel, ev',
    price : 15,
    //we can use function in the object
    onRoadPrice(){
         return this.price + 2; //this means -> take this object's price
    }
};
console.log(car.onRoadPrice()); //prints 17
console.log(car); 



//trivia question
let user = {
    name : 'Ragavi',
}
console.log(user['name'] = 'RagaviR');
delete user.name;
console.log(user);
