const botaoProcuraCep = document.querySelector('[data-tipo="cep-botao"]');
botaoProcuraCep.addEventListener('click', () => buscaCep());

function buscaCep() {
   let inputCep = document.querySelector('input\[name=cep\]');
   let cep = inputCep.value.replace('-', '');
   let url = `https://viacep.com.br/ws/${cep}/json`;
   let xhr = new XMLHttpRequest();
   xhr.open('GET', url, true);
   xhr.send();
   xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
         preencheCampos(JSON.parse(xhr.responseText));
      }
   }
}

function preencheCampos(json) {
   document.querySelector('input[name=endereco]').value = json.logradouro;
   document.querySelector('input[name=bairro]').value = json.bairro;
   document.querySelector('input[name=complemento]').value = json.complemento;
   document.querySelector('input[name=cidade]').value = json.localidade;
   document.querySelector('input[name=estado]').value = json.uf;
}
