window.onload = function () {
  document.getElementById("esqueci").focus();
}


function enviar() {
  var esqueci = document.getElementById("esqueci");

  if (esqueci.value == "" || esqueci.length < 11) {
    mensg.innerHTML = "Preencha o campo corretamente";
  }
}