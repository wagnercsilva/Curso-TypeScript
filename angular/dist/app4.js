"use strict";
//import { ConcessionariaDao } from './ConcessionariaDao'
//import { PessoaDao } from './PessoaDao';
//let dao: ConcessionariaDao = new ConcessionariaDao()
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Dao_1 = require("./Dao");
var concessionaria = new Concessionaria_1.default('', []);
//dao.inserir(concessionaria)
//let dao2: PessoaDao =  new PessoaDao()
var pessoa = new Pessoa_1.default('', '');
//dao2.atualizar(pessoa)
var dao3 = new Dao_1.Dao();
var dao4 = new Dao_1.Dao();
dao3.inserir(concessionaria);
dao4.remover(5);
