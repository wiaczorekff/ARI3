//cria uma instância do web worker
const worker = new Worker('worker.js')

//adiciona um ouvinte de evento para receber mensagens do web worker
worker.addEventListener('message', function(event){
    const square = event.data; //extrai o resultado da mensagem recebida
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'o quadrado do número é ' + square; //exibe o resultado na página

}
)
//função que será chamada quando o user clicar no botão calcular quadrado
function calculateSquare() {
    const inputElement = document.getElementById('inputNumber');
    const inputNumber = Number(inputElement.value);
    worker.postMessage(inputNumber);
  }
  