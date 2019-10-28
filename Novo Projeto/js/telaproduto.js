window.onload = function () {
  document.getElementById("id").focus();
}
var tudOk = true;
function cadastrar() {
  obrigatorios = document.getElementsByClassName('obrigatorios');
  var idList = [];
  for (var obrigatorio in obrigatorios) {
    mensg.innerHTML = " Preencha os dados corretamente! ";
  }

  //validacao id
  if (document.getElementById("id").value == "" || document.getElementById("id").length < 2) {
    mensg_id.innerHTML = "Preencha o campo id corretamente!";
    tudOk = false;
    document.getElementById("id").focus();
  }

  //validacao sku
  if (document.getElementById("sku").value == "" || document.getElementById("sku").length < 2) {
    mensg_sku.innerHTML = "Preencha o campo sku corretamente!";
    tudOk = false;
    document.getElementById("sku").focus();

  }

  //validacao nome
  if (document.getElementById("nome").value == "" || document.getElementById("nome").length < 2) {
    mensg_nome.innerHTML = "Preencha o campo nome corretamente!";
    tudOk = false;
    document.getElementById("nome").focus();
  }

  //validacao preço
  if (document.getElementById("preco").value == "" || document.getElementById("preco").length < 2) {
    mensg_preco.innerHTML = "Preencha o campo preço corretamente!";
    tudOk = false;
    document.getElementById("preco").focus();
  }

  //validacao descr1
  if (document.getElementById("descr1").value == "" || document.getElementById("descr1").length < 2) {
    mensg_descr1.innerHTML = "Preencha o campo descrição básica corretamente!";
    tudOk = false;
    document.getElementById("descr1").focus();
  }

  //validacao descr2
  if (document.getElementById("descr2").value == "" || document.getElementById("descr2").length < 2) {
    mensg_descr2.innerHTML = "Preencha o campo descrição completa corretamente!";
    tudOk = false;
    document.getElementById("descr2").focus();
  }

  //validacao categoria
  if (document.getElementById("categoria").value == "" || document.getElementById("categoria").length < 2) {
    mensg_categoria.innerHTML = "Preencha o campo categoria corretamente!";
    tudOk = false;
    document.getElementById("categoria").focus();
  }

  if (tudOk == true) {
    idDoForm.submit();
  }
  if (tudOk == true) {
    window.location.href = "telarelatorio.html"
  }
}

