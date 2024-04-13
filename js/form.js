// Obtem o formulário
const form = document.getElementById('form');

// Impede o envio padrão do formulário e cria um alerta com os dados
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtém os valores dos campos dentro do evento de envio
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var assunto = document.getElementById('assunto').value;

  // Cria a mensagem com os dados obtidos
  var msg = `Olá ${nome}, sua mensagem com o Assunto "${assunto}" foi enviada com sucesso!!!
  Em breve retornarei para o e-mail "${email}" com a resposta.

  Muito Obrigado.`;

  // Exibe a mensagem de alerta com os dados
  alert(msg);
});
