let res = document.getElementById('res')

function Calcular(){
let nome = window.prompt('Qual é o nome do aluno?')
let prinota = Number.parseFloat(window.prompt('Primeira nota de ' + nome + ':'))
let segunota = Number.parseFloat(window.prompt('Primeira nota de ' + nome + ':'))

let media = (prinota + segunota) / 2

res.innerHTML = ''
res.innerHTML += '<h2>Analisando a situação de ' + nome
res.innerHTML += '<p>Com as notas ' + prinota + ' e ' + segunota + ', a <strong>média é ' + media + '</strong>'

if ( media <= 3) {
    res.innerHTML += '<p>Com a média abaixo de ' + media + ', o aluno está <mark id = "reprovado"><strong>REPROVADO</strong></mark></p>'
} if ( media > 3 && media <= 6) {
    res.innerHTML += '<p>Com a média entre 3,0 e 6,0, o aluno está em <mark id = "recuperacao"><strong>RECUPERAÇÃO</strong></mark></p>'
} if (media > 6) {
    res.innerHTML += '<p> Com a média acima de 6,0, o aluno está <mark id = "aprovado"><strong>APROVADO</strong></mark></p>'
}
    
} 

