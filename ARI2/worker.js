//adiciona um ouvinte de evento para receber mensagens do contexto principal
self.addEventListener('message', function(event){
    const inputNumber = event.data; //extrai os dados da mensagem recebida
    const square = inputNumber * inputNumber; // calcula o quadrado do numero
    self.postMessage(square);//emvia o resultado para o contexto principal
}
)