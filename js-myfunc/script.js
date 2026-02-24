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


