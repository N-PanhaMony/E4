document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelectorAll("card");
  const nextCard = document.getElementById("card");
  const cardRow = document.querySelector("card-row");

  let currentCard = 0;

  nextCard.addEventListener("click", function () {
    for (let i = 0; i < currentCard + 4; i++) {
      if (card[i] == true) {
        card[i].classList.add("active");
      }
    }
    currentCard += 4;
    if (currentCard >= card.length) {
      nextCard.style.display = "none";
    }
  });
});
