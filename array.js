const furits=['banana','mango','apple'];

console.log(furits);

//furits=[]// not possible reassignment, due to const declaration

furits.unshift("strawberry"); // added to the starting of array

console.log(furits);

furits.push('watermelon');// added to the last in the array



console.log(furits);

console.log(furits.pop());// delete the last element of the array.

console.log(furits);

console.log(Array.isArray(furits));// return if the array otherwise false

console.log(furits.indexOf('watermelon'));//return the index of given element present in the array



console.log(furits.length);//return the size of an array

let z=furits.join(" ");// join the all array elemnt bydefault with commaseoearatd

//into the string, if not any paramter pass in join.

console.log(z);

console.log(typeof z);