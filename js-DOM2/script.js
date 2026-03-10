// the functions to access the elements in html documentation are built inside of "document", so we use document keyword
// therefore we have to call the document first then the functions
let element = document.getElementById("text");
// getElementById is selector helps us to access the element by its #id name
// once we have the element, we can style it from the script or manipulate with it
console.log(element);

// beside getElementById, we have selectors which retrive element by its:
// getElementsByClass - by elements class
// getElementsByTagName - by tag name, which type the tag name, which tag we want to retrive
// getElementsByName - by the 
let elemP = document.getElementsByTagName("p");
console.log(elemP);
// keep in mind, class, name and tagname comes with getElements with s, plural
// therefore if we log returve item, it will append them in list
// f.e if we retrive elements with p tag, they will be aranged in list
// unlike ID, will retrive only one element 
let elem = document.getElementsByName("div");
console.log(elem);



// we can use the variable in which we save the retrived element
// then write the style keyword, and atrubute what we want to change  
element.style.fontSize = "20px";
element.style.color = "red";
element.style.backgroundColor = "wheat";


// innerHTML changes the input of element and replaces is with the one we assing.
element.innerHTML = "about us";


// if we want to retrieve the HTML body, we have built in document.body
body = document.body
// therefore we can manipulate the body, f.e by changing the bg color
body.style.backgroundColor = "wheat"


pElements = document.getElementsByTagName("p");
console.log(pElements);
// styling the elements retrieved by class name or tag names are different
// once they are retrieved, they are appended to the list, 
// therefore we can style the by using their index, otherwise CP will get confused
// of which element are we trying to style 
pElements[1].innerHTML = "contact us";
// as above, we can use the index to access specoiofic element and style it

// or we can use for loop and acces each element like so
for(let i = 0; i < pElements.length; i++) {
    // console.log(pElements[i]);
    if (i % 2 == 0) {
        pElements[i].style.color = "green";
        pElements[i].innerHTML = i;

    } else {
        pElements[i].style.color = "red";
        pElements[i].innerHTML = i;
    }

}
// since we can use for loop on elements, we can use the if statement so/

 



// generate different random colors on div classed containet each time
function genColor() {
    col1 = (Math.random() * 255 + 1).toFixed();
    col2 = (Math.random() * 255 + 1).toFixed();
    col3 = (Math.random() * 255 + 1).toFixed(); 

    return `rgb(${col1} ${col2} ${col3})`;

}


divContainer = document.getElementsByClassName("container");

for (let i = 0; i < divContainer.length; i++) {
    divContainer[i].style.backgroundColor = genColor();
    divContainer[i].style.width = `150px`;
    divContainer[i].style.height = `150px`;
}

// querySelector - is the another way to retrive the elements
// it addes every retrieved elemen in list, even if we retrieve one element 
// its also built in document, so whenever we want to use query selector
// we must write the document keyword before

// queryselector has different selectors builtinside 
el = document.querySelectorAll("p");

// querySelectorAll - retrive all items by given value
// if we want to retrive by class name we must write it with dot
// querySelectorAll(".className") - in a same way we use classes in the css file
console.log(el);

idSelected = document.querySelectorAll("#text");
console.log(idSelected);
// even tough we retrived it with id#, 
// it adds retrieved elements inside the cycle(list) 
// therefore if we want to manipulate it we must use index
idSelected[0].style.color = "red";

// querySelectorAll return the all the element it will meet in html documentation
// but, querySelector return first eleent it meets
oneElement = document.querySelectorAll("p");
// since query selector, only retrieves one element, it doesn't adds to cycle
// therefore we don't need tpp use index to style element with querySelector
console.log(oneElement);
oneElement[0].style.color = "green";


// not only styling the elements from JS file, 
// we can also add new class to element 
oneElement[1].classList.add("pText");
// we add class on second but indexed 1 p element
// then we retrieved that exact element by newly added class
pText = document.getElementsByClassName("pText");
console.log(pText);

// even that elements index was 1 in above, 
// since we retrieved that element, it apended it to new list,
//  therefore we use index 0 to style it
pText[0].style.color = "purple"
pText[0].style.fontSize = "25px"









// event listeners in DOM
// event listeners in JS adds some event to elements
// f.e: we can add some function or event when we click that specific element
// with click or another way(onmouseover(works like hover) on elemment or double click and so on)
// they are built in and they start with on - keyword
// then comes the atribute name what we want to to
// onclick or ondbclick or onhoover 

divContainer = document.getElementById("divContainer");
// we used the functioned created above, which generated random rgb numbers to turn them into color
// then we use onclick event listeners and did some manipulation on div container
// we built button which creates the div box
// second button deletes the box
function changeColorOnClick() {
    divContainer.style.width = "100px";
    divContainer.style.height = "100px";
    divContainer.style.backgroundColor = genColor();
}

