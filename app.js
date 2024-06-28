function validateText(text) {
    var regex = /[áéíóúÁÉÍÓÚÜA-Z]/;
    let isValid = true;
    if (regex.test(text)) {
        alert("El texto ingresado es invalido")
        isValid = false;
    }
    return isValid;
}

function encryptText() {
    var div = document.getElementById('result');
    let text = document.getElementById('text').value;

    if (validateText(text)) {
        let textEncrypted = text.replace(/a/gi, "aml")
                                .replace(/o/gi, "ozty")
                                .replace(/e/gi, "enero")
                                .replace(/i/gi, "ilty")
                                .replace(/u/gi, "ulr");
        div.innerHTML = getText(textEncrypted);
    }
}

function decryptText() {
    var div = document.getElementById('result');
    let text = document.getElementById('text').value;

    if (validateText(text)) {
        let textDecrypted = text.replace(/aml/gi, "a")
                            .replace(/enero/gi, "e")
                            .replace(/ilty/gi, "i")
                            .replace(/ozty/gi, "o")
                            .replace(/ulr/gi, "u");
        div.innerHTML = getText(textDecrypted);
    }
}

function getText(text) {
    return `<div class="text-procesed">
            <p id="copy-text">${text}</p>
            <button class="copy" onclick="copyText()">Copiar</button>
        </div>`
}

function copyText() {
    var text = document.getElementById('copy-text');
    var range = document.createRange();
    range.selectNode(text);
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range); 
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    // Clean the output div
    var div = document.getElementById('result');
    div.innerHTML = setDefaultContent();

    // Clean the input
    var input = document.getElementById('text');
    input.value = "";
}

function setDefaultContent() {
    return `<div class="text-transformed" id="result">
                <img src="./assets/muneco.png" alt="">
                <div class="message">
                    <p class="no-message">Ningún mensaje fue encontrado</p>
                    <p>Ingresa el texto que desees encriptar o Desencriptar</p>
                </div>
            </div>`
}