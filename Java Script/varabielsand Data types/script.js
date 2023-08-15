var score=35;
var score=56;
console.log(score);//var can be redeclared and reassigned

let sc=56;
//let sc=52; let can not be redeclared
sc=23;
console.log(sc);

const sc1=23;
//sc1=56
//const can neither be redeclared nor be reassigned
console.log(sc1);


// strings

let firstName="Manish";
let lastName="Jha";
console.log(firstName,lastName);
let fullName=firstName+lastName;
console.log(fullName);
let fullName1= `full name is ${firstName} ${lastName}`;
console.log(fullName1);

//getting string character
console.log(firstName[3]);

//string Methods

console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());
console.log(firstName.indexOf("n"));

let hobbies= "     coding           reading     traveling    "
let result=hobbies.trim();
console.log(hobbies);
console.log(result);//trim remove the space from starting and end but not from between the words
console.log(result.indexOf("ding"));
console.log(result.lastIndexOf("ding"));


let string="wowprogrammer";
console.log(string.slice(2,7));//exclude 7

let favrtColor="Red,Black,Green,blue";
let arrColor=favrtColor.split(",");
console.log(arrColor);
console.log(arrColor[3]);

