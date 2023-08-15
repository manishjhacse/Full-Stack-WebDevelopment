let dishes=["chicken","paneer","rice","desert"];
console.log(dishes);
console.log(dishes[3]);
dishes[2]="bread";
console.log(dishes);


console.log(dishes.join(" and "));

console.log(dishes.indexOf("bread"));

let dishes2=["maggie","rolls"];
console.log(dishes.concat(dishes2));
console.log(dishes.length);

let updatedDishes=dishes.concat(dishes2);
console.log(updatedDishes);
console.log(updatedDishes.length);
console.log(updatedDishes.push("chicken roll"));//this return the value of new array length
console.log(updatedDishes);
console.log(updatedDishes.pop());//this return the last element of array and pop it from array
console.log(updatedDishes);

