// Seleciona todos os rótulos do formulário
const allLabels = document.querySelectorAll(".form-control label");

// Adiciona animações nas letras dos rótulos
allLabels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join("");
});

// Seleção dos elementos do formulário
const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Função para exibir mensagens de erro
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  const errorMessage = formControl.querySelector("small");
  errorMessage.textContent = message;
}

// Função para exibir mensagens de sucesso
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
}

// Validação de e-mail
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

// Validação do formulário
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio do formulário
  
  // Validações do e-mail e senha
  if (emailInput.value === "") {
    showError(emailInput, "E-mail é obrigatório.");
  } else if (!validateEmail(emailInput.value)) {
    showError(emailInput, "E-mail inválido.");
  } else {
    showSuccess(emailInput);
  }

  if (passwordInput.value === "") {
    showError(passwordInput, "Senha é obrigatória.");
  } else if (passwordInput.value.length < 6) {
    showError(passwordInput, "A senha precisa ter pelo menos 6 caracteres.");
  } else {
    showSuccess(passwordInput);
  }

  // Se o formulário estiver válido, envie-o (apenas para demonstração)
  if (emailInput.classList.contains("success") && passwordInput.classList.contains("success")) {
    alert("Login bem-sucedido!");
  }
});
