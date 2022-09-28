function validar(){
    var nome         = document.getElementById("nome").value;
    var email        = document.getElementById("email").value;
    var telefone     = document.getElementById("telefone").value;
    var cpf          = document.getElementById("cpf").value;
    var cep          = document.getElementById("cep").value;
    var senha        = document.getElementById("senha").value;
    var confirSenha  = document.getElementById("confirSenha").value;

    

    if (!nome){
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerHTML = "Preencha o campo Nome";
        return false;
    }

    if (!email){
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerHTML = "Preencha o campo Email";
        document.getElementById("email").focus();
        return false;
    }

    if (!telefone){
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerHTML = "Preencha o campo Telefone";
        return false;
    }

    if (!cpf){
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerHTML = "Preencha o campo CPF";
        return false;
    }

    if (!cep){
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerHTML = "Preencha o campo CEP";
        return false;
    }

    if (!senha){
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerHTML = "Preencha o campo Senha";
        return false;
    }

    if (!confirSenha){
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerHTML = "Preencha o campo Confirmar Senha";
        return false;
    }

    if (senha != confirSenha){
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerHTML = "Senhas Diferentes";
        return false;
    }


}

function mostrarOcultarSenha(){
    var senha=document.getElementById("senha");
    if(senha.type=="password"){
        senha.type="text";

    }else{
        senha.type="password";
    }
}

