// npm - node package managar
// allows us to import other developers code to use in our project

// npm is CLI tool, so we can work with it from terminal.
// same as we can download the app from appstore, 
// npm allows us to download other developers code, 
// which we call packages, but first we have to install it from terminal > npm init


// when we install the npm package it created new key:value in our object 
// dependancies means that our code is depend on that code,
// and it created new folder called node_modules, where is saved our download code



import isOdd from "is-odd";
// if we open the node_modules folder we'll see two package,  
// is-number and is-odd. but we haven't downloaded the is-number
// beacuse the id-odd oackage is depend on in-number, npm automatically download the is-number package as well
import isNumber from "is-number";

// console.log(isNumber('1'));
console.log(`is number? ${isNumber(6)}`);


let num = 6;
console.log(`is number 3 odd? ${isOdd(num)}`);
console.log(`is number ${num} even? ${!(isOdd(num))}`);


// npm uninstall npmName - deletes the package
// npm ls - displays the installed packages
// npm ourdated - returns if any package need the update
// if not need, it doesn't returns anything





