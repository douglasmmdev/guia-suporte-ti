// Seleciona o botão de alternância
const themeToggleButton = document.getElementById("theme-toggle");

// Verifica o tema atual e define o localStorage para persistir o tema escolhido
function toggleTheme() {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");

  // Salva o tema preferido no localStorage
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    themeToggleButton.textContent = "🌙"; // Ícone para modo escuro
  } else {
    localStorage.setItem("theme", "dark");
    themeToggleButton.textContent = "☀️"; // Ícone para modo claro
  }
}

// Verifica a preferência de tema ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggleButton.textContent = "🌙"; // Ícone para modo escuro
  } else {
    document.body.classList.add("dark-mode");
    themeToggleButton.textContent = "☀️"; // Ícone para modo claro
  }
});

// Adiciona o evento de clique no botão
themeToggleButton.addEventListener("click", toggleTheme);
