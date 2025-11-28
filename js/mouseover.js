const buttons = document.querySelectorAll(".btn-option");
const background = document.querySelector(".background-index");
const initialBackground = document.querySelector(".background-cover");
const main = document.querySelector("main");

const backgroundUrls = [
  "./assets/img/backgrounds/about-novo.png",
  "./assets/img/backgrounds/experience-novo.png",
  "./assets/img/backgrounds/skill-novo.png",
  "./assets/img/backgrounds/projects-novo.png",
];

buttons.forEach((btn, index) => {
  btn.addEventListener("mouseover", () => {
    background.style.transition = "opacity .5s ease";
    background.style.opacity = "0";
    initialBackground.style.display = "none"

    buttons.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.style.filter = "blur(4px)"; // Desfoca os outros botões
      } else {
        otherBtn.style.filter = "none"; // Remove o desfoque do botão atual
      }
    });

    setTimeout(() => {
      background.src = backgroundUrls[index];
      background.style.display = "block";
      background.style.opacity = ".5";
    }, 200);
  });
});

buttons.forEach((btn) => {
  btn.addEventListener("mouseout", () => {
    background.style.transition = "opacity .5s ease";
    background.style.opacity = "0";
    initialBackground.style.display = "block"

    buttons.forEach((everyBtn) => {
      everyBtn.style.filter = "blur(0)";
    });

    setTimeout(() => {
      background.style.display = "none";
      background.style.opacity = "1";
    }, 200);
  });
});
