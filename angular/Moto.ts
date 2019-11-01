import Veiculo from './Veiculo'

export default class Moto extends Veiculo{
    //sobrescrita de metodos herdados
    public acelerar(): void{
        this.velocidade = this.velocidade + 20
    }
}