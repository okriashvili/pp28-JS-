// callback function in JS 
function  callingBack(t, f) {
    for (let i = 0; i < t; i++) {
        f(i);
    }
}

const t = (v) => {
    console.log(`hello ${v} time`);
    
} 
callingBack(10, t);



function greet(name, callback) {
    console.log(`hello ${name}`);
    callback();
}

const farewell = () => {
    console.log("goodbye");
    
}

greet("alice", farewell);




// // Simple callback function
// function addNumbers(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 1000);
// }

// // Your task: Use callback to sum array
// function sumArray(numbers, callback) {
//   let total = 0;
  
//   function addNext(index) {
//     if (index >= numbers.length) {
//       callback(total);
//       return;
//     }
//     addNumbers(total, numbers[index], (newTotal) => {
//       total = newTotal;
//       addNext(index + 1);
//     });
//   }
  
//   addNext(0);
// }

// // Test

// sumArray([1, 2, 3, 4, 5], (result) => {
//   console.log("Total:", result); // 10
// });



// aray callback functions:
myAray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reduce > returns last value of aray, it will call function as many time as much item we have in value
// we can multiply each value in aray, or concat or devide, 
// takes two argument, and function, in function we write mathematical expression using thoe two argument
console.log(`answer is: ${myAray.reduce((a, b) => {return a + b})}`);



// aaand lets create our own reduce function
function dajameba(aray) {
    let x = 0;
    for (let i = 0; i < aray.length; i++) {
        y = aray[i];
        x += y;
    }
    return x;
}

testingMyReduce = [1, 2, 3, 4, 5, 6, 7];
resulti = dajameba(testingMyReduce)
console.log(`dajameba works, total is ${resulti}`);









// forEach > takes function, and it call function as many time as many items we have in aray
// it can take two argument, first argument returns the value, second index 
// on first iteration  first argument takes index 0 items value, and second argument takes its index
// on second iteration first argument takes next index items value, and second argument takes next index 
// works until the items in aray  
    // myAray.forEach(v => console.log(v))
myAray.forEach((v, i) => {console.log(`index: ${i}, value: ${v}`)});
    // as second argument, forEach returns elements index
    // if we give third argument, it returns whole aray

// forEach method doesn't returns the aray, but its value
// if we want to return new aray, we can create new empty one and appened elemets, retrievend by forEach, using push method  
emptyAray = []
num = myAray.forEach((value, index) => {
    if (value < 7 ) {
        emptyAray.push(value + "-" + index);
    }
});

console.log(emptyAray);

// if we give third argument, it returns whole aray


// create owr forEach function
// unlike real forEach(), ours can return index, only values
function foreach(aray, func) {
    for(let i = 0; i < aray.length; i++) {
        func(aray[i]);
    }
}
newAray = [1, 2, 3, 4, 5, 6]
foreach(newAray, (v) => {
    console.log(v);     
});






// map > function returns new aray, it works like forEach but unlike it returns new aray, so we don't have to crite code to appened elements inside of it 
mapAray = myAray.map(values => {return values});
console.log(mapAray);
// beside returning original aray value we can change its value
// multiplying by 
mapAray = myAray.map(values => {return values ** 1});
console.log(mapAray);


// create out map function as we did forEach

function myMap(aray, f) {
    newAray = []
    for (let i = 0; i < aray.length; i++) {

        newAray.push(f(aray[i]));

    }
    return newAray;

}


testAray = [6, 5, 4, 3, 2, 1];
myMapAray = myMap(testAray, v => v * 2)
console.log(myMapAray);

testingMapAray = myMapAray.map((value, index, wholeAray) => `{${index} : ${value} from ${wholeAray.slice(index)}`); 

console.log(testingMapAray);


// sort method sort items by given expression
// bydefault it sorts items according to alphabetical order
// sortedAray = testAray.sort()
// console.log(`sorted aray ${sortedAray}`);

// but we can give expression and it will sorts items as we want
// evenNumAray = testAray.sort((num) => {
//     if(num % 2 == 0)
//         {return num

//         }
// }); 
// console.log(`only even nums are: ${evenNumAray}`);





// simple API call simulator using callback 
function fetchUserData(aray, callback) {
    emptyAray = []
    for (let i = 0; i < aray.length; i++) {
        emptyAray.push(callback({ id: i, name : `User ${aray[i]}` }))
    }
    return emptyAray;

    // return callback({ id: userId, name: `User ${userId}` });
}

nameLst = ["malkhaz", "lasha"]

myUser = fetchUserData(nameLst, user => user);
console.log(myUser);













