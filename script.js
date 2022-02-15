let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Dentro de qual elemento HTML colocamos o JavaScript ?",
    alternativaA : "<script>",
    alternativaB : "<js>",
    alternativaC : "<javascript>",
    correta      : "<script>",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual é a sintaxe JavaScript correta para alterar o conteúdo do elemento HTML abaixo?<p id='demo'>Esta é uma demonstração.</p>",
    alternativaA : "document.getElementById('demo').innerHTML = 'hello word' ",
    alternativaB : "#demo.innerHTML = 'hello world'",
    alternativaC : "alert('hello world)",
    correta      : "document.getElementById('demo').innerHTML = 'hello word' ",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Qual a diferença entre = , == e === ?",
    alternativaA : "O = é sinal de atribuição de valor. já == verifiva se são identicos. Já === verifica se são identicos e atribui valor ",
    alternativaB : "O = significa atribuição de valor. Já == verifica a igualdade do valor, enquanto === verifica valor e tipo de variável",
    alternativaC : "O = compara. == verifica se são iguais. === atribui valor ",
    correta      : "O = significa atribuição de valor. Já == verifica a igualdade do valor, enquanto === verifica valor e tipo de variável",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "O que “1” + 2 + 4 retorna? E 5 + 4 + “3” ?",
    alternativaA : "Como  1 é uma string, ele concatena com 2+4 resultado 16.No segundo caso, o resultado é 93, 5 + 4 = 9 + string “3”",
    alternativaB : "Tudo vira string ao invez de somar vão concatenar. Primeiro resultado 124, Segundo resultado 543",
    alternativaC : "Como 1 é uma string, tudo é uma string, então o resultado é 124. No segundo caso, o resultado é 93, 5 + 4 = 9 + string “3”",
    correta      : "Como 1 é uma string, tudo é uma string, então o resultado é 124. No segundo caso, o resultado é 93, 5 + 4 = 9 + string “3”",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Que tipos de dados são suportados em JavaScript?",
    alternativaA : "String, Number, Boolean",
    alternativaB : "String, Number, null, undefined, boolean",
    alternativaC : "String, Number, null,",
    correta      : "String, Number, null, undefined, boolean",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}