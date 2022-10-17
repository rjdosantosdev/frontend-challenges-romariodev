function validade() {
  const user = document.getElementById("input").value;
  const alerta = document.getElementById("alerta");
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (re.test(user)) {
    alert("E-mail enviado com sucesso");
    return true;
  } else {
    alerta.innerText = "Please provide a valid email address";
    return false;
  }
}
