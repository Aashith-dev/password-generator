function generatePassword(){

let length=document.getElementById("length").value;

let chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

let password="";

for(let i=0;i<length;i++){

password+=chars.charAt(Math.floor(Math.random()*chars.length));

}

document.getElementById("result").innerText=password;

checkStrength(password);

}

function copyPassword(){

let text=document.getElementById("result").innerText;

navigator.clipboard.writeText(text);

alert("Password copied!");

}

function checkStrength(password){

let strength="Weak";

if(password.length>=8){
strength="Medium";
}

if(password.length>=12){
strength="Strong";
}

document.getElementById("strength").innerText="Strength: "+strength;

}

function toggleMode(){

document.body.classList.toggle("light");

}
