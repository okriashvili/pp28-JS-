// in typescript we can't change the variables value with different typed value
// f.e if we saved number in variable we can change it with string or boolean
// it can only be changed with number type value
var x = 5;
console.log(5);
// after valiable name we can assign value type before we assing the value
// in such way we can tell CP that that variable can only take given type value
// syntax - variable name > : double dot > vatule type > = value   
var y = "Hi";
console.log(y);
// but such approach is used, when we want to create empty variable
var empty;
// console.log(typeof empty);
function cal(x, y) {
    return x + y;
}
console.log(cal(3, 4));
// those rules applies to function, aray and objects
// types in function 
// function myFunc(x, y) {
//     return x + y;
// }
// console.log(myFunc(3, 4)); // 7 correct
// console.log(myFunc('3', '4')); // 34 wrong
// return valueis wrong, we give string, it calculate but concatinated 2 value
// in that case, the function will work but it returns the wrong value, 3 + 4 isn't 34,
// because we give string type integer, it concatinated.
// as we know we can set the type before assigning the value
// in that way we can assure that we only receive number type value for calculation
// won't allowus to assign the string
function myFunc(x, y) {
    return x + y;
}
// console.log(myFunc("3", "6"));   
// VS code shows us that we have assigned string, but function parameter supposed to receive number
// e can use number() to change the value type
console.log(myFunc(Number("3"), 4)); // 7
// or if we type + symbol in front of value, it turns into number type
console.log(myFunc(+"3", +"5")); // 8 
// object is bit different, we can change the objects values but we can't add new one
// in regular JS, if property doesn't exist in objects, it creates new one, but not in typescript
var myObj = {
    name: "malkhaz",
    lastname: "okriashvili",
    age: 20
};
myObj.name = "Nika", // works, name is change to nika
    console.log(myObj);
// we created type, now we can assign those types to tsObj keys
var tsObj = {
    name: "typescript",
    parent: "javascript"
};
// YypeScript and arrays:
// same as object, function and variable, aray takes 1 type value
// if we only have number types values inside, we can't add string or boolean further
// but we can mix types when we are creating it, after we create, we can't add different types value. 
var numList = [12, "hello world", 24];
numList.push("krk");
// numList.push(true); // in original aray, we only have str and num types, can't add boolean;
console.log(numList);
// if we want to create empty aray, we use JS syntax and we can set values types beforehand 
var emptyAray = []; // creates empty aray, where we can add anytypes value 
emptyAray.push(9);
emptyAray.push("hi");
// when setting types for aray, we write []square braces next to type
// let emptyNumAray : number = [] // wrong
var emptyNumAray = []; // correct
// if we want to create mixed aray, we can use keywrd any
// any keyword applies other properties as well: objects, variables, aray and function
var mixedAray = [];
// 
var mixedObj = {
    name: "mixed object",
    settet: "any",
};
mixedObj.script = "typescript";
console.log();
