function cadastrarUsuario(event) {
  event.preventDefault();

  const tipo = document.getElementById('tipo').value;

  // Redirecionar com base no tipo de usuário selecionado
  if (tipo === 'cliente') {
    window.location.href = 'cliente.html';
  } else if (tipo === 'prestador') {
    window.location.href = 'profissional.html';
  }
}

function fazerLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Exibe email e senha na tela apenas para simulação do login
  const mensagem = document.getElementById('mensagemLogin');
  mensagem.innerHTML = `<p>Usuário logado:</p><p><strong>Email:</strong> ${email}</p><p><strong>Senha:</strong> ${senha}</p>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const tipoUsuario = document.getElementById('tipo');
  const area = document.getElementById('area');

  if (tipoUsuario) {
    tipoUsuario.addEventListener('change', () => {
      if (tipoUsuario.value === 'prestador') {
        area.style.display = 'block';
      } else {
        area.style.display = 'none';
      }
    });
  }
});
