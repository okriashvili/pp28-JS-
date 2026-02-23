// objects in JS(dictionary in python)
// object is data structure in JS, same like list(aray), but unlike list objects ins't indexed
// object is - unordered list, it saves data with "key : values" principe
// curly braces is used in objects to wrap things
myObject = {
    name : "malkhaz",
    "lastname" : "okriashvili", // string type values must be into brackets, but sting type key isn't necessary 
    1 : "one"
};
console.log(myObject)
console.log(myObject["name"]) // we can't access value via index, but we can acces them via key, l
// we open brackets and type the key into "" double quotes - than called bracket notation 
console.log(myObject.name) // or we can access value like same syntax we call for functions 
// but if we have number in key, we must us bracken notation to acces data
console.log(myObject["1"]) // we can't access value via index, but we can acces them via key or 

// we can change the value, 
myObject.name = "nika"

// or we can add new property(key:value)
myObject.age = 23
// we need to call the object variable, type drot by which we teel that it will be key and equalize the value
console.log(myObject)
// we use objects to display data in web-site


// as we know we can nest aray into aray, 
// nest aray into objects is also possible>
myClass = {
    mentor : "maswavlebeli",
    age : 24,
    profession : "UI/UX design",
    students : ["makho", "nika", "lasha", "beqa", "ika"]
};
// in order to access value in aray, first we need to acces the aray itself, 
// since its inside the objects, we need to behive it object way > myClass.students or use bracket notation myClass[students]
// now we have the aray and we can behave him in aray way, use index to access values inside of it
console.log(`first student in my class is ${myClass.students[0]}`)



// we know that we can nest aray in object, but its possible to nest object in aray
myClassTutors = [
    tutor1 = {
        firstName : "nika",
        lastName : "okriashvili",
        age : 24
    },

    tutor2 = {
        firstName : "makho", 
        lastName : "okriashvili",
        age : 22
    },
] 
// since the parent is value, we can treat it in aray way, with index>

console.log(`my first tutor is ${myClassTutors[0]}`) // will prints the first object in aray
// and since we access the object, we must treat it in a object way, with bracket notation or dott
console.log(`my first tutor is ${myClassTutors[0].firstName}`) // nika

// and we can nest object in aray and nest aray in nested objet and so on
  



