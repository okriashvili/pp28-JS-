// boolean data type, comparison and logica operators

// comparison operators
// >, <, - more or less | 
//  >=, <=, - more-less or equal |
//  ==, ===, - if its equals, 
// !=, !== - not equal 


// lets check in we pass the exam or not
// const barrier = 70
// let testResult = 80
// checking exam result, plus using ternary operator to print the result
// console.log(testResult >= barrier ? "you pass the exam" : "you failed the exam");
// in this case, if testResult is greater than or equal to barrier, 
// then it will print "you pass the exam", 
// otherwise it will print "you failed the exam"



//  ###############
/* logical operators
and - &&, 
or - ||, 
not - !
in and statement all conditions must be true for the whole statement to be true, 
in or statement at least one condition must be true for the whole statement to be true, 
and not operator switches the boolean value of a condition.
keep in mind, and operator has advantage over or operator, 



// // check if we can see the product on the site
// let isAdmin = true
// let isPaid = true
// let isLogged = false
// // also we used ternary operator to print the result, if the user is allowed to see product or not, based on the conditions we set 
// let loadingInfo = isLogged && isAdmin || isPaid 
// console.log(loadingInfo);
// // that expression is wrong, because it compares logged and admin first and the result of that is false, 
// // then it compares false with isPaid, and the result of that is true, so loadingInfo will be true,
// // even if the user isn't logged in

// // that is correct expression, as user must be logged in and he either has to be admin or paid
// // since we put or expression in braces, first system will check if the user is admin or has paid, then it will check if the user is logged in, 
// // and since the user isn't logged in, infoLoading will be false, even if the user is admin or has paid
// let infoLoading = isLogged && (isAdmin || isPaid) 
// let hasPermission = infoLoading ? "you can see the products" : "you cannot see the products";
// // if the user is logged in and either an admin or has paid, then infoLoading will be true, otherwise it will be false
// console.log(hasPermission);




// let isAdmin = true
// let isPaid = false
// let isLoggedin = false
// // !not operator example
// // not operator switeches the boolean value
// console.log(!true); // is false, not true means its false

// // if user is not logged in, then show login screen, otherwise show the content
// showLoginScreen = !isLoggedin;
// console.log(showLoginScreen);   

// // user must be loged in and he should't have paid to see the buy button
// showBuyButton = !(isLoggedin || isPaid);
// console.log(showBuyButton);



/* დაწერეთ პროგრამა, რომელიც მომხმარებელს მოსთხოვს მისი ასაკის შეტანას. უნდა
დაადგინოთ, რომ თუ სრულწლოვანი იქნება alert ფუნქციის დახამრებით გამოუტანოს
შეტყობინება, რომ სრულწლოვანია თუ არა და „არასრულწლოვანია“. */ 
/* write a program that asks the users age, then show the result according to the age, 
if the user is an adult or not, using alert function to show the result on the screen.
instead of using "IF" statements, we use ternary operator to print result. */

// let userAge = prompt("Please enter your age:");
// let isAdult = userAge >= 18 ? "You are an adult" : "You are not an adult";
// console.log(isAdult);


/* type coercion and type conversion, when we trun number into boolean and boolean into number
if we turn boolean into number, true will be 1 and false will be 0,
even though we know that all number except 0 is true, when we turn boolean into number, 
true is 1 by default,
*/

// console.log(Number(true)); // 1

// // even all number except 0 are true, when we compare number with boolean, boolean will be converted to 1, as its by default
// console.log(5 < true); // 0
// // 5 is not less than 1, so result is false


// /* short circuit and type coercion
// short circuit means that in "and" operator if the first condition is false, it will not check the second condition - its called short-circuit evaluation, 
// because if the first condition is false, the whole statement will be false regardless of the second condition, so it saves time by not checking the second condition.

// also, if first condition is true in "or" operator, it will not check the second condition, 
// because if the first condition is true, the whole statement will be true regardless of the second condition, 
// so it also saves time by not checking the second condition. 

// how short circuit works and what happens when we assign numbers instead of boolean into expression */
// // logical opperators doesn't turns non-boolean values into boolean, but they use them as boolean values
// // but if we assign boolean values into number, if will turn them into number and use them as number values

// console.log(true && 5); 
// // returns 5, because first is true and didn't happened short circuit, 
// // and second operand is 5, so it use 5 as boolean vale but during returning the value it didn't turned 5 into true
// console.log(true && 0); 
// // same happened here, but since 0 is false, it returns 0, because short circuit still didn't happened

// // what happenes during short circuit
// console.log(false && 5); 
// // returns false, because first is false, so short circuit happens and it doesn't check second operand
// console.log(false && 0); 

// // same behaviour but with or opperator
// console.log(true || 5); 
// // returns true, because first is true, so short circuit happens and it doesn't check second operand
// console.log(true || 0); 
// // same happened here, but since first is true, it returns true, because short circuit still happened

// console.log(false || 5); 
// // return 5, because first is false, so short circuit doesn't happen and it checks second operand, 
// // and since second operand is 5, it returns 5

// // conclusion, if short circuit happens, it returns the value of the first operand, 
// // otherwise it returns the value of the second operand, 



// /* what happenes if we use numbers instead of booleans, how the behaviour works */
// console.log(5 && 0); 
// // returns 0, because first is 5, which is true, so it checks second operand, and since second operand is 0, it returns 0
// // shortly it works exacty the same, but insead if returning the boolean vaue, it returns number, as we know during type coercion, 
// // it doesn't turns number into boolean, but uses as boolean value


// next conditional statements and ternary operator