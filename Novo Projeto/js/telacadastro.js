//ao abrir a janela cursor no 1º campo
window.onload = function () {
  document.getElementById("cpf").focus();
}

//quando clica nas abas cursor no 1º campo
function checktab4() {
  if (document.getElementById("tab4").checked = true) {
    document.getElementById("cpf").focus();
  }
}

function checktab5() {
  if (document.getElementById("tab5").checked = true) {
    document.getElementById("cnpj").focus();
  }
}
var tudOk = true;
var tudOk2 = true

/*Para o caso de estar em um browser desatualizado e não funcione o required ou o type: email 
**Pessoa Fisica*/
function validarCampos() {
  var cpf = document.getElementById("cpf");
  var nome = document.getElementById("nome");

  obrigatorios = document.getElementsByClassName('obrigatorios');
  var idList = [];
  for (var obrigatorio in obrigatorios) {
    mensg.innerHTML = " Preencha os dados corretamente! ";
  }
  cpf.focus();

  //validcao cpf
  if (cpf.value == "" || cpf.length < 14) {
    mensg_cpf.innerHTML = 'Preencha o campo CPF corretamente!';
    tudOk = false;
    cpf.focus();
  }

  //validacao nome
  if (nome.value == "" || nome.length < 2) {
    mensg_nome.innerHTML = "Preencha o campo nome corretamente!";
    tudOk = false;
    nome.focus();
  }

  //validacao sobrenome
  if (document.getElementById("sobrenome").value == "" || document.getElementById("sobrenome").length < 2) {
    mensg_sobrenome.innerHTML = "Preencha o campo sobrenome corretamente!";
    tudOk = false;
    document.getElementById("sobrenome").focus();
  }

  // validacao do e-mail
  if (document.getElementById("email").value == "" || document.getElementById("email").indexOf == "@" == -1 ||
    document.getElementById("email").indexOf == "." == -1) {
    mensg_email.innerHTML = "Preencha campo E-mail corretamente!";
    tudOk = false;
    document.getElementById("email").focus();

  }

  //validacao telefone
  if (document.getElementById("tel").value == "" || document.getElementById("tel").length < 15) {
    mensg_tel.innerHTML = "Preencha o campo telefone corretamente!";
    tudOk = false;
    document.getElementById("tel").focus();
  }

  //validacao de data
  if (document.getElementById("data").value == "" || document.getElementById("data").length < 11) {
    mensg_data.innerHTML = "Preencha o campo data corretamente";
    tudOk = false;
    document.getElementById("data").focus();
  }

  //validacao nome de usuario
  if (document.getElementById("username").value == "" || document.getElementById("username").length < 4) {
    mensg_username.innerHTML = "Preencha o campo nome de usuário corretamente!";
    tudOk = false;
    document.getElementById("username").focus();

  }

  //validacao nome de senha
  if (document.getElementById("senha").value == "" || document.getElementById("senha").length < 4) {
    mensg_senha.innerHTML = "Preencha o campo senha corretamente!";
    tudOk = false;
    document.getElementById("senha").focus();
  }

  if (tudOk == true) {
    idDoForm.submit();
  }
  if (tudOk == true) {
    window.location.href = "telarelatorio.html"
  }
}

//Pessoa Juridica

function validarCampos2() {
  obrigatorios2 = document.getElementsByClassName('obrigatorios');
  var idList2 = [];
  for (var obrigatorio2 in obrigatorios2) {
    mensg.innerHTML = " Preencha os dados corretamente! ";
  }
  cnpj.focus();

  //validcao cnpj
  if (document.getElementById("cnpj").value == "" || document.getElementById("cnpj").length < 14) {
    mensg_cnpj.innerHTML = 'Preencha o campo CNPJ corretamente!';
    tudOk2 = false;
    document.getElementById("cnpj").focus();
  }

  //validacao razao social
  if (document.getElementById("rsocial").value == "" || document.getElementById("rsocial").length < 2) {
    mensg_rsocial.innerHTML = "Preencha o campo razao social corretamente!";
    tudOk2 = false;
    document.getElementById("rsocial").focus();
  }

  //validacao email
  if (document.getElementById("email2").value == "" || document.getElementById("email2").indexOf == "@" == -1 ||
    document.getElementById("email2").indexOf == '.' == -1) {
    mensg_email2.innerHTML = "Preencha campo E-mail corretamente!";
    tudOk2 = false;
    document.getElementById("email2").focus();
  }

  //validacao telefone
  if (document.getElementById("tel2").value == "" || document.getElementById("tel2").length < 15) {
    mensg_tel2.innerHTML = "Preencha o campo telefone corretamente!";
    tudOk2 = false;
    document.getElementById("tel2").focus();
  }

  //validacao username
  if (document.getElementById("username2").value == "" || document.getElementById("username2").length < 4) {
    mensg_username2.innerHTML = "Preencha o campo nome de usuario corretamente!";
    tudOk2 = false;
    document.getElementById("username2").focus();
  }

  //validacao senha
  if (document.getElementById("senha2").value == "" || document.getElementById("senha2").length < 4) {
    mensg_senha2.innerHTML = "Preencha o campo senha corretamente!";
    tudOk2 = false;
    document.getElementById("senha2").focus();
  }
  if (tudOk2 == true) {
    idDoForm2.submit();
  }
  if (tudOk2 == true) {
    window.location.href = "telaproduto.html"
  }
}
