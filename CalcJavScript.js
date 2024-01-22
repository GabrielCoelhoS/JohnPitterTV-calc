var bntValorInicial = document.querySelector('#button1');
var bntRodadas = document.querySelector('#button2');
var bntEspecial = document.querySelector('#button3');
var TelaInicial = document.querySelector('#TelaInicial');
var ValorInicial = document.querySelector('.ValorInicial');
var Rodadas = document.querySelector('#Rodadas');
var Especial = document.querySelector('#Especial');
bntValorInicial.addEventListener('click', function() {
    TelaInicial.style.display = 'none';
    ValorInicial.style.display = 'block';
});
bntRodadas.addEventListener('click', function(){
    TelaInicial.style.display = 'none';
    Rodadas.style.display = 'block';
});
bntEspecial.addEventListener('click', function(){
    TelaInicial.style.display = 'none';
    Especial.style.display = 'block';
});