removeButton = document.getElementById("removeButton")
function removeDiv() {
    divContainer.style.width = "0px";
    divContainer.style.height = "0px";
    divContainer.innerHTML = removeButton
}




hooverText = document.getElementById("text");
// append is used to add value to the elements, it won't rewrites whole element,
// but it will adds it to the side
function addText() {
    hooverText.append("hello world");
}

// with the same way we can manipulate the button, we can work with input text
// for that we use the onkeypress or onkeyup and so on



submitButton = document.getElementById("submitButton");
submitButton.style.backgroundColor = "green";


submitText = document.getElementById("submitText");

function submitForm() {
    submitText.style.color = "green";
    submitText.style.fontSize = "15px";
    submitText.textContent = "application is sent succesfully";
}




// change contect 
// in order to change the element content we use textContent or innerText
aboutus = document.getElementById("aboutus");
function changeContent() {
    input = document.getElementById("forma")

    inputContent = input.innerHTML
    aboutus.textContent = inputContent
    // aboutus.innerText = "please check your mail, we sent you the information link";

}
// both does same job, but as we know each tags in html have a  function on its own
// f.e h tags are used for titles, p tag is used for paragraph
// textContent and innerText are losing those functions to element when they are changing contect

// but if we don't want to lose those function, we might use innerHTML which maintains the tags functionality

// 
// if we want to access the element content we can save innerHTML inside the variable and use that variable
// f.e
paragraph1Content = document.getElementById("paragraph1");
paragraph2Content = document.getElementById("paragraph2");
content = paragraph1Content.innerHTML

function displayContent() {
    paragraph2Content.innerText = "fu ra yveri xaar ici"
}

function hideContent() {
    paragraph2Content.textContent = ""
}



// lets calculate the how many times we click on button tag
num = 0;
function increase() {
    count = document.getElementById("count");
    
    num++
    count.innerHTML = num;
}

function decrease() {
    count = document.getElementById("count");
    
    num--
    count.innerHTML = num;
    if (num < 1) {
        count.innerHTML = 0;         
    }
}

// // hoemwork about the dom
// // Html კოდში მოცემულია 2 აბზაცი. querySelector–ის გამოყენებით მიიღეთ პირველი აბზაცის ბმული დივიდან
// // რომლის id-ია "twoParagraphs". მიღებული შედეგი კონსოლზე გამოვიტანოთ.
let divParagraph = document.querySelector("#twoParagraphs p"); // we can assing child parent parameters in DOM, same as we were doing with css selectors to select children element
divParagraph.style.color = "red"
console.log(`this is ${divParagraph}`);




// Html კოდში მოცემულია 2 აბზაცი. querySelector–ის გამოყენებით მიიღეთ პირველი აბზაცის ბმული რომლის
// კლასია "p". მიღებული შედეგი კონსოლზე გამოვიტანოთ.
firstParagraph = document.querySelector(" .p");
firstParagraph.style.color  = "green"
// console.log(firstParagraph)


/* მოცემულია 3 ღილაკი. ყოველი ღილაკის დაკლიკებაზე კოსოლზე გამოიტანეთ შესაბამისი შეტყობინება
'პირველი ღილაკი', 'მეორე ღილაკი', 'მესამე ღილაკი'. მინიშნება: ყველა ღილაკისთვის გამოაცხადეთ
ცვლადები, რომლებშიც querySelector–ის გამოყენებით ჩაწერეთ შესაბამისი ღილაკების ბმულები. ამ ცვალდებს
გაუწერეთ addEventListener, რომელიც ღილაკის დაკლიკებაზე კონსოლზე გამოიტანს შესაბამის ტექსტს. */ 

let button_1 = document.getElementById("button_1");
let p1 = document.getElementById("p1");
function changep1() {
    p1.textContent = "ღილაკი 1";
}

let button_2 = document.getElementById("button_2");
let p2   = document.getElementById("p2");
function changep2() {
    p2.textContent = "ღილაკი 2";
}

let button_3 = document.getElementById("button_3");
let p3 = document.getElementById("p3");
function changep3() {
    p3.textContent = "ღილაკი3";
}



// 6
result = document.getElementById("result");
function sum() {
    result.innerHTML = 4;
}

function multiplication() {
    result.innerHTML = 9;
}

function devide() {
    result.innerHTML = 1;
}


// 7
elem1 = document.getElementById("elem1");
elem2 = document.getElementById("elem2");
elem3 = document.getElementById("elem3");

function myFunc1() {
    message = "საინტერესო შეტყობინება";
    elem1.innerHTML = message;
}

