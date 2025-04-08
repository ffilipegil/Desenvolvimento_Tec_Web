function buscarCep() {
    let cep = document.getElementById('cep').value.replace(/\D/g, '');
  
    if (cep.length !== 8) {
      alert('Por favor, digite um CEP válido com 8 números.');
      return;
    }
  
    let xhr = new XMLHttpRequest();
    let url = 'https://viacep.com.br/ws/' + cep + '/json/';
  
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var resposta = JSON.parse(xhr.responseText);
  
        if (resposta.erro) {
          alert('CEP não encontrado.');
          return;
        }
  
        document.getElementById('logradouro').textContent = resposta.logradouro;
        document.getElementById('localidade').textContent = resposta.localidade;
        document.getElementById('uf').textContent = resposta.uf;
      }
    };
  
    xhr.send();
  }
  