
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual foi o ultimo titulo da ferrari na F1??");

    
    if (respostaTime.toLowerCase() === "2008") {
      alert("Isso mesmo! O umtimo titulo foi em 2008!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
