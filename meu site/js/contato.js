// Função de validação do formulário de contato
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const mensagem = document.querySelector("#mensagem");
    const submitButton = document.querySelector("button[type='submit']");

    // Validação ao enviar o formulário
    form.addEventListener("submit", function(event) {
        // Impede o envio do formulário para validar os campos primeiro
        event.preventDefault();

        // Variáveis de erro
        let hasError = false;

        // Limpeza de mensagens de erro anteriores
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(message => message.remove());

        // Validação do nome
        if (nome.value.trim() === "") {
            showError(nome, "Por favor, preencha o nome.");
            hasError = true;
        }

        // Validação do e-mail
        if (!validateEmail(email.value)) {
            showError(email, "Por favor, insira um e-mail válido.");
            hasError = true;
        }

        // Validação da mensagem
        if (mensagem.value.trim() === "") {
            showError(mensagem, "Por favor, escreva uma mensagem.");
            hasError = true;
        }

        // Se não houver erros, submete o formulário
        if (!hasError) {
            alert("Formulário enviado com sucesso!");
            form.submit(); // Isso enviará o formulário
        }
    });

    // Função para exibir mensagens de erro ao lado do campo
    function showError(input, message) {
        const errorMessage = document.createElement("span");
        errorMessage.classList.add("error-message");
        errorMessage.style.color = "red";
        errorMessage.textContent = message;
        input.insertAdjacentElement("afterend", errorMessage);
    }

    // Função para validar o e-mail usando expressão regular
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
});
