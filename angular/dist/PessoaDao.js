"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log('lógica update');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('lógica delete');
        return Object();
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log('lógica select');
        return Object();
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log('lógica getAll');
        return [Object()];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
