// // objects in JS(dictionary in python)
// // object is data structure in JS, same like list(aray), but unlike list objects ins't indexed
// // object is - unordered list, it saves data with "key : values" principe
// // curly braces is used in objects to wrap things
// myObject = {
//     name : "malkhaz",
//     "lastname" : "okriashvili", // string type values must be into brackets, but sting type key isn't necessary 
//     1 : "one"
// };
// console.log(myObject)
// console.log(myObject["name"]) // we can't access value via index, but we can acces them via key, l
// // we open brackets and type the key into "" double quotes - than called bracket notation 
// console.log(myObject.name) // or we can access value like same syntax we call for functions 
// // but if we have number in key, we must us bracken notation to acces data
// console.log(myObject["1"]) // we can't access value via index, but we can acces them via key or 

// // we can change the value, 
// myObject.name = "nika"

// // or we can add new property(key:value)
// myObject.age = 23
// // we need to call the object variable, type drot by which we teel that it will be key and equalize the value
// console.log(myObject)
// // we use objects to display data in web-site


// // as we know we can nest aray into aray, 
// // nest aray into objects is also possible>
// myClass = {
//     mentor : "maswavlebeli",
//     age : 24,
//     profession : "UI/UX design",
//     students : ["makho", "nika", "lasha", "beqa", "ika"]
// };
// // in order to access value in aray, first we need to acces the aray itself, 
// // since its inside the objects, we need to behive it object way > myClass.students or use bracket notation myClass[students]
// // now we have the aray and we can behave him in aray way, use index to access values inside of it
// console.log(`first student in my class is ${myClass.students[0]}`)



// // we know that we can nest aray in object, but its possible to nest object in aray
// myClassTutors = [
//     tutor1 = {
//         firstName : "nika",
//         lastName : "okriashvili",
//         age : 24
//     },

//     tutor2 = {
//         firstName : "makho", 
//         lastName : "okriashvili",
//         age : 22
//     },
// ] 
// // since the parent is value, we can treat it in aray way, with index>

// console.log(`my first tutor is ${myClassTutors[0]}`) // will prints the first object in aray
// // and since we access the object, we must treat it in a object way, with bracket notation or dott
// console.log(`my first tutor is ${myClassTutors[0].firstName}`) // nika

// // and we can nest object in aray and nest aray in nested objet and so on


// // 2. მოცემულია პროდუქტების ლისტი:
//  products = [
//     {"cola": {
//         "price": 1.5,
//         "quantity": 10
//     }},
//     {"fanta": {
//         "price": 2.5,
//         "quantity": 5
//     }},
//     {"snickers": {
//         "price": 3.5,
//         "quantity": 12
//     }},
//     {"water": {
//         "price": 4.5,
//         "quantity": 8
//     }},
//     {"beer": {
//         "price": 6.5,
//         "quantity": 5
//     }}
// ]    


// // ა. დაბეჭდეთ ყველა პროდუქტის დასახელება
// // for (let i = 0; i < products.length; i++) {
// //     console.log(Object.keys(products[i]))
// // }

// // გამოითვალეთ ყველა პროდუქტის ღირებულების ჯამი(ანუ პროდუქტის ფასი უნდა გაამრავლოთ რაოდენობაზე და დააჯამოთ)
// value = 0
// for (let i = 0; i < products.length; i++) {
//     productsPrice = products[i][Object.keys(products[i])[0]].price
//     productsQuantity = products[i][Object.keys(products[i])[0]].quantity
//     let totalFee = productsPrice * productsQuantity
//     value += totalFee

// }
// console.log(value)    



// objects part 2:
myInfo = {
    firstName : "malkhaz",
    "lastName" : "okriashvili",
    23 : "age"
}

// ?. question mark and dot is used, if we don't have value inside the object, 
// it will shows the undefiend and won't goes to error
// console.log(myInfo?.[24])
// if we doesn't want to cause error



// // we can create function inside the object as value,

// functionInObject = {
//     firstName : "malkhaz",
//     "lastName" : "okriashvili",
//     "age" : 23,
//     myFuncInObject : function() {
//         return `hello world from function, inside the object. ${this.firstName} is speaking`; // this keyword
//     // we can use object values inside the function, we can acces those value by standard way, brace notation or calling it
//     // but this approach is incorrect, we should use this keyword,
//     // this keyword already means that it took values from its own object  
//     },
// }
// // but even though its key, we treat it as function, which means we can't acces the key like bracket notation
// console.log(functionInObject["myFuncInObject()"]) // return undefiend
// console.log(functionInObject.myFuncInObject()) // returns function







// // console["log"]("hello world1") // JS is object oriented language
// // which means thatt console.log method also is build bu object, therefore we can call it with different syntax 


// myActivity = {
//     job : "Web-developer",
//     salary : 2400,
//     hobby : "padel",
//     vehicle : "Harley davidson 883"
// }

// // we can unit 2 or more object by using spread method ...,
// // 3 dot, like we used it in aray
// newObject = {...myInfo, ...myActivity}
// console.log(newObject)




