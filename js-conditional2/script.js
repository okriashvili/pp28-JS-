// // ternary and conditional statements in JS

// // ternary opperator in JS
// let age = 18;
// let canDrive = age >= 18 ? "Yes, you can drive" : "No, you cannot drive";
// console.log(canDrive);  
// // if can drive is true then it will print whats after ?- the first answer, otherwise it will print whats after : (second answer)"
// // if ternary operator is true, it returns the first value, otherwise it returns the second value
// // and we can nest ternaty operators, but it can make code hard to read, so its better to avoid nesting ternary operators,

// isAdmin = true  

// // in this case, if isAdmin is true, then discount will be 0.2, if isAdmin is false but isPaid is true, then discount will be 0.1, otherwise it will be 0.
// discount = isAdmin ? 0.2 : 0;
// console.log(discount);


// // let calculate the shipping fee according to the customer distance
// let distance = 15; // in kilometers
// let shippingCost = distance <= 20 ? 10 : 20
// console.log("shippin cost is:",shippingCost);




// conditional statements in JS
// if/else statement
// syntax - it starts with "if" keyword, then we nust assing some sort condition in braces, it mustnot be empty
// if (condition) then its followed curly braces {}, inside the braces we write the code 
// that we want to execute 
userIsAdmin = true;
userIsLoggin = false;
userPay = false;
const listOfProducts = !userPay && (userIsAdmin || userIsLoggin);
if(listOfProducts){
    console.log('shoes, sweater, T-SHIRT');
}
//it checked expression, value and showed us list, first it checked all 3 values and determined its true,
//as we know when 'if' is true it shows us our value, when 'if' isn't true it didn't shows us anything.
//when 'if' is false it didn't shows us value, until we use "else" statement, which we use in next expamle
userIsAdmin = true;
userIsLoggin = false;
userPay = true;
const showButton = userPay && (userIsAdmin || userIsLoggin) ;
if(showButton){
    console.log('look for other product')
}else{console.log('paynow')}; // else statment must after curly braces of if statement, 
// and it must be followed by curly braces.
// else statement is executed when "if" statement is false


console.log("end of program");
// we can't create variable inside "if" statement and use it outside of "if" statement, 
// because of block scope, we can only use variable inside the block where it was created, 
// if we want to use variable outside of block we need to declare it outside of block, 
// and then assign value inside of block, like in example below
let age = 18;
// message = "";
if (age >=18){
    var message = "you are an adult";
    // console.log(message);
}else {
    var message = "you are a minor";
    // console.log(message);
}
console.log(message);

// console.log(message); // this will give us an error, because message variable is created inside of "if" block
// or we can create variable outside of "if" block, before creating it

// but there is catch, if we use "var" keyword to create variable inside of "if" block, 
// then we can use it outside of "if" block, because "var" has function scope, not block scope, 
// but its not recommended to use "var" keyword, because it can lead to bugs and unexpected behavior,
//  its better to use "let" or "const" keyword to declare variable,
//  because they have block scope, and they are more predictable.
// var x = 2;
// {
//     let x = 10;
//     console.log(x);
// }
// console.log(x);



// let create if/else statement and create discount for users according to their status
// we can use "else if" statement to check multiple conditions, and execute different code for each condition,
// we can give condition to else if statement but not else statement, because else statement is executed when all previous conditions are false.
let userEmploye = true;
let userStudent = true;
let userVeteran = false;
let discount = 0;
if(userEmploye) {
    discount = 45;
} else if (userEmploye) {
    discount = 25;
} else if (userStudent) {
    discount = 15;
}else if (userVeteran) {
    dicsount = 20;
}  else {
    discount = 0;
}
console.log("your discount is:", discount);


// we can nest as much else if statements as we want.
// else if statements has same syntaxt as if statement, but it must be after if statement, and before else statement, 
// and it must be followed by curly braces, and it can have condition inside of parentheses.


// homework about conditional statements in JS
/* დაწერეთ პროგრამა, რომელიც მომხმარებელს მოსთხოვს მისი ასაკის შეტანას. უნდა
დაადგინოთ, რომ თუ სრულწლოვანი იქნება alert ფუნქციის დახამრებით გამოუტანოს
შეტყობინება, რომ სრულწლოვანია თუ არა და „არასრულწლოვანია“.
ასევე მოახდინეთ შემდეგი მაგალითის შედეგის გამოტანა საიტზე:
(true && (false || true)) || ( ((5 > 7) && (6 == 6)) || (true && true )) */ 
// let userAge = prompt("Please enter your age:");
// if (userAge >= 18) {
//     console.log("you are an adult");
// } else { 
//     console.log("you aren't an adult");
// };

// 2nd - (true && (false || true)) || ( ((5 > 7) && (6 == 6)) || (true && true )) 
let result1 = (true && (false || true)) || ( ((5 > 7) && (6 == 6)) || (true && true ));
let result2 = "result1 is: true";
console.log(result1);
