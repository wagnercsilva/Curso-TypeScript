import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

/**criar carro*/
let carroA = new Carro("Jetta", 4)
let carroB = new Carro("Civic", 4)
let CarroC = new Carro("I30", 4)

/**Montar lista de carro da consecionaria */
let listaDeCarros:Array<Carro> = [carroA, carroB, CarroC]

let concessionaria = new Concessionaria("Av Paulista", listaDeCarros)

//console.log(concessionaria.mostrarListaDeCarros())

/**comprar o carro */

let cliente = new Pessoa("Wagner", "Civic")

concessionaria.mostrarListaDeCarros().map((carro:Carro)=>{
    
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro)
    }
    
})

console.log(cliente.dizerCarroQueTem())




/*var arr = ['Popular 1','Suv 2', 'Esportivo 3']
let concessionaria = new Concessionaria("Av Paulista, n- 123", arr);
console.log(concessionaria)*/

/*let pessoa = new Pessoa("wagner", "Jetta/Civic");
console.log(pessoa.dizerCarroPreferido()); */