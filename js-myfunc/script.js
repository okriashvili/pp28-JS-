// function in JS 
// in order to create funtion in JS we need:
// 1: function keyword > 
// 2: function name > 
// 3: open braces where we give parameters
// and curly braces where we write code which should be executed 


// 

function myFunc(firstName) {
    console.log(`welcome ${firstName} to our page`)
}
// when we call function and if we have parameters inside, we must assign arguments which will be saved and used in parameter
myFunc("malkhaz")
// we created greeting function which will later be used

// simple but incrrect function which calculates your age
// function calAge(myBirthday, year) {
//     return myBirthday - year;
// }
// const myBirthday = 2003;
// console.log(Math.abs(calAge(myBirthday, 2026)));



// we can also save function inside the variable, that called anonym function
const greeting = function greetUser(userName='makho') {
    return `hello ${userName} from anonym function`
} 
// but in this case we mustn't give name to function and we use variable name to call function
console.log(greeting())



// arrow function we save function in variable but didn't use function keyword
// directly open braces () give parameter 
// next we type '=>' symbol equal + arrow and open curly braces
const arrowFunc = (userName) => { 
    return `welcome ${userName} from arrow function`
} 
console.log(arrowFunc("nika"))

// if we have one parameter in function we don't have to open braces and type it there = if we have zero parameter must open braces and  
// also if we are directly returning and don't write execution code we don't have to open curly braces and write return keyword
const arrowFunc2 = userName => `welcome ${userName} from arrow function2, with different syntax` // it does same thing as previous arrow funtion
console.log(arrowFunc2("luka"))




// we can call the function inside the function: 
function calAge(myBirthday, year) {
    return Math.abs(myBirthday - year);
}


function avgAge(person1, person2) {
    person1 = calAge(2003, 2026)
    person2 = calAge(2001, 2026)
    let avrageAge = (person1 + person2) / 2
    return `avarage age is ${avrageAge}` 
}

console.log(avgAge())




// small homework about functions
/* შევქმნათ ფუნქცია fahrenheitToCelsius. მასზე გადაცემული რიცხვითი პარამეტრი მიუთითებს ფარენგეიტში
გამოსახულ ტემპერატურას. ფუნქციამ კონვერტაცია უნდა გაუკეთოს ფარენჰეითს ცელსიუსში და დააბრუნოს ის. 
//  */
// since we returning the celsius value and don't need extra code to write, we used arrow function 
const fahrenheitToCelsius = temperaturInFahrenheit => (temperaturInFahrenheit - 32) / 1.8
console.log(fahrenheitToCelsius(100))


/* შექმენით ფუნქცია include, რომელიც არგუმენტად მიიღებს 2 სტრინგს, თუ პირველი სტრინგი შეიცავს მეორე
სტრინგს, მაშინ ცვლადს result-ს მიანიჭებს true-ს თუ არა false-ს. result-ის მნიშვნელობას alert-ით გამოიტანს
ეკრანზე და ასევე დააბრუნებს მას.  */ 

function include(string1, string2) {
    let result = undefined
    if (string1.includes(string2)) {
        result = true;
    }else {
        result = false;
    }

    return result;
}
console.log(include("gama", "s"))



/* შექმენით myPow ფუნქცია, რომელსაც გადაეცემა ორი რიცხვითი პარამეტრი და რომელსაც იგივე დანიშნულება
ექნება რაც Math.pow() ფუნქციას აქვს, ანუ პირველ პარამეტრად გადაცემულ მნიშვნელობას აიყვანს მეორე
პარამეტრად გადაცემული რიცხვის ხარისხში და მიღებულ შედეგ დააბრუნებს.  */ 
function myPow(number1, number2) {
    return Math.pow(number1, number2) 
}
console.log(myPow(4, 3))

// lets write same function but use arrow func

const myArrowPow = (number1, number2) => Math.pow(number1, number2)
console.log(myArrowPow(3, 3))



/*გადააკეთეთ წარმოდგენილი multiplication ფუნქცია ისრულ ფუნქციად. შეინარჩუნეთ მისი სახელიც და
ლოგიკაც.
function multiplication (x, y) {
return x * y;
} - turn function into arrow func */

const turnFunctionIntoArrowFunc = (x, y) => x * y;
console.log(turnFunctionIntoArrowFunc(5, 8)) 


// functions part 2:
// generate random color:


function generateRndomColor() {
    num1 = (Math.random() * 255 + 1).toFixed() 
    num2 = (Math.random() * 255 + 1).toFixed() 
    num3 = (Math.random() * 255 + 1).toFixed() 

    return `rgb(${num1}, ${num2}, ${num3})`
}
console.log(generateRndomColor());


