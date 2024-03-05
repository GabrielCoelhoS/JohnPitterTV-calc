var bntValorInicial = document.querySelector('#button1')
var bntRodadas = document.querySelector('#button2')
var bntEspecial = document.querySelector('#button3')
var divTelaInicial = document.querySelector('#TelaInicial')
var divValorInicial = document.querySelector('#divValorInicial')
var divRodadas = document.querySelector('#divRodadas')
var divEspecial = document.querySelector('#divEspecial')
var ErrorSaldo = document.querySelector('.ErrorSaldo')
var ErrorQuantRodadas = document.querySelector('.ErrorQuantRodadas')
var ErrorValorInicial = document.querySelector('.ErrorValorInicial')
var ErrorLucroDesejado = document.querySelector('.ErrorLucroDesejado')
var formValorInicial = document.getElementById('formValorInicial')
var formRodada = document.getElementById('formRodadas')
var formEspecial = document.getElementById('formEspecial')
var Saldo = document.getElementById('Saldo')
var QuantRodadas = document.getElementById('QuantRodadas')
var Multiplicador = document.getElementById('Multiplicador')
var multiplicadorGanho = document.getElementById('multiplicadorGanho')
var validador = false
var VInicial = 0
var Lucro = []
var VRodada = []
var VTotal = []
var chanceDerrota = []
var SaldoVetor = []
bntValorInicial.addEventListener('click', function() {
    divTelaInicial.style.display = 'none'
    divValorInicial.style.display = 'block'
})
bntRodadas.addEventListener('click', function(){
    divTelaInicial.style.display = 'none'
    divRodadas.style.display = 'block'
})
bntEspecial.addEventListener('click', function(){
    divTelaInicial.style.display = 'none'
    divEspecial.style.display = 'block'
})
function chanceDerrotaRound1(multGanhoValue){
    if(multGanhoValue == 14){
        chanceDerrota[0] = 0.93333
       } else{
        chanceDerrota[0] = 0.53333
       }
}
function valorInicialfuncao(MultiplicadorFuncao){
  if(MultiplicadorFuncao == 1 || MultiplicadorFuncao == 2 || MultiplicadorFuncao == 3 || MultiplicadorFuncao == 4){
      VInicial = 1
    }
  else
    if (MultiplicadorFuncao == 1.08){
      VInicial = 13
    }
  else
    if (MultiplicadorFuncao == 1.1){
      VInicial = 10
    }
  else
    if (MultiplicadorFuncao == 1.2){
      VInicial = 5
    }
  else
    if (MultiplicadorFuncao == 1.3){
      VInicial = 4
    }
  else
    if (MultiplicadorFuncao == 1.4){
      VInicial = 3
    }
  else{
      VInicial = 2
    }
}
function VTotalVRodada(QuantRodadasValueF, MultiplicadorValueF, multiplicadorGanhoF, SaldoValueF, chanceDerrotaRound1F){
  var contador = 1   
  VTotal[0] = VInicial
  VRodada[0] = VInicial
  console.log(VRodada[0])
  while (contador < QuantRodadasValueF){
    VRodada[contador] = VRodada[contador - 1] * MultiplicadorValueF
    console.log(VRodada[contador])
    console.log(VTotal[contador - 1])
    VTotal[contador] = VTotal[contador - 1] + VRodada[contador]
    console.log(VTotal[contador])
    SaldoVetor[contador] = SaldoValueF - VTotal[contador]    
    console.log(SaldoVetor[contador])
    Lucro[contador] = (VRodada[contador] * multiplicadorGanhoF) - VTotal[contador]
    contador = contador + 1
    console.log(contador)
    chanceDerrota[contador - 1] = chanceDerrotaRound1F ** contador
  }
}
function ExibicaoParcial(QuantRodadasValueFu){
  var i = 0
  while(i < QuantRodadasValueFu){
    const table = document.getElementsByTagName('table')
    console.log(QuantRodadasValueFu, VRodada[i], VTotal[i], chanceDerrota[i], Lucro[i], SaldoVetor[i] )
    var tr = document.createElement("tr")
    tr.innerHTML = '<td>' + (i + 1) + '</td><td>' + VRodada[i] + '</td><td>' + VTotal[i] + '</td><td>' + chanceDerrota[i] + '</td><td>' + Lucro[i] + '</td><td>'
    + SaldoVetor[i] + '</td>'
    console.log(table)
    console.log(tr)
    table.insertAdjacentHTML("beforeend", tr)
    i += 1
  }
}
formValorInicial.addEventListener('submit',  (event) => {
   event.preventDefault()
   var SaldoValue = Saldo.value
   if(SaldoValue < 1){
    ErrorSaldo.style.display = 'block'
   }
   else{
    ErrorSaldo.style.display = 'none'
   }
   SaldoVetor[0] = SaldoValue
   console.log(SaldoValue)
   var QuantRodadasValue = QuantRodadas.value
   console.log(QuantRodadasValue)
   if(QuantRodadasValue < 1){
    ErrorQuantRodadas.style.display = 'block'
   }
   else{
    ErrorQuantRodadas.style.display = 'none'
   }
   var MultiplicadorValue = Multiplicador.value
   console.log(MultiplicadorValue)
   valorInicialfuncao(MultiplicadorValue)
   console.log(VInicial)
   var multiplicadorGanhoValue = multiplicadorGanho.value
   chanceDerrotaRound1(multiplicadorGanhoValue)
   VTotal[0] = VInicial
   console.log(VTotal[0])
   if(ErrorSaldo.style.display == 'none' && ErrorQuantRodadas.style.display == 'none'){
    while (VTotal[VTotal.length - 1] < SaldoValue){
      VTotalVRodada(QuantRodadasValue, MultiplicadorValue, multiplicadorGanhoValue, SaldoValue, chanceDerrotaRound1)
      VInicial = VInicial + 1
      console.log(VInicial)
    }
    VInicial = VInicial - 2
    VTotalVRodada(QuantRodadasValue, MultiplicadorValue, multiplicadorGanhoValue, SaldoValue, chanceDerrotaRound1)
    Lucro[0] = (VInicial * multiplicadorGanhoValue) - VInicial
    if (QuantRodadasValue < 4){
      ExibicaoParcial(QuantRodadasValue)
    }
    else{
      ExibicaoParcial(4)
    }
  }
})