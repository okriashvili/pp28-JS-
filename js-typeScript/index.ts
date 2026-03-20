// in typescript we can't change the variables value with different typed value
// f.e if we saved number in variable we can change it with string or boolean
// it can only be changed with number type value
let x = 5;
console.log(5);


// after valiable name we can assign value type before we assing the value
// in such way we can tell CP that that variable can only take given type value
// syntax - variable name > : double dot > vatule type > = value   
let y: string = "Hi";
console.log(y);

// but such approach is used, when we want to create empty variable
let empty : number;
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
function myFunc(x : number, y : number) {
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

let myObj = {
    name : "malkhaz",
    lastname : "okriashvili",
    age : 20
}
myObj.name = "Nika", // works, name is change to nika
console.log(myObj);
// myObj.age = 22 // we don't have such key, it won't creates new one, as it does in regulat JS
// we can set value types beforehand, but syntax is different
// next to the object name we open the curlybraces :{} and inside we set type for each key
// and we seperate each setter with semi-comma, not comma
// keep in mind, the keys quantity mustn't exceed to setter, otherwise it goes error 
// mu must have same exact number of property in setter than we have in object
// but if we have more property in setter, we must assign value in object
// if won't to eave it empty, we must create optional, if we won't it will be required
// optional kkeys are made with ? question mark
// next to key we write ?, and therefore we can leave it empty

    // let tsObj : {
    //     name : string;
    //     parent : string;
    //     // age : number; // wrong, cause we must have age in object, its required
    //     age? : number; // questionmark symbol, turned it optional 

    // // and insted of setting the types each object and writing the same code continually, we can use the shortcut
    // } = {
    //     name : "typescript",
    //     parent : "javascript"
    // }


// type setter shortcut > 
// as we create variables with keywords: let, var and const > here we use type
// type > tyoeName {setting objects types here} 
type tsObjType = {
    name : string,
    parent : string,
    age? : number

}
// we created type, now we can assign those types to tsObj keys
let tsObj : tsObjType = {
    name : "typescript",
    parent : "javascript"
}




// YypeScript and arrays:

// same as object, function and variable, aray takes 1 type value
// if we only have number types values inside, we can't add string or boolean further
// but we can mix types when we are creating it, after we create, we can't add different types value. 
let numList = [12, "hello world", 24];
numList.push("krk");
    // numList.push(true); // in original aray, we only have str and num types, can't add boolean;
console.log(numList);


// if we want to create empty aray, we use JS syntax and we can set values types beforehand 
let emptyAray = []; // creates empty aray, where we can add anytypes value 
emptyAray.push(9);
emptyAray.push("hi");

// when setting types for aray, we write []square braces next to type
    // let emptyNumAray : number = [] // wrong
let emptyNumAray : number[] = [] // correct

// if we want to create mixed aray, we can use keywrd any
// any keyword applies other properties as well: objects, variables, aray and function
let mixedAray : any = [];



// 
let mixedObj : any = {
    name : "mixed object",
    settet : "any",

}  
mixedObj.script = "typescript"; 
// usually, typescript goes errot, can't create new object if he doesn't have one in object, 
// but cause we used any keyword, it works like regular javascript 
console.log();


// any keyword neutrals the typescript chracter and works like javascript





