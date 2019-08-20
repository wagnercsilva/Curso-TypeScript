//Exemplo Função
var dobroDoValor = function(numero){
    return numero * 2;
}

console.log(dobroDoValor(7) + '- Function Padrão');


//Exemplo Enxugado quando tem apenas 1 parametro
var dobroDoValor1 = numero =>{
    return numero * 2;
}

console.log(dobroDoValor1(7) + '- arrowFunction');


//Exemplo Mais Enxugado quando tem apenas 1 parametro
var dobroDoValor2 = numero => numero * 2;

console.log(dobroDoValor2(7) + '- arrowFunction quando function simples e com apenas 1 parametro');