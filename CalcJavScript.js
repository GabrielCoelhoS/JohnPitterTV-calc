menu = 0 
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