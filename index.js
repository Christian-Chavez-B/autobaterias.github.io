document.querySelectorAll(".bateria1").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
