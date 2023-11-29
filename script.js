function trocaTexto1() {
    var novoTelefone = "(99) 99999-9999";
    var textElement = document.getElementById("verTelefone1");
    textElement.innerHTML = novoTelefone;
    textElement.style.textDecoration = "none";
    textElement.style.color = "#FE6613";
    textElement.style.fontSize = "12px";
    textElement.style.fontWeight = "bold"; 
  }

function trocaTexto2() {
    var novoTelefone = "(99) 99999-9999";
    var textElement = document.getElementById("verTelefone2");
    textElement.innerHTML = novoTelefone;
    textElement.style.textDecoration = "none";
    textElement.style.color = "#FE6613";
    textElement.style.fontSize = "12px";
    textElement.style.fontWeight = "bold"; 
}

const cpfInput = document.getElementById("cpf");
cpfInput.addEventListener("keypress", () => {
    let inputlength = cpfInput.value.length;

    if (inputlength === 3 || inputlength === 7) {
        cpfInput.value += '.'
    } else if (inputlength === 11) {
        cpfInput.value += '-'
    }
})

const telInput = document.getElementById("telefone");
telInput.addEventListener("keypress", () => {
    let inputlength = telInput.value.length;

    if (inputlength === 0) {
      telInput.value += '('
    } else if (inputlength === 3) {
      telInput.value += ') '
    } else if (inputlength === 9) {
        telInput.value += '-'
    }
});

function exibirMensagem() {
    alert("Mensagem enviada");
}

function realizaCalculo() {
    var valor1 = parseFloat(document.getElementById("primeiroValor").value);
    var valor2 = parseFloat(document.getElementById("segundoValor").value);
    var valor3 = parseFloat(document.getElementById("terceiroValor").value);
    var resultado = document.getElementById("result");
    
        if (!isNaN(valor1) && !isNaN(valor2) && !isNaN(valor3)) {
            var resultadoCalculo = (valor3 * valor2) / valor1;
            resultado.value = resultadoCalculo.toFixed(2);
        } else {
            resultado.value = "Valores inválidos";
        }

}

const buttonModel = document.getElementById("buttonModel");
const modal = document.getElementById("dialogModal");
const buttonClose = document.getElementById("buttonClose");

buttonModel.onclick = function() {
    modal.showModal();
}

buttonClose.onclick = function() {
    modal.close();
}

function abrirMenu() {
    menuLateral.style.display="flex";
}

function print() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
        const downloadLink = document.createElement('a');
        downloadLink.href = canvas.toDataURL('image/png');
        downloadLink.download = 'screenshot.png';
        downloadLink.click();
  });
}