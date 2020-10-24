let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("input#assunto");
let mensagem = document.querySelector("#mensagem");
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mensagemOk = false

nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"

function validarNome() {
    let txt = document.querySelector("#txtNome")
    if (nome.value.length <3){
        txt.innerHTML = 'Nome inválido'
        txt.style.color = "red"
    } else {
        txt.innerHTML = 'Nome válido'
        txt.style.color = "green"
        nomeOk = true
    }
}
function validarEmail(){
    let txt = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}
function validarAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 70){
        txtAssunto.innerHTML = 'Máximo 70 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.innerHTML = ''
        assuntoOk = true
    }
}
function validarMensagem(){
    let txtMensagem = document.querySelector('#txtMensagem')
    if(mensagem.value.length >= 500){
        txtMensagem.innerHTML = 'Máximo 500 caracteres'
        txtMensagem.style.color = 'red'
        txtMensagem.style.display = 'block'
    } else {
        txtMensagem.style.innerHTML = ''
        mensagemOk = true
    }
}
function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true && mensagemOk == true){
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar')
    }
}