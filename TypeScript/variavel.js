//Exemplo var, let e const
//let e const quando instanciado dentro de um escopo, diferente de var não assume como global

var serie = 'Friends';

if(true){
    let serie = 'Game Of Thrones';

    console.log(serie);
}

console.log(serie);