// modules are used in JS, to create the function and use that function in another project, simply by importing that function inside the file
// we have "export" and "import" keywords in modules
// export - allows us to ship code and use that code further in another files
// import - allows us to receive the code and use the code in the file, 
// in order to import function, we use import keyword > function_name() > from > file.name

// same the function allows us to use it in further, so we don't have to write same thing twice,
// we use modules to call function, variable and our written code in different files without writing them twice




// if we want to allow another file to import our function in the file, we need to export it first
// in that case we use export default keyword, which is written before the function keyword 
// with that, we tell CP that, the function can be imported

// but we use default keyword to clarify which function is main
// we can use deault keyword on only once in a file
// თუკი exportთან ერთად ვიყენებთ default ბრძანებასაც, ვუთითებთ რომ ეს ფუნქცია მთავარი ფუნქციაა

export default function isEvenOddNumber(n) {
    let evenNum = [];
    let oddNum = [];
    for (let i = 0; i < n.length; i++){
        if (n[i] % 2 == 0) {
            evenNum.push(n[i]);
        }else if (n[i] % 2 == 1) {
            oddNum.push(n[i]);
        }
    }
    console.log(`even numbers are: ${evenNum}`);    
    console.log(`odd numbers are: ${oddNum}`);
}


// even though we won't exporting the below code, and won't importing them in another file,
// those code's will be automatically displayed in another file
// because we are exporting anything from the file, the code which are written "naked" will automatically export
// and "naked" code will always be displayed at first place, even if we use it at the end
    // let x = 5;
    // let y = 10;
    // console.log(x + y);
// all because, they aren't written in function or something else
// მარტივად, რადგანაც შიშვლად წერია ეს კოდი, ისიც გაყვება ექსპორტს

// unlike above code, test() function won't display in another file, since its file
// all because the code isn't "naked" it won't be displayed along with exported 
function test() {
    console.log("function exported succsfully");
}


function myFunc() {
    console.log("new export is on the way...");
    
}
// doesn't matter if it's written after another function, it will still be displayed
    // let x = 5;
    // let y = 10;
    // console.log(x + y + "hello world");



// as we know we can only have one default export in module, 
// its because, when we import the function, we can change its name in imported file
// lets try it... examples in import file


// as we learned we can import all exported function in one command, same we can export all exported func in one comand.
// for that we use export keyword, opem curly braces and write exported functions name in it.
// but we can only export regular exports in one command.
export { myFunc, test}


// .... and we can use module js in html, but with a different syntax
// along with <script src="module.js"> we use the type which is built in
// type must be type="module" 