const link = document.querySelectorAll(".links div");
const card = document.querySelector(".card");
const cardState = document.querySelector(".cardState");
const numero = document.querySelector(".itemValue");

link.forEach((item, index) => {
  item.addEventListener("click", function handleClickIcon() {
    item.classList.toggle("colorIcon");
    numero.innerText = index + 1;
  });
});

function handleClickBtn() {
  card.style.display = "none";
  cardState.style.display = "block";

  if (numero.innerText == "") {
    alert("Clique em um número de 1 a 5");
    card.style.display = "block";
    cardState.style.display = "none";
  }
}
