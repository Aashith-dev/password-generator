function generatePassword(){

let length = document.getElementById("length").value;

let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

let password = "";

for(let i=0;i<length;i++){
password += characters.charAt(Math.floor(Math.random()*characters.length));
}

document.getElementById("result").innerText = password;

}