// testObject = {
//     "greet" : "hello", 
//     "address" : "to world",
//     "salutation" : "Computer"

// }

// destruction is used to unwrap the object and distribute key : value
// when we unwrap, variable name will take key - key name must match variable name
// value will be variable 
// we should open curly braces {} and write variable names inside of it, 
// variable will take values according to order 
// amount of variable, shouldn't exceed the amount of key, 
// it won't cause error unless we use the variable which exceeds the order   
// syntax is next: 
// let {greet, address} = testObject
// console.log(greet, address)



// set and get methods()
let object = {
    firstName : "malkhaz", 
    lastName : "okriashvili",
    age : 23,

    // get function is used to retrive the data from objects.
    get getName() {
        return this.firstName;
    },
    // get function is used to easily access the keys and values inside the object, 
    // simply, instead of used dot or bracket notation, to access the values, we can create the "get" function inside the object
    // next we can treat it as function and use it to return what we want   
    // since we have access value and stored it in function, we can call for that function in further usage 



    // same as get function, we have set function in JS which changes or assigns the value to key
    // if the key doesn't exists it will creates new one
    set setStatus(x) {
        // set function takes the parameter, by which we assign value to key
        this.status = x;
        return this.status;
    },

    set setName(name) {
        this.firstName = name;
        return this.firstName;
    },

}

console.log(object.getName)
// but we don't call the get function like we call typical function.
// object.getName

// as we don't call for get function, same here
// we don't assign set function the vapue as parameter
y = true;
// instead of we equalize it
// and when we call set function, we 
console.log(object.setStatus = y);

// oobject.setName = "makho";
console.log(object.setName = "makho");
console.log(object)


// we use for in loop with objects, 
// if we print i, it returns the object keys, 
// but objectName[i] returns values
for(i in object) {
    // console.log(i)
    console.log(object[i])
}







// hemework::::

console.log("homework");
// 1:
objectDestruction = {
    firstName: 'makho',
    lastName: 'okriashvili',
    age: 23,
    status: true
}
let {firstName, lastName, age} = objectDestruction
console.log(firstName)






/* შექმენით ობიექტი person, რომლის გასაღებები იქნება 'სახელი', 'გვარი' და 'გენდერი'. მათი მნიშვნელობები
თქვენ თვითონ განსაზღვრეთ. ეკრანზე გამოიტანეთ სახელი გვარის და გენდერის მნიშვნელობები ერთ
სტრინგში. სიტყვები ერთმანეთს დააცილეთ და გენდერი ფრჩხილებში ჩასვით.
მაგ: 'ნატო შონია (მდედრობითი)'*/ 

console.log(`${objectDestruction.firstName} ${objectDestruction.lastName}(${objectDestruction.age})`)


// შექმენით ობიექტი date, რომლის გასაღებები იქნება day, month და year. მათ მნიშვნელობებად მიმდინარე
// თარიღი განსაზღვრეთ. ეკრანზე გამოიტანეთ ეს თარიღი
n = new Date();
dateObject = {
    day : n.getDate(),
    month : n.getMonth(),
    year : n.getFullYear()
}
// console.log(`${dateObject.day}/${dateObject.month}/${dateObject.year}`)
console.log(dateObject)

// მოცემულია ობიექტი products. ამ ობიექტის ყველა ელემენტი, რომლის მნიშვნელობაა 'მარწყვი' შევცვალოთ
// მნშვნელობით 'ალუბალი'.
let products = {
    pr1: 'ბანანი',
    pr2: 'მარწყვი',
    pr3: 'მსხალი',
    pr4: 'მარწყვი',
    pr5: 'ატამი',
    pr6: 'საზამთრო',
    pr7: 'მარწყვი',
    
    // we can change several objects value with set function  
    set setName(newName) {
        for (let key in this) {
            if (this[key] == "მარწყვი") {
                this[key] = newName;
            }
        }
    }
}
products.setName = "ალუბალი";
console.log(products);


// მოცემულია ობიექტი car. კონსოლზე გამოიტანეთ ამ ობიექტის მწარმოებელი (manufacturer) და ფერი.
 const car = {
    model: {
        manufacturer: "BMW",
        mark: "X6",

        get getName() {
            return this.manufacturer;
        }

    },
    color: "black",
    is_left_hand_drive: false,
    number_of_doors: 5,

    set setColor(newColor) {
        return this.color = newColor;
    },

    set setHandDrive(newSide) {
        return this.is_left_hand_drive = newSide;
    }

};
console.log(`${car.model.getName}, color is ${car.color}`);

// წინა დავალებაში მოცემული car ობიექტის ფერი შეცვალეთ "white"-თი, ხოლო მარჯვენასაჭიანობა შეცვალეთ
// მარცხენასაჭიანობით
car.setColor = "white";
car.setHandDrive = true;
console.log(car);


