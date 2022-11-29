const botaoProcuraCep = document.querySelector('[data-tipo="cep-botao"]');
botaoProcuraCep.addEventListener('click', () => buscaCep());

function buscaCep() {
   let inputCep = document.querySelector('input\[name=cep\]');
   let cep = inputCep.value.replace('-', '');
   let url = `https://viacep.com.br/ws/${cep}/json`;

   console.log("🚀 ~ file: app.js:9 ~ buscaCep ~ url", url)
}
