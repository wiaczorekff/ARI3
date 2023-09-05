//cria uma instância do web worker
const worker = new Worker('worker.js')

//adiciona um ouvinte de evento para receber mensagens do web worker
worker.addEventListener('message', function(event){
    const square = event.data; //extrai o resultado da mensagem recebida
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'o quadrado do número é ' + square; //exibe o resultado na página

}
);
//função que será chamada quando o user clicar no botão calcular quadrado
function calculateSquare() {
    const inputElement = document.getElementById('inputNumber');
    const inputNumber = Number(inputElement.value);
    worker.postMessage(inputNumber);
  }

  const workerArea = new Worker('workerArea.js');

  workerArea.addEventListener('message', function(event){
      const area = event.data; //extrai o resultado da mensagem recebida
      const resultElement2 = document.getElementById('areaResult');
      resultElement2.textContent = ' a area do triangulo é ' + area; //exibe o resultado na página
  });
  
  function calculateArea() {
      workerArea.postMessage({
          base: parseFloat(document.getElementById('base1').value), 
          height: parseFloat(document.getElementById('height1').value)
      });
  }
  

  const workerFactorial = new Worker('workerFatorial.js');
  worker.addEventListener('message', function(event){
    const fatorial = event.data; //extrai o resultado da mensagem recebida
    const resultElement3 = document.getElementById('factorialResult');
    resultElement3.textContent = 'o fatorial do número é ' + fatorial; //exibe o resultado na página
  });


  function calculateFactorial() {
    const factorialNumberElement = document.getElementById('factorialNumber');
    const factorialNumber = Number(factorialNumberElement.value);
    workerFactorial.postMessage(factorialNumber);
  }