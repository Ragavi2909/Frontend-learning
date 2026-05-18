//INHERITANCE
class Animal{  //parent class known as super class
    legs;
    tail;

    constructor(legs,tail){
        this.legs = legs;
        this.tail = tail;
    }

    display(){
        console.log(this.legs);
        console.log(this.tail);
    }
}


class Human extends Animal{   //human is child class
    nationality;

    constructor(legs,tail,nationality){
        //legs and tail are parent class things , so first call parent using "super"
        super(legs, tail);
        // this.legs = legs; //so we are commenting it out
        // this.tail = tail;
        this.nationality = nationality;
    }
}

// let anime = new Animal(2,false);
// anime.display(); //prints 2 and false


// let rags = new Human();
// console.log(rags);  //prints : Human { legs: undefined, tail: undefined, nationality: undefined }


// let rags = new Human(3, true);
// console.log(rags);  //prints : Human { legs: 3, tail: true, nationality: undefined }


// let rags = new Human(3, true,'Indian'); //now it gives error and says call super constructor
// console.log(rags);


let rags = new Human(3, true,'Indian'); //now it gives the op as => Human { legs: 3, tail: true, nationality: 'Indian' }
console.log(rags);

















//IOVERRIDING - child's method works over parent's method
class Animal{  //parent class known as super class
    legs;
    tail;

    constructor(legs,tail){
        this.legs = legs;
        this.tail = tail;
    }

    display(){
        console.log(this.legs);
        console.log(this.tail);
    }
}


class Human extends Animal{   //human is child class
    nationality;

    constructor(legs,tail,nationality){
        //legs and tail are parent class things , so first call parent using "super"
        super(legs, tail);
        this.nationality = nationality;
    }

    // display(){
    //     console.log(this.legs);
    //     console.log(this.tail);
    //     console.log(this.nationality);
    // }
}

// let anime = new Animal(2,false);
// anime.display(); //prints 2 and false


// let rags = new Human();
// console.log(rags);  //prints : Human { legs: undefined, tail: undefined, nationality: undefined }


// let rags = new Human(3, true);
// console.log(rags);  //prints : Human { legs: 3, tail: true, nationality: undefined }


// let rags = new Human(3, true,'Indian'); //now it gives error and says call super constructor
// console.log(rags);


let rags = new Human(3, true,'Indian'); 
rags.display();  //prints 3 true Indian (one by one) -if not commented out
 
//if i comment the diaplay method in Human class , the animal class's display output is printed => 3 true



