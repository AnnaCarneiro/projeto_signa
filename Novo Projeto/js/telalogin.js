window.onload = function () {
  document.getElementById("username").focus();
}

function validarLogin() {
  obrigatorios = document.getElementsByClassName('obrigatorios');
  var idList = [];
  for (var obrigatorio in obrigatorios) {
    mensg.innerText = "Preencha os campos corretamente";
  }
  username.focus();

  if (document.getElementById("username").value == "") {
    mensg_username.innerHTML = "Preencha o campo usuário ou e-mail corretamente!"
    document.getElementById("username").focus();
  }


  if (document.getElementById("senha").value == "") {
    mensg_senha.innerHTML = "Preencha o campo senha corretamente!"
    document.getElementById("senha").focus();
  }
}



