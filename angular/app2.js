var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.modelo = "";
        this.numeroDePortas = 0;
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = "";
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = "";
        this.carroPreferido = "";
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
/**criar carro*/
var carroA = new Carro("Jetta", 4);
var carroB = new Carro("Civic", 4);
var CarroC = new Carro("I30", 4);
/**Montar lista de carro da consecionaria */
var listaDeCarros = [carroA, carroB, CarroC];
var concessionaria = new Concessionaria("Av Paulista", listaDeCarros);
//console.log(concessionaria.mostrarListaDeCarros())
/**comprar o carro */
var cliente = new Pessoa("Wagner", "Civic");
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
/*var arr = ['Popular 1','Suv 2', 'Esportivo 3']
let concessionaria = new Concessionaria("Av Paulista, n- 123", arr);
console.log(concessionaria)*/
/*let pessoa = new Pessoa("wagner", "Jetta/Civic");
console.log(pessoa.dizerCarroPreferido()); */ 
