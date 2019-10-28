class Carro {
    private modelo: string  = ""
    private numeroDePortas: number = 0
    private velocidade: number = 0

    constructor(modelo:string, numeroDePortas:number){
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    public acelerar(): void{
        this.velocidade = this.velocidade + 10
    }

    public parar(): void{
        this.velocidade = 0
    }

    public velocidadeAtual():number{
        return this.velocidade;
    }
}

class Concessionaria{
    private endereco:string = ""
    private listaDeCarros: Array<Carro>

    constructor(endereco:string, listaDeCarros: Array<Carro>){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string{
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro>{
        return this.listaDeCarros
    }
}

class Pessoa{
    private nome:string = ""
    private carroPreferido:string = ""
    private carro:any

    constructor(nome:string, carroPreferido:string){
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }

    public dizerNome(): string{
        return this.nome;
    }

    public dizerCarroPreferido(): string{
        return this.carroPreferido;
    }

    public comprarCarro(carro:Carro) : void{
        this.carro = carro;
    }

    public dizerCarroQueTem(): Carro{
        return this.carro;
    }
}
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