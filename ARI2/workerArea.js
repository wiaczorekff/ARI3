self.addEventListener('message', function(event) {
    const base = event.data;
    const height = event.data;
    const area = (base * height) / 2;
    self.postMessage(area);
  });