let entrada = document.querySelector("#input");
let saida = document.querySelector("#output");

function criptografar() {
    let texto = entrada.value;
    if (texto.length != 0) {
        let resultado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/a/g, "ai").replace(/u/g, "ufat");

        document.getElementById("output").innerHTML = resultado + '<button onclick="copiar()" class="copiar" id="btn_copiar">Copiar</button>'; 
        let resultadoCopia = resultado;
    } else {
        alert('Nada foi digitado.');
    }
}

function descriptografar() {
    let texto = entrada.value;
    if (texto.length != 0) {
    let resultadoDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ai/g, "a").replace(/ufat/g, "u");
    
    document.getElementById("output").innerHTML = resultadoDescripto + '<button onclick="copiar()" class="copiar" id="btn_copiar">Copiar</button>';
    let resultadoCopia = resultadoDescripto;
    } else {
        alert('Nada foi digitado.');
    }
}

function copiar() {
    let resultadoCopia = document.querySelector("#input");
    resultadoCopia.select();
    document.execCommand("copy");
    alert("Texto descriptografado copiado para a aréa de transferência.");
}