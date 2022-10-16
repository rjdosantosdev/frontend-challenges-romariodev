const campos = document.querySelectorAll('[required]');
const error = document.querySelector('.error');
const validMail = document.querySelector('.valid-mail');
const buttonError = document.querySelector('.form__btn');

for (let campo of campos) {
  campo.addEventListener('invalid', (event) => {
    error.textContent = 'Please provide a valid email';
    buttonError.classList.add('error-icon');
    validMail.innerHTML = '';
  });
}

document.querySelector('form').addEventListener('submit', (event) => {
  validMail.textContent = 'Your e-mail address was successfully sent!';
  error.style.display = 'none';
  buttonError.classList.remove('error-icon');
  event.preventDefault();
});
