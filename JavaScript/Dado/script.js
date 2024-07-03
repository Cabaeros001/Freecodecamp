let caras = 6;
let nDados = 1;
let nVeces = 10;
resultados = []

let textCaras = document.querySelector("#ncaras")
let textDados = document.querySelector("#ndados")
let textVeces = document.querySelector("#nveces")
let textResultados = document.querySelector("#resultados")

function lanzarDado() {
    resultados.push(Math.floor(Math.random() * caras) + 1 + " ");
}
while(resultados.length < nVeces) {
    lanzarDado();

}
textCaras.innerText += " " + caras+ ".";
textVeces.innerText += " " + nVeces + "."; 
textResultados.innerText += " " + resultados + ".";


