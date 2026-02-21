// // Math function module in JS

// // we give two values to pow() function, 
// // first is the number, second is power, and it returns the value of first power of second  
// powNumber = Math.pow(2, 3)
// // in our case 2power of 3 which is 2*2*2
// console.log(powNumber)

// // same works Math.sqrt()square root but itss oposite of pow and it takes only one argument unlike pow
// console.log(Math.sqrt(25))
// // Math.PI is returning pi value in math which is 3.14... and so
// // console.log(Math.PI)

// Math.abs - turns every negative into positive 
// if its -1 turns 1, 
// -101 turns 101 and so on, but didn't turns positive into negative 
// console.log(Math.abs(-123))

// Math.random() generates random number between 0 and 1. 
// console.log(Math.random())
// can use for loop to generate many random number 
// for (i = 0; i < 10; i++) {
//     console.log((Math.random() * 100).toFixed(1)) 
// // toFixed() round the value, default its zero and rounds on whole number, 
// // but it takes a parameter and it will round the value according the parameter
// }

// If we want to round value we can also use round(), floor() methods
// num1 = 100.82
// console.log(Math.floor(num1))
// // floor() takes value as parameter, and it rounds the number on the down to nearest integer
// // if value is 10.9 its round to 10 and not 11


// num2 = 100.5
// console.log(Math.round(num2))
// // same as floor, round() takes value as parameter but it rounds on the nearest int,
// //  if the integer is .4 it rounds to down, but if its o.5 of more it rounds up

// toLocaleString - it seperates number by coma, to make read it easier 
// bigNum = 100000000;
// console.log(bigNum.toLocaleString())





// string functions in JS
// methods to work with strings
// trim() - will removes spaces before and after of strings, not in the middle
// trimStr = "      Hello world     "

// trimEnd() - removes extra spaces at the end of string 
// console.log(trimStr.trim())

// trimStart() - removes extra spaces at the start
// console.log(trimStr.trimStart())



// // touppercase() - turns every alphabet into CAPITAL 
// sentece = "hello world"
// console.log(sentece.toUpperCase())

// // toLowerCase() - turns every alphabet into lower char 
// sentece2 = "HELLO WORLD"
// console.log(sentece2.toLowerCase())


// length() - count charactes into string, but it cound empty space as 1 char
// it returns the number, amount of chars and it don't need to call like regular functions 
// longWord = "Hello world from script.js"
// console.log(longWord.length)


// chatAt() - takes int as parameter and returns at that index which charachet is
// console.log(longWord.charAt(1))

// endsWith() - takes str as parameter and returns true/false, it the sentence ends with the strs gives as value it returns true, otherwise false
// console.log(longWord.endsWith(".js")) // true - last 2 out of 3 chars is ".j" but last one is "s", so it doesn't count 
// console.log(longWord.endsWith(".j")) // false

// startsWith() - works same as endsWith but returns if the sentence starts with given value
// console.log(longWord.startsWith("he")) // false - it startswith he, but h is in capital so it doesn't counts lower one
// console.log(longWord.startsWith("He")) // true

// includes() - returns if string contains given value. works
// console.log(longWord.includes(" "))


// uniting two string
// word1 = 'Hello'
// word2 = 'word'
// // console.log(word2.concat(word1))
// // console.log(word1 + word2)
// concutStr = word1 + " " + word2
// console.log(concutStr)


// subString - cuts some strings from value and returns cuted str
// it takes range of index, and it will cut str given range 
// let str = "Hello world";
// subStr = str.substring(0, 4);
// console.log(subStr)




// if statement switch and 

// let password = "1234567"
// if (password.length < 6) {
//     console.log("password must contain at least 6 alphabet")
// }else{
//     console.log("welcone to page")
// }


// // switch classwork - switch inside of if statement
// let eighteen = 18
// permission = window.prompt("Enter Yes or No to give us permission: ").toUpperCase()
// if (permission == 'YES') {
//     switch(eighteen) {
//     case 6:
//         document.write("Wrong");
//         break;

//     case 18:
//         document.write("correct");
//         break; 

//     default:
//         document.write("invalid input")    
//     }
// }else(document.write("you don't have permission"))

// switch(operation) {
//     case "+":
//         document.write(num1 + num2);
//         break;

//     case "-":
//         document.write(num1 - num2);
//         break;


//     case "/":
//         document.write(num1 / num2); 
//         break;

//     case "*":
//         document.write(num1 * num2);
//         break;

//     default:
//         document.write("არასოწრი მონაცემები")
// }



// calculator
// let num1 = Number(window.prompt("შეიყვანეთ ციფრი"))
// let num2 = Number(window.prompt("შეიყვანეთ ციფრი"))

// let operation = window.prompt("შეიყვანეთ მათემატიკური მოქმედება(+, -, /, *)")

// if (operation == '+') {
//     window.alert(num1 + num2)

// }else if(operation == '-') {
//     document.write(num1 - num2)
// } else if(operation == '/') {
//     document.write(num1 / num2)
// }else if (operation == '*') {
//     document.write(num1 * num2)
// }else{document.write("აირჩიეთ ფრჩხილებში მოცემული მოქმედება")}


// // build calculator using switch
// let num1 = Number(window.prompt("შეიყვანეთ ციფრი"))
// let num2 = Number(window.prompt("შეიყვანეთ ციფრი"))

// let operation = window.prompt("შეიყვანეთ მათემატიკური მოქმედება(+, -, /, *)")

// i = 0;
// while (i <= 100) {
//     if (i % 2 == 0) {
//         document.write("<h1 style=color:blue>" + `even numbers are ${i}` + "</h1>");
//     }else if ( i % 2 == 1) {
//         document.write("<h1 style=color:red>" +  `odd numbers are ${i}` + "</h1>");
//     }
//     i++;
// }



// do loop in JS
// do loops works almost like while, but first we write the the code to execute, and astly we write the condition
// we use while loops for condition and do loop to execute comand
// let i = 0
// do {    
//     console.log(i)
//     i++
// } while(i > 10)


// continiue in for loop : unlike break, continue will breaks iteration, 
// in our case when i == 7 and if statement will be true, continue keyword will break the iteration and moves next one
// for (let i = 1; i <= 50; i++) {
//     if (i == 32) {
//         break;
//     }
//     console.log(i)    

// } 










