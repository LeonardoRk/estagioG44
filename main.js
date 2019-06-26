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

// recebe como parâmetro valor BCY 
// retorna a conversão de BCY para Satoshi
function converteBcySatoshi(bcy){
	var satoshi = [bcy * (2*10^7)]/0.2;
	return satoshi;
}

var url = "https://api.blockcypher.com/v1/bcy/test/faucet?token=" + TOKEN;

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(d) {
  console.log('retorno de transação:');
  console.log(xhttp.responseText);
};
xhttp.open("POST", url, false);
xhttp.send(JSON.stringify(data));