// დაწერეთ ისრული ფუნქცია canEnrollToCourse, რომელსაც გადაეცემა ობიექტი student, (სტუდენტის სახელი და
// გადახდილი თანხა). ფუნქციამ უნდა დააბრუნოს true თუ გადახდილი თანხა 1125 ლარის ტოლია ან მეტია.
// წინააღმდეგ შემთხვევაში უნდა დააბრუნოს false.
const student = {
    studentName : "პეტრე მგელაძე",
    paydVolum: 700,
    isPaid : () => {
        if (this.paydVolum < 1125) {
            return true;
        }else { return false;}
    },
}
console.log(student.isPaid())


// დაწერეთ ისრული ფუნქცია getTotalAmount, რომელსაც გადაეცემა ობიექტი purchases. ფუნქციამ უნდა
// დააბრუნოს გადახდილი თანხების ჯამი.
const purchases = {
    foods : ["Apples", "Bananas", "Eggs", "Cucumber", "Cheese"],
    amountPaid: [4, 6, 4, 12, 15],
    date: "27/11/2021",
    get getTotal() {
        return this.amountPaid.reduce((a, b) => {return a + b;});
    }
};
console.log(purchases.getTotal)



/* დაწერეთ ისრული ფუნქცია getFullModelOfCar, რომელსაც გადაეცემა car ობიექტი და დააბრუნებს
ავტომობილის მოდელის სრულ დასახელებას manufacturer.name-ისა და model-ის გათვალისწინებით. */
const carObject = {
    manufacturer: {
        name: "BMW",
        location: "Munich, Germany",
        year_of_establish: 1916
    },
    model: "X6",
    color: "black",
    is_left_hand_drive: false 
}

let getFullModelOfCar = (car) => {
    return `${car.manufacturer.name} ${car["model"]}`
}
console.log(getFullModelOfCar(carObject));




// დაწერეთ ფუნქცია getTotalPrice, რომელიც დააბრუნებს ობიექტი purchases-ის საყიდლების ჯამურ ფასს.
const purchasesObject = [
    {
    item: "hammer",
    price: 22
    },
    {
    item: "screwdriver",
    price: 17
    },
    {
    item: "nails",
    price: 8}
];
// total = 0;
// for (i in purchasesObject) {
//     total += purchasesObject[i].price;
// }
// console.log(total);


const  getTotalPrice = (purchases) => {
    return purchases.reduce((sum, item) => sum + item.price, 0);
};
const purchase = [
    {item: "hammer", price: 22},
    {item: "screwdriver",price: 17},
    {item: "nails", price: 8}]
console.log(getTotalPrice(purchase));


// დაწერეთ ფუნქცია getAveragePrice, რომელიც დააბრუნებს ობიექტი purchases-ის (წინა დავალების მიხედვით)
// საყიდლების საშუალო ფასს.
avgPrice = getTotalPrice(purchase) / purchasesObject.length
console.log(avgPrice);



// მოცმულია ობიექტი person. გადაწერეთ ეს ობიექტი და დაუმატეთ მეთოდი sayHello, რომელიც ეკრანზე
// გამოიტანს სტრინგს 'გამარჯობა X', სადაც X წარმოადგენს ობიექტი person–ის სახელს.
let person = {
    firstName: "ნათია",
    age: 30,
};

let sayHello = (person) => {
    return `გამარჯობა ${person.firstName}`
}
console.log(sayHello(person));








// შექმენით პროდუქტის ობიექტი product, რომელსაც ექნება შემდეგი თვისებები: weight, quantity, price, photo და
// მეთოდი (ფუნქცია) onstock, რომელიც დაადგენს არის თუ არა მარაგში პროდუქტი – თუ რაოდენობა (quantity)
// უდრის 0, მაშინ Html დოკუმენტში დაბეჭდეთ 'მარაგი ამოიწურა', თუ მეტია 0–ზე, Html დოკუმენტში დავბეჭდოთ
// 'მარაგში არის X პროდუქტი', სადაც X არის პროდუქტის რაოდენობა.
// მოცემული ინფორმაცია გამოიტანეთ html ში bootstrap card მეშვეობით

choco = {
    weight : 16.8,
    quantity : -1, 
    price : 21,
    
    get onStock() {
        if (this.quantity <= 0) {
            console.log("Not in stock");
        }else {console.log(`${this.quantity} item is left`)}
    }
}
choco.onStock;


// შევქმნათ ფუნქცია changeProperty(key, value, obj), რომელიც ჩაანაცვლებს student ობიექტის რაიმე თვისების
// მნიშვნელობას ახალი მნიშვნელობით.
const studentObject = {
    studentName : "პეტრე მგელაძე",
    paydVolum: 700,
};


function setProperty (key, value) {
    for (i in studentObject) {
        i = key
        studentObject[i] = value
    };
}

setProperty('studentName', 'როინი ვეკუა')

setProperty("paydVolum", 900);

console.log(studentObject);















//

// let row, col, n = 5
// let pat = ""

// for (let row = 1; row <= n; row++) {
//     for (let col = 1; col <= row; col++) {
//         pat += `${row}`;
//     }

//     pat += '\n';
// }
// console.log(pat)



// for (let row = n - 1; row >= 1; row--) {
//     for (let col = 1; col <= row; col++) {
//         pat += `${row}`;
//     }

//     pat += '\n';
// }

// console.log(pat)



