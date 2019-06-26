let funcoes = require('./funcoes.js')

describe("Testes de arquivo funcoes.js", function() {

  var endereco = "C3qXd3YYRBrZZod5D9GLGhpDNnVfAwpbe2";
  const TOKEN = "f559581fbebb412b9379cd5752bcae49";
  const VALOR_TRANSACAO = 2 * Math.pow(10,7); // em BCY
  var data = {"address": endereco, "amount": VALOR_TRANSACAO};
  let resposta = funcoes.realizaTransacao(TOKEN, data);


  it("Testar funcao imprime123", function(){
	expect(funcoes.imprime123()).toEqual("123");
  });

  it("Testar retorno realizaTransacao é string", function(){
	expect(typeof resposta).toEqual("string");
  });

  it("Testar que retorno é objeto", function(){
  	expect(typeof JSON.parse(resposta)).toEqual("object");
  });

  it("Testar que resposta tem chave 'tx_ref'", function(){
  	let objeto = JSON.parse(resposta);
  	let chaves = Object.keys(objeto);
  	expect(chaves[0]).toEqual("tx_ref");
  });
});
