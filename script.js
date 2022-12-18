//Start of function that validates user input in a form
function validateForm() {

    //Create an array that gets and stores the value of the input fields. 
    var input = [document.getElementById("username"), document.getElementById("password")];
    var errorTxt = document.getElementById("error");
    //Intialize error variable
    var error = 0;


    //Use a loop to validate
    for (var i = 0; i < input.length; i++) {

        //Create a regex that the email and password will be checked against. This is to prevent invalid email addresses from being used
        var emailPattern = /[a-z]{3,10}@gmail|yahoo|mail|hotmail\.com|co\.uk?/;
        var passwordPattern =/[a-z]{3,6}/;
        
        //Using an if statement, check that there are no empty input fields.
        //If any index of the array returns null, the error variable will increase by 1.
        if (input[i].value === "") {
            error ++;
        }
        
        //Using regular expression, check that the email is an actual email and password matches the specified format, then check that the error varible is still 0

        //I have an issue with my password regex. I set the maximum value to be 6 but this statement still returns true for a password that is more than 6
        if (emailPattern.test(input[0].value) && input[1].value.match(passwordPattern) && error === 0){
            alert("Login Successful!");
        }
        else{
            //console.log("Invalid credentials");
            errorTxt.innerHTML = ("Enter a valid email address or password");
        }
        return;
    }
}
