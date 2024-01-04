console.log('Rohit Azad');


function genRatePassword(){
    const length = document.getElementById("length").value;
    const uppercase  = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const specractors = document.getElementById("specractors").checked;

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars  = "0123456789";
    const specailChars = "!@#$%^&*()+_-{}[]?/";

    let chars = "";
    let passwrod = "";

    if(uppercase){
        chars +=  uppercaseChars
    }
    if(lowercase){
        chars +=  lowercaseChars
    }
    if(numbers){
        chars +=  numberChars
    }
    if(specractors){
        chars +=  specailChars
    }

    if(chars === ""){
        document.getElementById("password").value = "";
        alert("Please select at least one option")
        return;
    }

    for(let i=0; i < length; i++){
        const reandomIndex = Math.floor(Math.random() * chars.length);
        passwrod+= chars[reandomIndex]
    }
    document.getElementById("password").value = passwrod;
}

document.getElementById("genrate").addEventListener('click', genRatePassword);

document.getElementById("copy").addEventListener('click', function(){
    const passwrodField = document.getElementById("password");
    passwrodField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard")
})

genRatePassword();

const checkBoxInput = document.querySelectorAll("input[type='checkbox']");

checkBoxInput.forEach(function(checkbox){
    checkbox.addEventListener('change', genRatePassword)
})