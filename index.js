const developers = [
  "Serhii Falconoff",
  "Марічка Лозинська",
  "Роман",
  "Софія Мадрига ",
  "Ксенія",
  "Олександр Курченко",
  "Максим Созикін",
  "Оксана Червяченко (Коваль)",
  "Василь Ніколов",
  "Сергій Дзюба",
  "Ірина Елькіна (rinvernal)",
  "Арина Назарчук",
  "Макисм Гулько",
];

const btn = document.querySelector(".random");
const teamlead = document.querySelector(".teamlead");

btn.addEventListener("click", () => {
  const leader = teamLead();
  if (leader) {
    btn.disabled = true;
  }
  teamlead.textContent = `Наш тімлід - ${leader}`;
});

function teamLead() {
  return developers[Math.floor(Math.random() * developers.length)];
}
