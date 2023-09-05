function calculateFactorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * calculateFactorial(num - 1);
    }
  }
  
  self.addEventListener('message', function(event) {
    const factorialNumber = event.data;
    const factorial = calculateFactorial(factorialNumber);
    self.postMessage(factorial);
  });
  