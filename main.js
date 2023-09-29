"use strict";
// Variables
const person = "Óli"; //string datatype
const age = 26; //number datatype
const bool = true; //boolean datatype
// Arithmetic operations
const num1 = 10;
const num2 = 18;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
// String concatenations
const str1 = "Hello";
const str2 = " ";
const str3 = "World";
const result = str1 + str2 + str3;
console.log(result);
// Array
const list = ["Hello", "World", "This", "Is", "Typescript"]; //Array with multiple values
console.log(list[4]); // Displays Typescript to the console
console.log(list.length); // Logs the number of items in the array
// Object
const people = {
    firstName: "Halldór",
    lastName: "Halldórsson",
    age: 30
};
delete people.age; // Removes the age object, i get an error but for some reason it still works
console.log(people); // Outputs the first and last name into the console
console.log(people["lastName"]); // Outputs the last name into the console
// Math method
console.log(num1 + Math.PI); // Returns 13.141......
console.log(num2 + Math.cos(15)); // Returns 17.240......
// Date and time
console.log(Date()); // Outputs current date and time  
// If statement
let discount;
let itemCount = 8; // Change this number for a different outcome
if (itemCount > 0 && itemCount <= 5) { // If you have 1-5 items, 5% discount
    discount = 5;
}
else if (itemCount > 5 && itemCount <= 10) { // If you have 5-10 items, 10% discount
    discount = 10;
}
else {
    discount = 15; // If you have more then 10 items, 15% discount
}
console.log(`You got ${discount}% discount. `); // Outputs "You got 10% discount"
// console.log("Hello world");
// const myDiv = document.querySelector("div");
// const myButton = document.querySelector("button");
// if(myDiv !== null){
//     myDiv.innerHTML = "Hello world"
// }
// //Datatypes 
// const text:string = "Hello ";
// const number:number = 123;
// const bool:boolean = true;
// const greeting:string = text + "world" + number;
// const arithmetic:number = number - 2;
// // if(myButton !== null && myDiv !== null){
// //     myButton.addEventListener('click', () => {
// //         myDiv.innerHTML = arithmetic.toString();
// //     });
// // }
// //Array/list datatype
// const manyText:string[] = ["Hello", "World", "Foo", "Bar"];
// console.log(manyText);
// console.log(arithmetic);
// type productType = {title:string, pictureURL:string, price:number}
// const product : productType = {
//     title: "My Title",
//     pictureURL: 'https://picsum.photos/200/300',
//     price: 123
// }
// if(myButton !== null && myDiv !== null){
//     myButton.addEventListener('click', () => {
//         myDiv.innerHTML = `<img src="${product.pictureURL}" />`;
//     });
// }
