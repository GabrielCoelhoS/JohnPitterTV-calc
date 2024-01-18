var menu = 0
var bnt1 = document.querySelector('#button1')
var bnt2 = document.querySelector('#button2')
var bnt3 = document.querySelector('#button3')
var bnt4 = document.querySelector('#button4')
var telaInicial = document.querySelector('telaInicial')
var ValorInicial = document.querySelector('ValorInicial')
var Rodadas = document.querySelector('Rodadas')
var Especial = document.querySelector('Especial')
ValorInicial.style.display = none
Rodadas.style.display = none
Especial.style.display = none
function exibicaoRodadas (){
    valorTotal = 0
    contador = 0 
    valorRodada = valorInicial
    console.log("Rodada | Valor apostado | Valor total | Lucro | Chance de Derrota")
    while contador < quantidadeRodadas{
        contador = contador + 1
        valorTotal += valorRodada
        chanceDerrotanessaRodada = chanceDerrotaUmaRodada**contador
        console.log(contador, " | ", valorRodada, " | ", valorTotal, " | ", valorRodada*multiplicadorGanho-valorTotal, " | ", Math.round(chanceDerrotanessaRodada * 100, -3), "%")
        valorRodada = int(valorRodada*Multiplicador)
    }
}
function valorInicialfuncao(MultiplicadorFuncao):
    if MultiplicadorFuncao == 1 || MultiplicadorFuncao == 2 || MultiplicadorFuncao == 3 || MultiplicadorFuncao == 4 {
        Valorinicialf = 1
    }
    else if MultiplicadorFuncao == 1.08{
        Valorinicialf = 13
    }
    else if MultiplicadorFuncao == 1.1{
        Valorinicialf = 10
    }
    else if MultiplicadorFuncao == 1.2{
        Valorinicialf = 5
    }
    else if MultiplicadorFuncao == 1.3{
        Valorinicialf = 4
    }
    else if MultiplicadorFuncao == 1.4{
        Valorinicialf = 3
    }
    else{
        Valorinicialf = 2
    }
    return Valorinicialf