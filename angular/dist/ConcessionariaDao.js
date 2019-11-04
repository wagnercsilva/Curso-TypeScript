"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('lógica update');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('lógica delete');
        return Object();
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('lógica select');
        return Object();
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log('lógica getAll');
        return [Object()];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