function myFunc2() {
    message = "საინტერესო შეტყობინება";
    elem2.innerHTML = message;
}

function myFunc3() {
    message = "საინტერესო შეტყობინება";
    elem3.innerHTML = message;
}


// 8
let btn = document.getElementById('button')
let p = document.getElementById("btn")
click = 0
function func() {
    click++
    if (click == 1) {
        p.textContent = "საინტერესო შეტყობინება"
    } else {
        p.textContent = 'სუპერ ღილაკზე მოხდა დაკლიკება';
    }
}
    
    
// 9
n = 0;
function myTextFunc() {
    myText = document.getElementById("myText");
    n++
    if (n == 1) {
        myText.textContent = "შეტყობინება1";
    } else if(n == 2) {
        myText.textContent = 'შეტყობინება2';
    } else {
        myText.textContent = 'შეტყობინება3';
    }
}


// 10

function eventMouseOver () {
    let ptext = document.getElementById("event");  
    ptext.innerText = "სუპერ ღილაკზე მოხდა მაუსის გადატარება";
}

function eventMouseLeave() {
    let ptext = document.getElementById("event");  
    ptext.textContent = "სუპერ ღილაკზე მოხდა მაუსის გამოტანა"
}

 


// JS DOM manipulation part 2








// working withs input, retrive the data we typed in input
// at the end of selector or variable we
nameInput = document.getElementById("nameInput");
lastNameInput = document.getElementById("lastNameInput");

function validateEmail() {
    mailInput = document.getElementById("emailInput");
    msg = document.getElementById("msg");
    if (mailInput.value.includes("@")) {
        msg.textContent = "";
        
    } else {
        console.log("else block works");
        msg.textContent = "please enter valid email";
        msg.style.display = "inline-block";
    }
}


// create calculator
// numbers
function one() {
    value = document.getElementById("value").value += 1;
}

function two() {
    value = document.getElementById("value").value += 2;
}

function three() {
    value = document.getElementById("value").value += 3;
}

function four() {
    value = document.getElementById("value").value += 4;
}

function five() {
    value = document.getElementById("value").value += 5;
}

function six() {
    value = document.getElementById("value").value += 6;
}

function seven() {
    value = document.getElementById("value").value += 7;
}

function eight() {
    value = document.getElementById("value").value += 8;
}

function nine() {
    value = document.getElementById("value").value += 9;
}

// mathmatical expressions
function add() {
    value = document.getElementById("value").value += "+";
}

function subtract() {
    value = document.getElementById("value").value += "-";
}   

function multiply() {
    value = document.getElementById("value").value += "*";
}   

function devide() {
    value = document.getElementById("value").value += "/";
}   

// calculate the result of the expression using eval function
function result() {
    // eval function helps us to calculate the mathematical expression, 
    // which is written in input, and gives us the result
    // so we don't have to write the function for each mathematical operation, 
    // we can just write the expression in input and get the result with eval function
    value = document.getElementById("value").value;
    window.alert(eval(value));
    document.getElementById("value").value = "";

}

// clear the input value
function rem() {
    document.getElementById("value").value = "";
    // remove the enterd value in input, and make it empty again
}





// createElement from Jacascript, append in HTML and create event listeners on that element
function createDivElement() {
    // // document.body.style.backgroundColor = "red"
    htmlBody = document.body;
    createdDiv = document.createElement("div");
    // createdDiv.style.display = "flex";
    // createdDiv.style.alignItems = "center"
    // createdDiv.style.justifyContent = "center"

    createdDiv.style.position = "absolute";
    createdDiv.style.width = "400px";
    createdDiv.style.height = "400px";
    createdDiv.style.backgroundColor = "black";
    createdDiv.style.display = "flex";
    createdDiv.style.alignItems = "center";
    createdDiv.style.justifyContent = "center";

    // created element we can append to the body, with appendChild method 
    htmlBody.appendChild(createdDiv);
    // if we appened  in body, it will appened in the last place
    //  or we can appened into any element we want
    // for that we need to access on that element

    // setAttribute allows us to set attribute for created element
    // since we create element in js, we can't manually set attribute on that element from HTM file(like class, id, name and so on)
    createdDiv.setAttribute("class", "jsDiv");
    // now, our created element has class named jsDiv, now we can select that element by classname
    jsDiv = document.getElementsByClassName("jsDiv");
    // jsDiv[0].style.backgroundColor = "red";
    console.log(jsDiv.innerHTML)

    // setAttribute takes two argument:
    // 1st is attribute, which attribuyte are we gonna set
    // 2nd, attribute name 


    // we created the element and append in HTML documentation
    // now, we can create the event on that element
    // we have two approach:
    // call the event name on the variable
    // equalize it to function, we can use arrow function as well
    // myFunc = function() {window.alert("hello world")}

    // 2nd - use the addEventLitsener() keyword and create event
    // createdDiv.addEventListener("onclick", function() {window.alert("hello world"), console.log("event")})
// createdDiv.addEventListener("click", function() {return window.alert("hello world")});
    // addEventListener takes two argument:
    // 1st is the event name, which event must create and execute
    // 2nd is function, we can create function inside the brackets or use premade
    // I mostly use the arrowfunction inside/ 


    // now lets create new element inside the JS element
    childElement = document.createElement("div");
    childElement.style.width = "300px";
    childElement.style.height = "300px";
    childElement.style.display = "flex";
    childElement.style.justifyContent = "center";
    childElement.style.alignItems = "center";

    childElement.style.backgroundColor = "blue";
    createdDiv.appendChild(childElement);


    // element in childElement
    grandChildElement = document.createElement("div");
    grandChildElement.style.width = "200px";
    grandChildElement.style.height = "200px";
    grandChildElement.style.display = "flex";
    grandChildElement.style.backgroundColor = "yellow";
    grandChildElement.style.justifyContent = "center";
    grandChildElement.style.alignItems = "center";
    childElement.appendChild(grandChildElement);
}




















