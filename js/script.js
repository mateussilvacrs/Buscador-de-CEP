let containerLista = document.getElementById("container-lista");
let txtInvalido = document.getElementById("txt-invalido");


function buscar(){

    let cep = document.getElementById("txt-numer").value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cep.length !==8){
        containerErro = "Digite um CEP válido"
        alert("CEP inválido digite 8 digitos")
        txtInvalido.innerHTML = `Você digitou ${cep.length} numeros.`
        txtInvalido.hidden=false
        containerLista.hidden=true
        return

    }

     fetch(url).then(function(response){
        response.json().then(mostrarEndereco);
});
}
    function mostrarEndereco(dados){

        let resultRua = document.getElementById("result-rua");
        let resultCidade = document.getElementById("result-cidade");
        let resultBairro = document.getElementById("result-bairro");
        let resultCep = document.getElementById("result-cep");

        if(dados.erro){
            txtInvalido.hidden=false
            containerLista.hidden=true
            txtInvalido.innerHTML =" Não existe nenhuma rua com esse CEP"
            return
        }else{
            txtInvalido.hidden=true
            containerLista.hidden=false
            resultRua.innerHTML = `${dados.logradouro}`
            resultCidade.innerHTML= `${dados.localidade} - ${dados.uf}`
            resultBairro.innerHTML= `${dados.bairro}`
            resultCep.innerHTML= `${dados.cep}`

        }
    }
   
