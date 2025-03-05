const developers = [
  "Serhii Falconoff",
  "Марічка Лозинська",
  "Роман",
  "Софія Мадрига ",
  "Ксенія",
  "Олександр Курченко",
  "Максим Созикін",
  "Оксана Червяченко",
  "Василь Ніколов",
  "Сергій Дзюба",
  "Ірина Елькіна",
  "Арина Назарчук",
  "Макисм Гулько",
];

const btnRandom = document.querySelector(".randomBtn");
const btnClear = document.querySelector(".clearBtn");
const teamlead = document.querySelector(".teamlead-name");

btnRandom.addEventListener("click", () => {
  const interval = setInterval(() => {
    btnRandom.disabled = true;
    btnClear.disabled = true;
    btnRandom.classList.add("btn-nonactive");
    btnClear.classList.add("btn-nonactive");
    teamlead.textContent = text();
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    btnRandom.disabled = false;
    btnClear.disabled = false;
    btnRandom.classList.remove("btn-nonactive");
    btnClear.classList.remove("btn-nonactive");
  }, 5000);
});

btnClear.addEventListener("click", () => {
  teamlead.textContent = "";
});

function text() {
  return `${teamLeadRandom()}`;
}

function teamLeadRandom() {
  return developers[Math.floor(Math.random() * developers.length)];
}
