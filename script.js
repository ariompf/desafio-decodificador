const textoInput = document.querySelector(".texto-input"); 
const textoOutput = document.querySelector(".texto-output");


function botao_criptografar(){
    const textoCriptografado = criptografar(textoInput.value);
    textoOutput.value = textoCriptografado;
    textoInput.value = "";
}

function criptografar(stringCriptografada) {
    let matriz_code = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase()
    for(let i = 0; i < matriz_code.length; i++){
        if(stringCriptografada.includes(matriz_code[i][0])){
            stringCriptografada = stringCriptografada.replaceAll(matriz_code[i][0], matriz_code[i][1]);
        }
    }
    return stringCriptografada
}

function botao_descriptografar(){
    const textoDescriptografado = descriptografar(textoInput.value);
    textoOutput.value = textoDescriptografado;
    textoInput.value = "";
}

function descriptografar(stringDescriptografada){
    let matriz_code = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase()
    for(let i = 0; i < matriz_code.length; i++){
        if(stringDescriptografada.includes(matriz_code[i][1])){
            stringDescriptografada = stringDescriptografada.replaceAll(matriz_code[i][1],matriz_code[i][0]);
        }
    }
    return stringDescriptografada
}

function botao_copiar(){
    const textoCopiar = document.getElementById("texto-output");
    textoCopiar.select();
    textoCopiar.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoCopiar.value);
    alert("Copiado: " + textoCopiar.value);
}

/* function criptografar(string) {
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

 Bloco de Teste para Criptografar e Descriptografar 
let test = "texto de teste a e i o u";
let testout = "tenterxtober denter tenterstenter ai enter imes ober ufat"
console.log(test);
console.log(criptografar(test));
console.log(descriptografar(test)); */