class Veiculos {///atributo 
    cor: string;//string cadeia de cactere 
    ano: number;//numeros inteiros
    doc_ok: boolean;//boolean verdadeiro ou falso

    constructor(c: string, a: number, d: boolean,) { //metodo  constructor - > cria objetos 
        this.cor = c ;
        this.ano = a;
        this.doc_ok = d;
    }
    exibirdocs(): void {
        console.log(`o veiculo tem a  cor ${this.cor}, ano  ${this.ano} e o documento está ${this.doc_ok}` )//metodo
    }    
}

let veiculo  =  new Veiculos("verde", 2022, true)
veiculo.exibirdocs()

class Carro {


}

class Moto{


}
