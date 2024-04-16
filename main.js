
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual é a melhor serie?");

    
    if (respostaTime.toLowerCase() === "You") {
      alert("Isso mesmo! You é a melhor serie!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Errou! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
