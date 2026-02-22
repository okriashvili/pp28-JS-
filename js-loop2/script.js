// arry in JS
// we have while and for loops in JS, 
// they are similar to python, but the syntax is different.


// while loop in JS
// after while loop execute the code inside the loop, it will return to the condition and check it again.
// loop works infinitely until the condition is false,
// so we need to make sure that the condition will eventually become false,
// otherwise we will have an infinite loop.

// // or we can use break comand to exit the loop when a certain condition is met,
// while (true) {
//     console.log('hello from while loop');
//     break; // after printing the message once, break keyword will stops the loop
// } // while without break or false condition is infinite loop.



// let cxvari = 0
// while (cxvari <= 15) {
//     console.log(`${cxvari} ცხვარი`);
//     cxvari++;
// }
// // we can also nest if statement inside while or for loop, just like we can do in python,
// let downloadProgress = 0;
// while (downloadProgress < 100) {
//     if (downloadProgress < 30) {
//         console.log("ჯერ სადა ხარ, ახვა ვიწყებთ")
//     }else if (downloadProgress < 70) {
//         console.log(" ცოტაც და ეგაა");
//     }else {
//         console.log(downloadProgress);
//     }
//     downloadProgress ++;
// };


// it hase same syntax as if statement, 
// while keywork then condition is place in brace and we use curly brace to write the code that we want to execute in the loop,
// but we have to make sure that we have a way to exit the loop, otherwise we will have an infinite loop.




// for loop in JS part 1
// for loop is similar to while loop, but it has a different syntax,
// for loop has three parts: initialization, condition and increment/decrement,

// it works like while loop, but it is more concise and easier to read, 
// especially when we know how many times we want to execute the loop,

// we can write all 3 parts inside for loop and write execeutable code inside curly braces{},
// for (let i = 0; i <= 10; i++) { 
//     console.log(i); 
// }
// or we can create a variable outside the loop and use it inside the loop
// but in this case ne need to use different syntax

// let j = 0;
// // first, we type semi-colon, where the variable must be created
// for (; j <= 10; j++) {
//     console.log(j);
// }


// // we can also use for loop to iterate over an array or a string,
// i = "hello world";
// for(j in i) {
//     console.log(i[j]);
// };



// part2 in for loop 
// myAray = [10, 20, 30, 40, 15, 24, 31, 69, 76];


// we can use different sytax in loop (i in aray) but if we use next one its slower than first syntax 
// and returning i is typeof string not number, its not recomended
// for (i in myAray) {
//     console.log(myAray[i]);  
// };

// for (let i = 0; i < myAray.length; i+=2) {
//     console.log(myAray[i]);  
// };
// on every iteration i will increase until it wont be equal of myAray length and every iteration i will be different number
// it starts from 0 and increases by 1, unlike (i in aray) we can increase i value as much we want




// we can run over aray backwards:
// myAray = [10, 20, 30, 40, 15, 24, 31, 69, 76];
// instead of increase i's value by 1 and compare it to aray.length to break loop, 
// we create i which equals aray.length minus 1, 
// beacuse as we know index starts counting from zero and length staarts counting from One, 
// in order to equalize we need minus 1, finalluy i's value shoud decrease whilst it won't be equal to zero  

// for (i = myAray.length - 1; i > 0 ;i--) {
//     console.log(myAray[i]); // it will start printing aray's values from the last > first 
// };






// we can use if statement in for loop
// myAray = [10, 20, 30, 40, 15, 24, 31, 69, 76];
// luckyNum = 15;
// found = false


// in this case we have list of numbers and one lucky number, 
// we use loop to run over the aray, on every iteration it compares to lucky_number 
// and if we found one we use break keyword, so after founding the loop ends.

// for (let i = 0; i < myAray.length; i++) {
//     if (luckyNum == myAray[i]) {
//         console.log("Lucky number found: " + myAray[i]);
//         found = true;
//         break;
//     } 
// }
// // we use !found so if we couldn't find lucky num we return that numb er isn't in aray 
// // found is false by default, in for loop we turn found in true if we find lucky num, so if found become true, 
// // in if statement true becomes the false and it  won't returns anything.
// if (!found) {
//         console.log("lucky number isn't here")
// }
// console.log("hello world")



