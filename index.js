// function for validation of the entire form
function formValidate(){

    // for getting the id from Name input and regex
    let customerName = document.getElementById("id-name");
    let permissibleCharsInName = /^[A-Za-z ]+$/;

    // for getting the id from Address input and regex
    let customerAddress = document.getElementById("id-address");
    let permissibleChars = /^[A-Za-z0-9 ,./_-]+$/;


    // for getting id from phoneNumber and regex
    let mobileNumber = document.getElementById("id-phone");
    let permissibleDigits = /^[0-9]+$/;


    let emailId = document.getElementById("id-email");
    let permissibleEmail = /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    //condition to validate name
    if(customerName.value.trim()=="" || !customerName.value.match(permissibleCharsInName)){
        alert("Enter a valid name");
        return false;
    }

    //condition to validate address
    else if(customerAddress.value.trim()=="" || !customerAddress.value.match(permissibleChars)){
        alert("Enter a valid address");
        return false;
    }


    //condition to validate mobile number
    else if(mobileNumber.value.trim()=="" || (!mobileNumber.value.match(permissibleDigits) || mobileNumber.value.length!=10)){
        alert("10 Digits Only");
        return false;
    }

    else if(emailId.value.trim()=="" || !emailId.value.match(permissibleEmail)){
        alert("Enter a valid email id");
        return false;
    }

    else{
        return true;
    }

    
}


// for the page after initial validation
function validityCheck(){

    //to get id of payment
    let selectOption = document.getElementById("id-payment");

    // to get type of pizza using name and for loop for iterating upto the number of radio options
    var typeOfPizza = document.form.Pizza;
    var valid = false;
    for(var i=0; i<typeOfPizza.length; i++){
        if(typeOfPizza[i].checked){
            valid=true;
            break;
        }
    }

    // to get size of pizza using name and for loop for iterating upto the number of radio options
    var sizeOfPizza = document.form.pizzaSize;
    var valid1 = false;
    for(var j=0; j<sizeOfPizza.length; j++){
        if(sizeOfPizza[j].checked){
            valid1=true;
            break;
        }
    }

    // to get crust type of pizza using name and for loop for iterating upto the number of radio options
    var crustType = document.form.Crust;
    var valid2 = false;
    for(var k=0; k<crustType.length; k++){
        if(crustType[k].checked){
            valid2=true;
            break;
        }
    }

    //to get id of checkbox
    let checkOption = document.getElementById("check");


    // for validating drop down payment options
    if(selectOption.value==""){
        alert("You must select a payment method");
        return false;
    }

    // for validating type of pizza using radio
    else if(!valid){
        alert("You must select the type");
        return false;
    }

    // for validating size of pizza using radio
    else if(!valid1){
        alert("You must select a particular size");
        return false;
    }

    // for validating crust type of pizza using radio
    else if(!valid2){
        alert("You must select a the kind of crust");
        return false;
    }

    // for validating the coupon code
    // else if()

    // for validating checkbox
    else if(!checkOption.checked){
        alert("You must agree to the terms first");
        return false;
    }

    else{
        return true;
    }
}

 