// form validation using DOM manipulation and built in form validation functions
function validateForm() {
    // in order to access the input value, 
    // 1: we can use the value keyword, which is built in for input elements
    mailValue = document.getElementsByName("email")[0].value;
    // since we use ElementByName we need to use index, to retrive the element
    window.alert(mailValue);
    console.log(mailValue);


    // 2: or we can use the form itself
    window.alert(document.forms["form"]["email"].value);
    // we use document.forms which is built in object
    formMailValue = document.forms["form"]["email"].value;
    // it takes two argument: 
    // first is the form name, which is typed in [""] square braces
    // second is the input name which we want to retrieve
    // and lastly we must write use the - value - object
    window.alert(document.forms["form"]["email"].value);
    window.alert(formMailValue);
}


// classwork about formValidation, we gonna use the same HTML file and we will work on that
function formValidation() {
    formEmail = document.getElementsByName("email")[0];
    var mailValid;

    if (formEmail.value == "") {
        mailMSG = document.getElementById("mailMSG");
        mailMSG.textContent = "please input your mail";
        mailMSG.style.color = "red";
        mailMSG.style.fontSize = "10px";
        mailMSG.style.display = "block";
        return false
    } else {
        mailMSG.style.display = "none";
        var mailValid = true;
    }


    formPassword = document.getElementsByName("password")[0];


    var passwordValid;

    if (formPassword.value.length < "8") {
        passwordMSG = document.getElementById("passwordMSG");
        passwordMSG.textContent = "password must contain at least 8 character";
        passwordMSG.style.color = "red";
        passwordMSG.style.fontSize = "10px";
        passwordMSG.style.display = "block";
        return false

    } else {
        passwordMSG.style.display = "none"
        var passwordValid = true;
    }

    if (mailValid && passwordValid) {
        loginMSG = document.getElementById("loginMSG");
        loginMSG.textContent = "welcome to page";
        loginMSG.style.color = "green";
        loginMSG.style.display = "block";
        // alert("welcome");
        return false;

    }

}




// working with files
function openFile(event) {
    
    // event.target returns the html element, on which the function was executed
    // event is given as function parameter, once executed it will take the exact html element as argument on which the function executed 
    targetElement = event.target;
    // target it keyword but event is parameter given to function
    console.log(targetElement);

    // if we want to retrive the opened file, we use the files keyword at the end of it
    // also we use the index, because if we have used multiple keyword, which as we kow allows the user to open more than 1 file
    // without index it returns the list of htmlcollections
    // we use the index to retrive specific file from that list 
    targetElementFile = event.target.files[0];
    console.log(targetElementFile);
    // opened file also returns the object, key : value 
    // which means that we can also retrive specific key from object 
    

}



// dom part2/3 homework


function formValidate() {

    userName = document.getElementsByName("userName")[0].value;
    if (userName == "" ) {
        nameMSG = document.getElementById("nameMSG");
        bothInvalid = document.getElementById("bothInvalid");
        bothInvalid.textContent = "Invalid username or password. Please try again.";
        
        nameMSG.style.display = "block";
        nameMSG.textContent = "Enter your username!";
        nameMSG.style.top = "-15px";
        nameMSG.style.right = "80px";

        return false;
    } 

    password = document.getElementsByName("password")[0].value;
    if (password == "" ) {
        nameMSG.style.display = "none";
        
        password = document.getElementById("passMSG");
        password.style.display = "block";
        password.textContent = "Enter your password!";
        password.style.top = "-15px";
        password.style.right = "80px";

        return false;
    }
}




























































