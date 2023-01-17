var veiculos = /** @class */ (function () {
    function veiculos(c, a, d) {
        this.cor = c;
        this.ano = a;
        this.doc_ok = d;
    }
    veiculos.prototype.exibirdocs = function () {
        console.log("o veiculo tem a  cor ".concat(this.cor, ", ano  ").concat(this.ano, " e o documento est\u00E1 ").concat(this.doc_ok));
    };
    return veiculos;
}());
var veiculo = new veiculos("verde", 2022, true);
veiculo.exibirdocs();
var carro = /** @class */ (function () {
    function carro() {
    }
    return carro;
}());
var moto = /** @class */ (function () {
    function moto() {
    }
    return moto;
}());
