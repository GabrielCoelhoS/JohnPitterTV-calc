var bntValorInicial = document.querySelector('#button1')
var bntRodadas = document.querySelector('#button2')
var bntEspecial = document.querySelector('#button3')
var divTelaInicial = document.querySelector('#TelaInicial')
var divValorInicial = document.querySelector('#divValorInicial')
var divRodadas = document.querySelector('#divRodadas')
var divEspecial = document.querySelector('#divEspecial')
var ErrorSaldo = document.querySelector('.ErrorSaldo')
var ErrorQauntRodadas = document.querySelector('.ErrorQauntRodadas')
var ErrorValorInicial = document.querySelector('.ErrorValorInicial')
var ErrorLucroDesejado = document.querySelector('.ErrorLucroDesejado')
var divResultado = document.querySelector('#Resultado')
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
formValorInicial.addEventListener('submit',  (event) => {
   event.preventDefault()
   const SaldoValue = Saldo.value
   if(SaldoValue < 1){
    ErrorSaldo.style.display = 'block';
   }
   const QuantRodadasValue = QuantRodadas.value
   if(QuantRodadasValue < 1){
    ErrorQauntRodadas.style.display = 'block';
   }
   const MultiplicadorValue = Multiplicador.value
   const multiplicadorGanhoValue = multiplicadorGanho.value
   chanceDerrotaRound1(multiplicadorGanhoValue)
   console.log(chanceDerrota[0])
   if(ErrorSaldo.style.display === 'block' && ErrorQauntRodadas.style.display === 'block'){

   }
})
function chanceDerrotaRound1(multGanhoValue){
    if(multGanhoValue === 14){
        chanceDerrota[0] = 0.93333
       } else{
        chanceDerrota[0] = 0.53333
       }
}
function valorInicialfuncao(MultiplicadorFuncao){
  if(MultiplicadorFuncao === 1 || MultiplicadorFuncao === 2 || MultiplicadorFuncao === 3 || MultiplicadorFuncao === 4){
    var Valorinicialf = 1
    }
  else
    if (MultiplicadorFuncao === 1.08){
    var Valorinicialf = 13
    }
  else
    if (MultiplicadorFuncao === 1.1){
    var Valorinicialf = 10
    }
  else
    if (MultiplicadorFuncao === 1.2){
    var Valorinicialf = 5
    }
  else
    if (MultiplicadorFuncao === 1.3){
    var Valorinicialf = 4
    }
  else
    if (MultiplicadorFuncao === 1.4){
    var Valorinicialf = 3
    }
  else{
    var Valorinicialf = 2
    }
  return Valorinicialf
}