// import isEvenOddNumber from "./module";
// above written code, won't import the function, we can fix it by 2 approach
// 1st is .mjs extension
// because, if we won't to import file, 
// export file root must be .mjs extension, not .js
// and we must wrtie the .mjs extenstion at the end to imported file
// eventhough, when we import file, 
// writing the extension at the end, isn't mandatory, we still need to write if we use .mjs approach
// 2nd approach is using the package.json but we didn't know it yet


// import isEvenOddNumber from "./module.mjs";

// even the function is called isEvenOddNumber we can change the nam of default function 
    // import evenOrOdd from "./module.mjs";

// unlike default export, regular export suntax is different
    // import { test } from "./module.mjs";
// its written in curly braces, and we can't rename it as default
// but we can use "as" keyword to rename it
    // import { test as satesto } from "./module.mjs";
// unlike default we can import as many regular function as we want
    // import { myFunc } from "./module.mjs" ;   

// and instead of importing each function independetly, we can arrange them into one keyword
    // import {test as satesto, myFunc} from "./module.mjs";

// and we can import default func and regular one in one command, 
import evenOrOdd, {test as satesto, myFunc} from "./module.mjs";
// we need to write default func outside the curly braces.

// now it won't work, cause we use the original name, since we rename it wwe must call new name

let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// console.log(numList);

// console.log(`imported nums ${evenNum}`);


console.log("hello world");

// won't work because its renamed
// isEvenOddNumber(numList);
evenOrOdd(numList);


// test() function is renamed to it won't work
    // test()   
satesto();
myFunc()
