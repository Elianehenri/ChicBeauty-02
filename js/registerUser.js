/* document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario');
    const nascimentoInput = document.getElementById('nascimento');
    const idadeError = document.getElementById('idadeError');

    // Adicionar um evento de mudança ao campo de data de nascimento
    nascimentoInput.addEventListener('change', function() {
        const dataNascimento = new Date(nascimentoInput.value);
        const hoje = new Date();
        const idade = hoje.getFullYear() - dataNascimento.getFullYear();

        // Verifica se a pessoa tem menos de 18 anos
        if (hoje.getMonth() < dataNascimento.getMonth() || (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() < dataNascimento.getDate())) {
            idade--;
        }

        // Exibe a mensagem de erro se a idade for menor que 18
        if (idade < 18) {
            idadeError.style.display = 'block';
        } else {
            idadeError.style.display = 'none';
        }
    });

    // Adicionar um evento de envio ao formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        const dataNascimento = new Date(nascimentoInput.value);
        const hoje = new Date();
        const idade = hoje.getFullYear() - dataNascimento.getFullYear();

        // Verifica se a pessoa tem menos de 18 anos
        if (hoje.getMonth() < dataNascimento.getMonth() || (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() < dataNascimento.getDate())) {
            idade--;
        }

        if (idade < 18) {
            idadeError.style.display = 'block'; // Exibe a mensagem de erro
            return; // Impede o envio do formulário se a idade for menor que 18
        } else {
            idadeError.style.display = 'none'; // Oculta a mensagem de erro se a idade for válida
        }

        const formData = new FormData(form);

        // Enviar dados para o backend
        fetch('/api/register', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao cadastrar o usuário. Código HTTP: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            // Verificar a resposta do servidor
            if (data.success) {
                // Redirecionar para a página de login
                window.location.href = 'login.html';
            } else {
                // Exibir mensagem de erro do servidor
                throw new Error('Erro ao cadastrar o usuário: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Erro:', error.message);
            alert('Erro ao cadastrar o usuário. Por favor, tente novamente.');
        });
    });
});
 */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario');
    const nascimentoInput = document.getElementById('nascimento');
    const idadeError = document.getElementById('idadeError');

    // Adicionar um evento de envio ao formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        const formData = new FormData(form);

        // Enviar dados para o backend
        fetch(`${window.NEXT_PUBLIC_API_URL}/api/users/register`, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao cadastrar o usuário. Código HTTP: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            // Verificar a resposta do servidor
            if (data.success) {
                // Redirecionar para a página de login
                window.location.href = 'login.html';
            } else {
                // Exibir mensagem de erro do servidor
                throw new Error('Erro ao cadastrar o usuário: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Erro:', error.message);
            alert('Erro ao cadastrar o usuário. Por favor, tente novamente.');
        });
    });
});