// we can create anonym function without saving in varaible 
// syntax is next
// 1: we need to create braces and second braces inside of it
// we can give parameter inside of second braces
// 2: then we write arrow symbol => - equalize symbol and arrow
// 3: we create cusly braces where we write the execution code
// lastly, we write braces outside of function
(() => {
     console.log("Hello world");
})();

// the open and close braces which we types lastly, call the function




// methods to work with aray: map, filter and so on...
// let myAray = [11, 23, 43, 15, 75, 56, 59, 92, 32, 31, 111, 1, 8, 103];


// // filter > takes function inside, we can write function outside and use it inside filter object
// // but we don't call function inside the filter object
// function filtering(x) {
//     return x > 30;
// }
// let newAray = myAray.filter(filtering); 
// console.log(newAray)

// // or use arow function inside the filter
// let fileteredAray = myAray.filter((x) => {
//     return x > 30;
// }); // same here, we don't call the function here also
// console.log(fileteredAray)


// // every object in aray
// // like filter, every() take function and it goes through the aray and compares every element to function 
// // and it true or false, but all element must meet condition, even if 1 element wonät if returns fale
// // f.e: if aray elements are more than 1> 
// everyAray = myAray.every((x) => {return x > 0}); // all elements in aray is more than 0, so it returns true, 
// // but if we write more than 1 it will return false, cause we have 1 in aray, and 1 isn't more than 1 
// console.log(everyAray)

// // some() same works in every(), but in this case, isn't necessary all element to meet conditions,
// // if some elements will meet if returns true
// someAray = myAray.some((x) => {return x > 10}); // even though we have some elements less than 10, it still returns true,
// // because some element is more than 10
// console.log(someAray)




// we can create our function like some and every, lets rewtire some and every functions:
// let myAray = [11, 23, 43, 15, 75, 56, 59, 92, 32, 31, 111, 1, 8, 103];

// function myEveryObject(arr, num) {
//     let x = true;
//     for(let i = 0; i < arr.length; i++) {
//         // we use for lloop tp check every item
//         if(arr[i] > num){
//         // then we are using the if statement to check if our element in more or less to given number
//         // we aren't returning anything in if statement, because we want to check every single item  
//         // so if even one element moves to else block it immediately becomes false
//         // but if none element move to else block, 
//         // it means that if statements will be closed and for loop will end 
//         // thats why we return true in the last place 
//         } else {
//             return x = false;
//         }

//     }
//     return x; 
// }
// console.log(myEveryObject(myAray, 10));

// we write every() method by purself, lets write some moethod also:
let myAray = [11, 23, 43, 15, 75, 56, 59, 92, 32, 31, 111, 1, 8, 103];
// it works same like myEveryObject, but unlike returning true in the last place, we return true in if statement, 
// because even if one value will be more or less than  given number, it returns true  

function mySomeObject(arr, num) {
    let x = true;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > num){
            return x;
        } else {
            return x = false;
        }
    }
    return x; 
}
console.log(mySomeObject(myAray, 0));
// method works on another aray as well
newAray = [11, 23, 43, 15, 75, 56, 59, 92, 32, 31, 111, 1, 8, 103];
console.log(mySomeObject(newAray, 199));





// map method > takes function and function must take two parameter itself:
// map method retindependently with his index number 
// shortly it returns index : value; on which index the value is.

// indexedValue = newAray.map(function(v, i) { 
//     return `the ${v} value is on index ${i}`
// }) 


// indexedValue = newAray.map((v, i) => `the ${v} value is on index ${i}`) // anonym arow function is best in this sort of cases
// console.log(indexedValue)



// foreach method does same thins as map()

newAray = ["apple", "mango", "banana", "kiwi"];

newAray.forEach(function(value, index) {
    console.log(`${index} : ${value}`);
});



// ... 3 dot "copys" or unites the aray
// lets say we have 3 aray, if we want to unit all 3 aray we can use 3dot 
// after every 3dot we type aray variable
aray1 = [1, 2, 3]
aray2 = [4, 5, 6]
aray3 = [7, 8, 9]

unitAray = [...aray1, ...aray2, ...aray3]
console.log(unitAray)




// reduce() method, reduces aray elements to last value, takes index0 element and reduces its value with rest of elements
let numAray = [123, 23, 43, 15, 75, 56, 59, 92, 32, 31, 111, 1, 8, 103];
// reduce() takes function and two parameter, 
// first parameter takes the index 0 value as argument
// second parameter takes rest of the values ar argument
// it works like for loop, first parameter value will be reduced by next parameter and it will continue so...  
// reducedValue = numAray.reduce((left, rest) => left -rest);
// console.log(reducedValue)

