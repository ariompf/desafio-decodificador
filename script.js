//const texto_input = document.querySelector("#texto-input"); 
//const texto_output = document.querySelector("#texto-output");

let matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function botao_criptografar(){}

function botao_descriptografar(){}



function criptografar(string) {
    const resultado = string
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
    return resultado;
}

function descriptografar(string) {
    const resultado = string
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
    return resultado;
}




/* Bloco de Teste para Criptografar e Descriptografar 
let test = "texto de teste a e i o u";
let testout = "tenterxtober denter tenterstenter ai enter imes ober ufat"
console.log(test);
console.log(criptografar(test));
console.log(descriptografar(test)); */