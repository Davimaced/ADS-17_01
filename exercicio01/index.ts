/* exercicio 01 - cruiar 3 clasesde objetos 
 1 classe de herois da marvel 
 2 - classe de vingadores 
 3- classe de vingadores que morreram no cinema
 
 métodos : voar, correr muito rápido,bater, lutar 
 atributos :  teletransporte,se regenerar, super força, imortalidade 


 construir atraves do método construtor.

*/

class  heroisMarvel{
    regenerar: boolean;
    teletransporte: boolean;
    superforça: boolean;
    imortalidade: boolean;
   

    constructor(r: boolean, t: boolean, s: boolean, i: boolean,) { //metodo  constructor - > cria objetos 
        this.regenerar = r ;
        this.teletransporte = t;
        this.superforça = s ;
        this.imortalidade = i;
    }
    carctere(): void {
        console.log(`o flash consegue correr   ${this.regenerar}, a  mulher maravilha consegue teletransporte  ${this.teletransporte} o batman possui a superforça  ${this.superforça}, o capitao america tem imortalidade ${this.imortalidade}` )//metodo
    }    
}

let heroismarvel  =  new heroisMarvel (true , false, false, true)
heroismarvel.carctere()

class vingadores extends heroisMarvel{


}

class Morreram extends vingadores{



     
    
}