// reduceRight works similar like reduce, but it will reverses the aray, and starts reducing by right
// first parameter will take last element ar argument and start reducing value so on... 
// reducedValue = numAray.reduceRight((right, rest) => right -rest);
// console.log(reducedValue)


// Array is built in object in JS, like Math and Array has it own built in methods
// console.log(Array.isArray(numAray))


myName = "malkhaz"
myLastName = "okriashvili"
// myNameAray = Array.aray
// from takes string aray and creates aray from that string, each character will be place independetly
console.log(Array.from(myName + myLastName))




// sort > takes funtion and sorts aray according to given logic
// it takes function and two parameter
// if we want to sort items from less to biggest we should return first parameter - second parameter
console.log(numAray.sort((a, b) => {return b - a}))

// if we want to sort them from biggest to less we return second parameter - first parsmeter


// entries() - needs for loop for iteration
for(let i of numAray.entries()) {
    console.log(i)
}
// returns all element with its index number, 
// but if we use .keys() instead of entries, it will return only index numbers



// with() - allows us to change value in aray
monthList = ["january", "february", "march", "apr", "may"]

// with takes two argument:
// 1: index of element we want to change
// 2: new value
month = monthList.with(3, "hello");
console.log(month);



// classwork about function methods in aray
// 1:
lst = [12, 56, 43, 122, 20, 23, 67, 29, 100];
filteredLst = lst.filter((x) => {return x > 30});
console.log(filteredLst)

// 2:
numLst = [100, 20, 70];
reducedNum = numLst.reduce((value, decrease) => {return value - decrease});
console.log(reducedNum)

// 3:
sortFromLessToMore = lst.sort((a, b) => {return a - b});
console.log(sortFromLessToMore);




// homework about aray methods and arrow function
//  შეამოწმე, არის თუ არა ყველა რიცხვი მასივში ლუწი.
numberList = [12, 56, 43, 122, 20, 23, 67, 29, 100];

isNumbersEven = numberList.every((x) => {return x % 2 == 0});
console.log(isNumbersEven) // false



//  გადაამოწმე, არის თუ არა ყველა ელემენტი სტრინგის ტიპის.
stringList = ["name", "surname", "age", "number", 3]

checkIfString = stringList.every((x) => typeof x == "string");


console.log(`have we only string in our list? - ${checkIfString}`)
// for(let i =0; i < stringList.length; i++) {
//     arayStatus = false
//     if(typeof stringList[i] == "string") {
//         arayStatus = true;
//     }else{
//         arayStatus = false
//     }
// }
// console.log(arayStatus) // true



//  გადაამოწმე, არის თუ არა ყველა რიცხვი 50-ზე მეტი.
moreThanFifty = numberList.every((x) => {return x > 50});
console.log(moreThanFifty); // false


//  გადაამოწმე, შეიცავს თუ არა ყველა ელ.ფოსტა “@” სიმბოლოს.
myGmail = "okriashvili.malkhaz@gmail.com";
includesGmailSymbol = myGmail.includes("@");
console.log(includesGmailSymbol); // true


//  შეამოწმე, არის თუ არა მასივში მინიმუმ ერთი ლუწი რიცხვი.
checkIfContainsEvenNumber = numberList.some((x) => {return x % 2 == 0});
console.log(checkIfContainsEvenNumber); // true

//  გადაამოწმე, არის თუ არა მინიმუმ ერთი რიცხვი უარყოფითი.
checkIfContainsNegativeNumber = numberList.some((x) => {return x < 0});
console.log(checkIfContainsNegativeNumber); // true

//  გაფილტრე რიცხვების მასივი ისე, რომ დარჩეს მხოლოდ ლუწები.
filterOnlyEvenNumber = numberList.filter((x) => x % 2 == 0);
console.log(filterOnlyEvenNumber);


//  დააბრუნე მხოლოდ ის ელემენტები, რომლებიც სტრინგებია.
concatList = numberList.concat(stringList);
filterOnlyString = concatList.filter((x) => typeof x == "string");
console.log(filterOnlyString);

//  გადაამოწმე, არის თუ არა მასივში მინიმუმ ერთი ცარიელი სტრინგი.
concatList.push(" ")
checkIfEmptyString = concatList.some((x) => x == "" || x == " ");
console.log(`check if we have empty string in aray: ${checkIfEmptyString}`)







