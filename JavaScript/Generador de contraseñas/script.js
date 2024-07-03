let characterType1 = ["!","·","$","#","&","?"];
let characterType2 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let characterType3 = [1,2,3,4,5,6,7,8,9,0];
let password = [];

const resultado = document.querySelector("#resultado");

while (password.length < 9) {
    password.unshift(characterType1[Math.floor(Math.random() * characterType1.length)]);
    password.unshift(characterType2[Math.floor(Math.random() * characterType2.length)]);
    password.unshift(characterType3[Math.floor(Math.random() * characterType3.length)]);
}

resultado.innerText = password;
