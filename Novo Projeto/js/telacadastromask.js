$(document).ready(function () {
    $("#cpf").mask("000.000.000-00")
    $("#cnpj").mask("00.000.000/0000-00")
    $("#tel").mask("(00) 0000-00009")

    $("#tel").blur(function (event) {
        if ($(this).val().length == 15) {
            $("#tel").mask("(00) 00000-0009")
        } else {
            $("#tel").mask("(00) 0000-00009")
        }
    })
    $("#tel2").mask("(00) 0000-00009")

    $("#tel2").blur(function (event) {
        if ($(this).val().length == 15) {
            $("#tel2").mask("(00) 00000-0009")
        } else {
            $("#tel2").mask("(00) 0000-00009")
        }
    })
})