// if break is used to exit loop once uot condition will be true
// we use continue to exit the iteraation; if the condition will be true continue keyword will exit the iteration
// and if it will be false it will move to next condition or in our case console.log outside the if statemente
// myAray = [50, 100, 75, 89, 57, 65, 80];
// luckyNum = 75;
// for (let i = 0; i < myAray.length; i++) {
//     if (myAray[i] < luckyNum) {
//         console.log(myAray[i]);
//         continue;
//     } 
//     console.log("hello world");
// }





// // we can also use for loop to rewrite values into new aray
// const myGrades = [70, 85, 100, 79, 89, 83, 95, 86];
// let goodGrades = [];
// // we have one aray filled with values and one empty
// for (let i = 0; i < myGrades.length; i++) {
//     if (myGrades[i] >= 85){
// // we use for loop to run over the aray, then we use if statement, in our case we need to collect the values more than 85
//         goodGrades[goodGrades.length] = myGrades[i];
//         // we equalize that value to empty aray on every iteration if the value will be more than 85 
//         // it will apend that value to our empty aray
        
//         // but keep in mind that, we need to catch the empty aray's index, by using the length, since its empty the length is 0
//         // on every iteration until the if statement will be true, empty aray's index will be zero, once we apend value inside, index will increase by one, 
//         // an so until for loop won't stop working

//         // if we won't use the index and length, empty aray value will change on every time the grade will be more than 85 and it will equalize last one
//     }
// }
// console.log(goodGrades);




// nested loop / for loop inside for loop:
// for (let i = 0; i < 10; i++) {
//     // for nesting we neet to use indentation, so second for loop must be inside the firt for loop
//     for (j = 0; j < 10; j++) {
//         // second for loop will start working after first iteration will runs in first loop 
//         // and until the second for loop breaks, first loop won't move to next iteration.
//         console.log(`i = ${i} and j = ${j}`)
//         // so, second for loop finishes working, the first loop starts second iteration, again second for loop will starts iteration from the start 
//         // and until it won't finishes, the first loop won't start 3rd iteration and so on.
//         // every time first loop iteratets, second loop starts working from the begining.
//         // and first loop waits for second loop to break, so it can start next iteration
//     }
// }

// we can use that to identify if we have dubled value in our aray
numList = [12, 23, 43, 35, 56, 76, 43, 16, 79, 9, 9];

// so we run over numList aray twice, collect values and compare them to each other, it they equal we will return them 
// but its wrong, because j and i will run over the collect same values and they will compare them

// f.e : on first iteration i equals 12, and j will also eqauls 12 also, they will compare and it will returns they are dubbed, but we have only one 12
// to fix this we need to tell second loop, don't collect same data as i, we can do that equalize j index to i's index plus 1
// so if i is on first index, j doesn't check first index but will next, therefore we avoid both loop collect same data/

// for (let i = 0; i < numList.length; i++) {
//     for (let j = 0; j < numList.length; j++) {
//         if (numList[j] == numList[i]) {

//             console.log(numList[i])

//         }
//     }
// }

// correct code:
// for (let i = 0; i < numList.length; i++) {
//     for (let j = i + 1; j < numList.length; j++) {
//         if (numList[j] == numList[i]) {

//             console.log(numList[i])

//         }
//     }
// }





// homework:
// 1:
// for (let i = 5; i < 30; i+=2 ) {
//     console.log(i)
// }


// even and odd:
// oddNum = []

// evenNum = []
// for (let i = 0; i < 101; i++) {

//         if (i % 2 == 0){
//             oddNum[oddNum.length] = i
//         }
//         else{
//             evenNum[evenNum.length] = i
//         }
// }
// console.log(`even nums = ${oddNum}`)
// console.log(`odd nums = ${evenNum}`)



// count nums and break

for (i = 3; i < 60; i++) {
    if (i <= 50) {  
        break;
    }
    console.log(i);
}

