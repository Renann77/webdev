document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores dos campos
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const mensagemFeedback = document.getElementById('mensagemFeedback');

    // Obtendo os usuários do localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Procurando o usuário com o e-mail e senha fornecidos
    const usuarioEncontrado = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuarioEncontrado) {
        mensagemFeedback.textContent = 'Login realizado com sucesso! Redirecionando...';
        mensagemFeedback.style.color = 'green';

        // Salvando o usuário logado no localStorage
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));

        // Redirecionando para a página inicial (home) após 2 segundos
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 2000);
    } else {
        mensagemFeedback.textContent = 'E-mail ou senha incorretos.';
        mensagemFeedback.style.color = 'red';
    }
});
