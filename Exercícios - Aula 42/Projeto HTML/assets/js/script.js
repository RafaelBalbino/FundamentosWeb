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
/* 'boolean' que começa sem nada(false) e/ou inválido */

/* Primeira validação fofolete */
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

/* Validando a função acima pra mandar um alerta se não houver nome ou for inválido */
function enviar() {
    if(nomeOk == true) {
        alert("CAIU NO CONTO!")
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
    else {
        alert("Mensagem não enviada! Preencha o seu nome corretamente antes!")
    }
}