const perguntas = [ //[ ] << Array
    {
        //pergunta e repostas são objetos
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "let",
            "variable",
            "var",
        ],
        correta: 0
    },
    {
        pergunta: "Qual dos seguintes é um tipo de dado em JavaScript?",
        respostas: [
            "Float",
            "String",
            "Double",
        ],
        correta: 1
    },
    {
        pergunta: "Qual destes operadores é usado para comparar igualdade de valor e tipo?",
        respostas: [
            "==",
            "===",
            "=",
        ],
        correta: 1
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
        respostas: [
            "console.log()",
            "print()",
            "log()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual dos seguintes métodos de array remove o último elemento de um array e retorna esse elemento?",
        respostas: [
            "pop()",
            "push()",
            "shift()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método JavaScript é usado para combinar os elementos de um array?",
        respostas: [
            "join()",
            "merge()",
            "concat()",
        ],
        correta: 2
    },
    {
        pergunta: "Qual símbolo é usado para comentários de uma linha em JavaScript?",
        respostas: [
            "//",
            "/*",
            "#",
        ],
        correta: 0
    },
    {
        pergunta: "Qual dos seguintes é um loop de repetição em JavaScript?",
        respostas: [
            "for-each",
            "for-in",
            "for-of",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
        respostas: [
            "Para verificar se um elemento é do tipo 'function'",
            "Para verificar se um elemento é do tipo 'object'",
            "Para retornar o tipo de dados de uma expressão",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
        respostas: [
            "Para adicionar um evento a um elemento HTML",
            "Para adicionar uma função a um evento",
            "Para adicionar um ouvinte de eventos a um objeto",
        ],
        correta: 0
    }
]

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for(const item of perguntas) {

    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector(`h3`).textContent = item.pergunta

    //Resposta
    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))

        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)
                if(estaCorreta) {
                    corretas.add(item)
                }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()

    //Coloca a pergunta na tela
    quiz.appendChild(quizItem)
}