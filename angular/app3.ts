import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carro =  new Carro('Civic', 4);
carro.acelerar()

let moto = new Moto();
moto.acelerar()

let concessionaria = new Concessionaria('',[]);


console.log(moto)
console.log(carro)
console.log(concessionaria.fornecerHorariosDeFuncionamento())