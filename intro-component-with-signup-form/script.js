const form = document.querySelector("form");

const iconError = document.querySelectorAll(".icon-error");
const hidden = document.querySelectorAll(".hidden");

form.onsubmit = (e) => {
  e.preventDefault();
};

function validade(e) {
  iconError.forEach((event) => {
    event.style.opacity = "1";
  });
  hidden.forEach((event) => {
    event.style.opacity = "1";
  });
}

//   if (lastName.value == '') {
//     lastName.style.background = "url('/images/icon-error.svg') no-repeat";
//     lastName.style.backgroundPosition = "right";
//   }

//   if (email.value == '') {
//     email.style.background = "url('/images/icon-error.svg') no-repeat";
//     email.style.backgroundPosition = "right";
//   }

//   if (pass.value == '') {
//     pass.style.background = "url('/images/icon-error.svg') no-repeat";
//     pass.style.backgroundPosition = "right";
//   }
// }
