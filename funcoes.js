module.exports = {
	realizaTransacao: function(token, transacao){
    	const TOKEN = token; 
	    data = transacao;
	    var url = "https://api.blockcypher.com/v1/bcy/test/faucet?token=" + TOKEN;
    
	    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	    var xhttp = new XMLHttpRequest();
		var resposta = null
    
	    xhttp.onreadystatechange = function(d) {
			console.log('retorno de transação:');
			resposta = xhttp.responseText;
			console.log('xhttp:' + resposta);
	    };
	    xhttp.open("POST", url, false);
	    xhttp.send(JSON.stringify(data));
		return resposta
	},
	imprime123: function(){
		return "123";
	}
}

