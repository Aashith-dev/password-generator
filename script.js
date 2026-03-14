let passwordHistory=[];

let lengthSlider=document.getElementById("length");
let lengthValue=document.getElementById("lengthValue");

lengthSlider.oninput=function(){
lengthValue.innerText=this.value;
}

function generatePassword(){

let length=document.getElementById("length").value;

let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase="abcdefghijklmnopqrstuvwxyz";
let numbers="0123456789";
let symbols="!@#$%^&*()_+";

let chars="";

if(document.getElementById("uppercase").checked){
chars+=uppercase;
}

if(document.getElementById("lowercase").checked){
chars+=lowercase;
}

if(document.getElementById("numbers").checked){
chars+=numbers;
}

if(document.getElementById("symbols").checked){
chars+=symbols;
}

if(chars===""){
alert("Select at least one option");
return;
}

let password="";

for(let i=0;i<length;i++){
password+=chars.charAt(Math.floor(Math.random()*chars.length));
}

document.getElementById("result").innerText=password;

checkStrength(password);

passwordHistory.unshift(password);

if(passwordHistory.length>5){
passwordHistory.pop();
}

updateHistory();

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

function updateHistory(){

let historyList=document.getElementById("history");

historyList.innerHTML="";

passwordHistory.forEach(function(p){

let li=document.createElement("li");

li.innerText=p;

historyList.appendChild(li);

});

}

function checkUserPassword(){

let password=document.getElementById("userPassword").value;

let score=0;

if(password.length>=8){
score++;
}

if(/[A-Z]/.test(password)){
score++;
}

if(/[a-z]/.test(password)){
score++;
}

if(/[0-9]/.test(password)){
score++;
}

if(/[!@#$%^&*()_+]/.test(password)){
score++;
}

let strength="Weak";

if(score<=2){
strength="Weak";
}
else if(score<=4){
strength="Medium";
}
else{
strength="Strong";
}

document.getElementById("userStrength").innerText="Password Strength: "+strength;

}
