//map is same like object (stores in the form of key-value pair), but there is a small difference 

let map = new Map();

console.log(map);   //prints Map(0) {}
console.log(typeof(map)); //prints object


//inserting a data in a map - there is a function to insert it - known as set
map.set(1,'icecream');
map.set(2,'choco')
.set(3,'undefined'); //without writing map and removing semicolon before we can write like this
console.log(map);     //Map(3) { 1 => 'icecream', 2 => 'choco', 3 => 'undefined' }


//reading data in it - use 'get' method
console.log(map.get(2)); //2 is key here  - prints choco

//to check whether it is in map or not - 'has' method
console.log(map.has(2));  //prints true because it is there

//deleting from the map
map.delete(2);  //deletes choco
console.log(map);  //prints - Map(2) { 1 => 'icecream', 3 => 'undefined' }


//to delete the complete map
map.clear();
console.log(map);  //prints Map(0) {}


//finding the size of the map
console.log(map.size);  //prints 0 - size is a property not a method , so dont write like ()this


 

let map = new Map();
map.set(1,'tamil')
.set(2,'eng')
.set(3,'maths')
.set(4,'social')
.set(5,'science')

console.log(map);
/* prints -> Map(5) {
  1 => 'tamil',
  2 => 'eng',
  3 => 'maths',
  4 => 'social',
  5 => 'science'
}
 */

//iterating the map using 'of' operator
for(key of map.keys()){ //map.keys is a method which prints keys alone
    console.log(key);   //prints 1 2 3 4 5 
}

for(key of map.values()){ //map.keys is a method which prints values alone
    console.log(key);   //prints tamil english maths science social 
}


//to iterate toatal entries
for(key of map){
    console.log(map);
}



//Set - with unique values (similiar to map)
// -In set , we cant add duplicates to it

let set = new Set();

console.log(set); //Set(0) {}
console.log(typeof(set)); //object


//adding data in set
set.add('tamil')
.add('eng')
.add('mat')
.add ('mat')
.add(1) //can add any dt not only string

console.log(set);  // still prints Set(3) { 'tamil', 'eng', 'mat' ,1 } - single mat but i added two mat. Because set takes unique elememts

set.delete(1);
console.log(set);  //Set(3) { 'tamil', 'eng', 'mat' }


console.log(set.has('tamil')); //true

console.log(set.size);//3
console.log(set.clear);


for (s of set){
    console.log(s);
}