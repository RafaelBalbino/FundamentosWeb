/* Anotações:
 * Variáveis são fracamente tipadas
 * var = Variável global, usada em várias funções e classes
 * let = Variável interna, chamada dentro de uma função/classe
 * caseInsensitive por que não importa se é maiúscula a letra ou não*/

/* 'window.document.querySelector(#nome)' é outra forma de fazer a variável abaixo,
 * chamando algo qualquer (classe, id ou outro atributo), mais usada;
 * 'window' não é necessário para a síntaxe desta função. */

/* Usando essa variável para manipular o input de 'nome' */

var nome = window.document.getElementById("nome")

var nomeOk = false
/* 'boolean' que começa sem nada(false) e/ou inválido. */

var email = window.document.querySelector("#email")
var emailOk = false

var assunto = window.document.querySelector("#assunto")
var assuntoOk = false

/* Primeira validação fofolete que é se colocou o nome certo ou não. */
function validarNome() {
    let txtNome = document.querySelector("#txtNome")

    if(nome.value.length < 2) {
        /* 'innerHTML' transforma uma tag em texto, neste caso, a 'div' */
        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.color = 'red'
        nomeOk = false
    }
    else if(nome.value.length >= 2){
        txtNome.innerHTML = "Belo nome!"
        txtNome.style.color = 'green'
        nomeOk = true
    }
    else if(nome.value.length == 0){
        txtNome.innerHTML = ""
        nomeOk = false
    }
}

/* Validando o e-mail inserido pelo usuário através de caracteres inseridos. */
function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.length < 8) {
        txtEmail.innerHTML = "E-mail inválido!"
        txtEmail.style.color = 'red'
        emailOk = false
    }
    else if(email.value.length >= 8){
        txtEmail.innerHTML = "E-mail fofolete!"
        txtEmail.style.color = 'green'
        emailOk = true
    }
    else if (email.value.length == 0){
        txtEmail.innerHTML = ""
        emailOk = false
    }
}

function validarAssunto() {
    let txtAssunto = document.querySelector("#assunto")

    if(assunto.value.length <= 4) {
        assuntoOk = false
    }
    else {
        assuntoOk = true
    }
}

/* Validando a função acima pra mandar um alerta se não houver nome, assunto 
 * ou e-mail ou se um deles for inválido. */
function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("CAIU NO CONTO!")
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
    else if(nomeOk == false && emailOk == true && assuntoOk == true){
        alert("Mensagem não enviada! Preencha o seu nome corretamente antes!")
    }
    else if(nomeOk == true && emailOk == false && assuntoOk == true) {
        alert("Mensagem não enviada! Preencha o seu e-mail corretamente antes!")
    }
    else if(nomeOk == true && emailOk == true && assuntoOk == false) {
        alert("Mensagem não enviada! Detalha esse assunto melhor antes!")
    }
    else if(nomeOk == false && emailOk == false && assuntoOk == true) {
        alert("Mensagem não enviada! Preencha o seu nome e e-mail corretamente antes!")
    }
    else if(nomeOk == true && emailOk == false && assuntoOk == false) {
        alert("Mensagem não enviada! Preencha o seu e-mail corretamente e detalha esse assunto antes!")
    }
    else if(nomeOk == false && emailOk == true && assuntoOk == false) {
        alert("Mensagem não enviada! Preencha o seu nome corretamente e detalha esse assunto antes!")
    }
    else {
        alert("Mensagem não enviada! Preencha seu e-mail e nome corretamente e detalha esse assunto aí!")
    }
}