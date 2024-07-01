const prompt = require("prompt-sync")({sigint: true});
let numero= prompt("Digite um número e vou dizer qual o maior número possivel");
let algarismo= numero.split("");
console.log("números: ",algarismo);

function maior() {
    return parseInt(algarismo.sort((a, b) => b - a).join(""))
}let maiorM=maior(algarismo)
console.log(maiorM);