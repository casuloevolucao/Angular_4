"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Moto_1 = require("./Moto");
var Concessionaria_1 = require("./Concessionaria");
var carro = new Carro_1.default("cruzer", 4);
carro.acelerar();
var moto = new Moto_1.default();
moto.acelerar();
var concessionaria = new Concessionaria_1.default("", []);
console.log(carro);
console.log(moto);
console.log(concessionaria.fornecerHorariosDeFuncionamento());
/*
A interface basicamente e eu dizer para a minha classe que ela
precisa dessas funções ou essas coisas para que ele funcione.

*/ 
