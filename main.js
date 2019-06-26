let API = require('./funcoes.js');

console.log('iniciando main');
console.log('main\n');

var endereco = "C3qXd3YYRBrZZod5D9GLGhpDNnVfAwpbe2"
console.log('endereço de envio:' + endereco);

const TOKEN = "f559581fbebb412b9379cd5752bcae49"
console.log('meu token:' + TOKEN);

const VALOR_TRANSACAO = 2 * Math.pow(10,7) // em BCY

console.log('0.2 BCY em satoshi:' + VALOR_TRANSACAO);

var data = {"address": endereco, "amount": VALOR_TRANSACAO}
console.log('data:');
console.log(data);
console.log("\n\naguardando transação\n");

let resposta = API.realizaTransacao(TOKEN , data);
console.log('retorno main:' + resposta);
console.log('transacao terminou');
