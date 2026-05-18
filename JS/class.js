let user = {         //this is object
    name : "Rags",
    age : 23,
    display : function(){

    }
};

//-classname starts with uppercase
class User {
    name = "rags";
    age = 23;
    // display(){    //can write methods
    //     console.log('name: ',this.name);
    //     console.log('age :' ,this.age);
    // }
}

//Creating an object for a class
let Rags = new User();
console.log(Rags);  //prints User { name: 'rags', age: 23 }
console.log(typeof(Rags)); //prints object




//can create a constructor for the objects
class User{

    constructor(name, age){
        this.name = name;
        this.age = age; 
    }

    display(){
        console.log('Name: ',this.name);
        console.log('Age: ',this.age);
    }
};

let rags = new User('rags',23);
rags.display();

//prints 
// Name:  rags
// Age:  23




//can create a constructor for the objects
class User{
    #name;

    constructor(name, age){
        this.#name = name;
        this.age = age; 
    }

    display(){
        console.log('Name: ',this.#name);
        console.log('Age: ',this.age);
    }


//to access that , here we need to use getter method
    get name(){
        return this.#name;
    }

//setter method - for understanding here not used
    set name(name){
        if(name == 'code io'){
            this.#name = name;
        }else{
             this.#name = name;
        }  
    }
}

let rags = new User('rags',23);
console.log(rags.age); //prints 23 , it is accessible by anyone . To avoid that , we are using private (using # symbol)

console.log(rags.this.#name); //now it prints rags
