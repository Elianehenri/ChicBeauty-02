/* document.addEventListener('DOMContentLoaded', (event) => {
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const emailError = document.querySelector('#emailError');
    const passwordError = document.querySelector('#passwordError');

    // Função para alternar a visibilidade da senha
    function togglePasswordVisibility() {
        const passwordInput = document.querySelector('#password');
        const showPasswordIcon = document.querySelector('#showPassword');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showPasswordIcon.classList.remove('fa-eye');
            showPasswordIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            showPasswordIcon.classList.remove('fa-eye-slash');
            showPasswordIcon.classList.add('fa-eye');
        }
    }

    // Validação de email em tempo real
    emailInput.addEventListener('input', () => {
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (emailPattern.test(emailInput.value)) {
            emailError.style.display = 'none';
        } else {
            emailError.style.display = 'block';
        }
    });

    // Validação de senha em tempo real
    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length >= 6) {
            passwordError.style.display = 'none';
        } else {
            passwordError.style.display = 'block';
        }
    });

    // Função para lidar com o envio do formulário
    function submitForm(event) {
        event.preventDefault(); // Evita o comportamento padrão de submissão

        const email = emailInput.value;
        const password = passwordInput.value;

        // Validação final antes do envio
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (!emailPattern.test(email) || password.length < 6) {
            if (!emailPattern.test(email)) {
                emailError.style.display = 'block';
            }
            if (password.length < 6) {
                passwordError.style.display = 'block';
            }
            return;
        }

        // Limpar campos após a submissão
        emailInput.value = '';
        passwordInput.value = '';

        // Redirecionar para a tela principal (index.html) após o login bem-sucedido
        setTimeout(() => {
            window.location.href = '../index.html'; // Altere para o caminho correto da tela principal
        }, 2000); // Redireciona após 2 segundos (tempo de simulação)
    }

    // Adiciona um event listener para o evento 'submit' do formulário
    document.querySelector('#loginForm').addEventListener('submit', submitForm);

    // Adiciona um event listener para o clique no ícone de mostrar senha
    document.querySelector('#showPassword').addEventListener('click', togglePasswordVisibility);
});
 */
document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const emailError = document.querySelector('#emailError');
    const passwordError = document.querySelector('#passwordError');
    const loginForm = document.querySelector('#loginForm');

    // Função para alternar a visibilidade da senha
    function togglePasswordVisibility() {
        const passwordInput = document.querySelector('#password');
        const showPasswordIcon = document.querySelector('#showPassword');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showPasswordIcon.classList.remove('fa-eye');
            showPasswordIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            showPasswordIcon.classList.remove('fa-eye-slash');
            showPasswordIcon.classList.add('fa-eye');
        }
    }

    // Validação de email em tempo real
    emailInput.addEventListener('input', () => {
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (emailPattern.test(emailInput.value)) {
            emailError.style.display = 'none';
        } else {
            emailError.style.display = 'block';
        }
    });

    // Validação de senha em tempo real
    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length >= 6) {
            passwordError.style.display = 'none';
        } else {
            passwordError.style.display = 'block';
        }
    });

    // Função para lidar com o envio do formulário
    function submitForm(event) {
        event.preventDefault(); // Evita o comportamento padrão de submissão

        const email = emailInput.value;
        const password = passwordInput.value;

        // Simulação de autenticação (substitua isso com sua lógica de autenticação real)
        if (email === 'user@example.com' && password === 'password') {
            // Autenticação bem-sucedida - redirecionar para a tela principal
            const user = {
                name: 'Usuário Exemplo'
            };

            // Armazenar informações do usuário no localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(user));

            // Redirecionar para a tela principal após o login bem-sucedido
            setTimeout(() => {
                window.location.href = '../index.html'; // Altere para o caminho correto da tela principal
            }, 1000); // Redireciona após 1 segundo (tempo de simulação)
        } else {
            // Exibir mensagem de erro para autenticação falhou (simulação)
            alert('Credenciais inválidas. Por favor, tente novamente.');
        }
    }

    // Adiciona um event listener para o evento 'submit' do formulário de login
    loginForm.addEventListener('submit', submitForm);

    // Adiciona um event listener para o clique no ícone de mostrar senha
    document.querySelector('#showPassword').addEventListener('click', togglePasswordVisibility);
});

