document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Criando um objeto usuário
    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    // Verificando se já existem usuários no localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificando se o e-mail já está cadastrado
    const usuarioExistente = usuarios.find(u => u.email === email);

    if (usuarioExistente) {
        alert('Este e-mail já está cadastrado.');
    } else {
        // Adicionando o novo usuário ao array
        usuarios.push(usuario);

        // Salvando no localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Cadastro realizado com sucesso! Você será redirecionado para o login.');

        // Redirecionando para a página de login
        window.location.href = 'login.html';
    }
});
