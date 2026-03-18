// in this file we coer JS different scopes, such us spread, reference and value types, differences between them



xAray = [1, 2, 3];
yAray = xAray;
console.log(xAray);

// y = xAray + "," + 4;
yAray[2] = 10;
// when we change the index 2 element in Y aray, the change affects on X as well
// all it happens because when we rewrite X aray into Y aray, it rewrites the same operational address
// so when we make changes it changes the original aray, on same address, therefore changes affects to original X aray


// simply, when we rewtire x aray into y aray, it rewrite the reference, it didn't copied the aray  
console.log(yAray);
console.log(xAray);

// of we want to avoid it, we can use spread approach
newAray = [1, 2, 3];
// since we use spread approach, changes in spreaded aray won't affect to original one
// suchway, it copies the aray, it doesn't rewrites the reference 
spreadedAray = [...newAray];
spreadedAray[0] = 0;

console.log(newAray);
console.log(spreadedAray);




numAray = [10, 9, 8, 5, 6];
maxNum = Math.max(numAray);

console.log(numAray);
console.log(maxNum);

// and same rules applies to objects, and we can fix it using the spread method

myObj = {
    name : "Malkhaz",
    lastName : "Okriashvili",
    status : "Single"
}
    // nikasObj = myObj;
    // nikasObj.name = "Nika";
    // console.log(nikasObj);
    // console.log(myObj);

// name is changes in nikasObj, but so it in myObj


// if we want to avoid that, we mustn't rewrite myObjs reference into nikasObj, we must copy into it and change name
nikasObj= {...myObj}
nikasObj.name = "nika";
nikasObj.status = "Married";
console.log(nikasObj);
console.log(myObj);







// but, spread method has one bug, it won't work on nested loops or objects, 
// when we spread one object into another and it has nested object, it rewrite the nested objects references into new one
    
    // makhosAray = [{name : "Malkhaz"}, {lastName : "Okriashvili"}, {age : 22}];
    // nikasAray = [...makhosAray];
    // nikasAray[0].name = "Nika";
    // console.log(nikasAray);
    // console.log(makhosAray);

// even we used spread, it changed the name in both aray, cause object is nested inside the aray 


// we have two solution to fix it: 
// 1: copy with JSON:
// turn obj/aray into string, using JSON.stringify(obj/aray)
// and once we turn into string, using JSON.parse(JSON.stringify arr/obj) > returns the stringed obj/arr into obj/arr
// JSON.stringify(obj/aray) > then 
// JSON.parse(JSON.stringify arr/obj)
makhosAray = [{name : "Malkhaz"}, {lastName : "Okriashvili"}, {age : 22}];

let stringedAray = JSON.stringify(makhosAray);
let nikasAray = JSON.parse(stringedAray);
// JSON.parse can only turn stringyfied object into string
nikasAray[0].name = "nika";
console.log(nikasAray);
console.log(makhosAray);

// 2nd soultion is using structuredClone > 
nikasClonedAray = structuredClone(makhosAray);
nikasClonedAray[0].name = "Nika";
nikasClonedAray[2].age = 24;
console.log(nikasClonedAray);
console.log(makhosAray);
// it did same work, with less code




// since we had nested aray inside the aray, spread method didn't work and nested arays value changed in both aray  
    // nestedAray = [1, 2, 3, [4, 5, 6]];
    // let sna = [...nestedAray];

    // sna[3][0] = 0;
    // console.log(sna);
    // console.log(nestedAray);

// therefore, we must use JSON or structuredClone method, to avoid changes;

    // nestedAray = [1, 2, 3, [4, 5, 6]];
    // let sna = JSON.stringify(nestedAray);
    // nna = JSON.parse(sna);

    // nna[3][0] = 3;
    // console.log(nna);
    // console.log(nestedAray);
// it worked

// so worked structuredClone
    // nestedAray = [1, 2, 3, [4, 5, 6]];
    // nna = structuredClone(nestedAray);

    // nna[3][0] = 3;
    // console.log(nna);
    // console.log(nestedAray);


// lastly, we are able to change information in const type of variables:
const x = [1, 2, 3];
x[0] = 4;
x.pop()
console.log(x);
// Element on index0 value is changed to and become 4 and last element is deleted from aray
// even though array is const, which supposed to be unchangable
// its because the const doesn't allows to change the elements operational address, but we can change the values inside of it
// same rule applies to objects



const y = {
    a : "a",
    b : "b",
    c : "c"
}
y.a = "e";
y.d = "d"
console.log(y);
// we can change and create new values inside of it, because we aren't changes the operational address,

// once we'll change the operational value, for exmple: rewrite it, it goes to error > Assignment to constant variable.
    // y = {};
    // console.log(y);











