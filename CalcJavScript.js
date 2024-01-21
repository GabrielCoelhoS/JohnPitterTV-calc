var bntValorInicial = document.querySelector('#button1');
var bntRodadas = document.querySelector('#button2');
var bntEspecial = document.querySelector('#button3');
var bntEspecial2 = document.querySelector('#button4');
var telaInicial = document.querySelector('#telaInicial');
var ValorInicial = document.querySelector('#ValorInicial');
var Rodadas = document.querySelector('#Rodadas');
var Especial = document.querySelector('#Especial');
var Especial2 = document.querySelector('#Especial2')
bntValorInicial.addEventListener('click', function() {
    telaInicial.style.display = 'none';
    ValorInicial.style.display = 'block';
});
bntRodadas.addEventListener('click', function(){
    telaInicial.style.display = 'none';
    Rodadas.style.display = 'block';
});
bntEspecial.addEventListener('click', function(){
    telaInicial.style.display = 'none';
    Especial.style.display = 'block';
});
bntEspecial2.addEventListener('click', function(){
    telaInicial.style.display = 'none';
    Especial2.style.display = 'block';
});