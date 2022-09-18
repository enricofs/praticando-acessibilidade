const btnMudaTema = document.getElementById("btnMudaTema");

const body = document.querySelector('body')

let darkMode = localStorage.getItem("dark-mode");

const ativarDarkMode = () => {
  body.classList.add("temaDark");
  localStorage.setItem("dark-mode", "ativado");
};

const desativarDarkMode = () => {
  body.classList.remove("temaDark")
  localStorage.setItem("dark-mode", "desativado");
};

if (darkMode === "ativado") {
  ativarDarkMode(); // ativa o dark mode quando a página carrega
}

btnMudaTema.addEventListener("click", () => {
  darkMode = localStorage.getItem("dark-mode"); // pegando o darkmode quando btn clicado
  if (darkMode === "desativado") {
    ativarDarkMode();
  } else {
    desativarDarkMode();
  }
});