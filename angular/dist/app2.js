"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
/**criar carro*/
var carroA = new Carro_1.default("Jetta", 4);
var carroB = new Carro_1.default("Civic", 4);
var CarroC = new Carro_1.default("I30", 4);
/**Montar lista de carro da consecionaria */
var listaDeCarros = [carroA, carroB, CarroC];
var concessionaria = new Concessionaria_1.default("Av Paulista", listaDeCarros);
//console.log(concessionaria.mostrarListaDeCarros())
/**comprar o carro */
var cliente = new Pessoa_1.default("Wagner", "Civic");
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
