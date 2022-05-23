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

/* Primeira validação fofolete que é se colocou o nome certo ou não. */
function validarNome() {
    let txtNome = document.querySelector("#txtNome")

    if(nome.value.length < 2) {
        /* 'innerHTML' transforma uma tag em texto, neste caso, a 'div' */
        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.color = 'red'
        nomeOk = false
    }
    else{
        txtNome.innerHTML = "Belo nome!"
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

/* Validando o e-mail inserido pelo usuário através de caracteres inseridos. */
function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.length < 7) {
        txtEmail.innerHTML = "E-mail inválido!"
        txtEmail.style.color = 'red'
        emailOk = false
    }
    else {
        txtEmail.innerHTML = "E-mail fofolete!"
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

/* Validando a função acima pra mandar um alerta se não houver nome ou for inválido */
function enviar() {
    if(nomeOk == true && emailOk == true) {
        alert("CAIU NO CONTO!")
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
    else if(nomeOk == false && emailOk == true){
        alert("Mensagem não enviada! Preencha o seu nome corretamente antes!")
    }
    else if(nomeOk == true && emailOk == false) {
        alert("Mensagem não enviada! Preencha o seu e-mail corretamente antes!")
    }
    else {
        alert("Mensagem não enviada! Preencha o seu nome e e-mail corretamente antes!")
    }
}

