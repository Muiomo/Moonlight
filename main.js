document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const sobreNos = document.getElementById("sobre_nos");

  menuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    sobreNos.classList.toggle("active");

    // Impede a rolagem do corpo quando o menu está aberto
    if (sobreNos.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Fecha o menu ao clicar em um link
  const navLinks = document.querySelectorAll("#sobre_nos a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuToggle.classList.remove("active");
      sobreNos.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
});
