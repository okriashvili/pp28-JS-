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
        
        passMSG = document.getElementById("passMSG");
        passMSG.style.display = "block";
        passMSG.textContent = "Enter your password!";
        passMSG.style.top = "-15px";
        passMSG.style.right = "80px";

        return false;
    }

}

// setTimeout(formValidate, 3000)
// window API 
// setTimeOut - takes to argument
// 1st is the function
// 2nd is the amount of time
// setTimeOut delays the function, as much time as we'll give in paramener
// and after that time, the function will be executed
