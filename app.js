const botaoProcuraCep = document.querySelector('[data-tipo="cep-botao"]');
botaoProcuraCep.addEventListener('click', () => buscaCep());

function buscaCep() {
   let inputCep = document.querySelector('input\[name=cep\]');
   let cep = inputCep.value.replace('-', '');
   let url = `https://viacep.com.br/ws/${cep}/json`;
   let xhr = new XMLHttpRequest();
   xhr.open('GET', url, true);
   xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
         console.log(JSON.parse(xhr.responseText));
      }
   }
   xhr.send();
}
