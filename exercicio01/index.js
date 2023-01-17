/* exercicio 01 - cruiar 3 clasesde objetos
 1 classe de herois da marvel
 2 - classe de vingadores
 3- classe de vingadores que morreram no cinema
 
 métodos : voar, correr muito rápido,bater, lutar
 atributos :  teletransporte,se regenerar, super força, imortalidade


 construir atraves do método construtor.

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var heroisMarvel = /** @class */ (function () {
    function heroisMarvel(r, t, s, i) {
        this.regenerar = r;
        this.teletransporte = t;
        this.superforça = s;
        this.imortalidade = i;
    }
    heroisMarvel.prototype.carctere = function () {
        console.log("o flash consegue correr   ".concat(this.regenerar, ", a  mulher maravilha consegue teletransporte  ").concat(this.teletransporte, " o batman possui a superfor\u00E7a  ").concat(this.superforça, ", o capitao america tem imortalidade ").concat(this.imortalidade)); //metodo
    };
    return heroisMarvel;
}());
var heroismarvel = new heroisMarvel(true, false, false, true);
heroismarvel.carctere();
var vingadores = /** @class */ (function (_super) {
    __extends(vingadores, _super);
    function vingadores() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return vingadores;
}(heroisMarvel));
var Morreram = /** @class */ (function (_super) {
    __extends(Morreram, _super);
    function Morreram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Morreram;
}(vingadores));
