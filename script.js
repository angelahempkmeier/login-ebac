function logar(){
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;

    if(login == "admin" && password == "admin"){
        alert('Sucesso.');
    }else{
        alert('Acesso negado!');
    }

}