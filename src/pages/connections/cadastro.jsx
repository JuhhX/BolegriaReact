import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

export default function Cadastro(){
    var [userData, setUserData] = useState({}); 

    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [csenha, setcsenha] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");
    const [cep, setcep] = useState("");
    const [rua, setRua] = useState("");

    const navigation = useNavigate();

    var getJSON = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
          var status = xhr.status;
          if (status === 200) {
            callback(null, xhr.response);
          } else {
            callback(status, xhr.response);
          }
        };
        xhr.send();
    };

    function verificarCEP(cep){
        if(cep.target.value.length == 8){
            var cep_pesquisar = Number(cep.target.value);
            
            if(Number.isNaN(cep_pesquisar)){
                alert("CEP digitado não válido");
            }
            else{
                var resposta = getJSON("https://viacep.com.br/ws/"+cep.target.value+"/json/", 
                function(error, data){
                    if(error == null){
                        setRua(data.logradouro);
                    }
                    else{
                        alert("Algo de errado aconteceu ...")
                    }
                })
            }
        }
        else{
            setRua("");
        }
    }

    function verificarCampos(e){

        if(nome.length == 0 && senha.length == 0 && csenha.length == 0 && email.length == 0 &&
        celular.length == 0 && cep.length == 0 && rua.length == 0){
            e.preventDefault();
            alert("Todos os campos são obrigatórios!");
        }
        else if(senha.target.value != csenha.target.value){
            e.preventDefault();
            alert("As senhas digitadas são diferentes.");
        }
        else{
            var dados = {
                id: 3,
                username: nome.target.value,
                email: email.target.value,
                senha: senha.target.value,
                celular: celular.target.value,
                cep: cep.target.value,
            }
    
            setUserData(dados);
    
            console.log(dados);
    
            fetch("http://localhost:3000/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dados)
            })

            alert("Redirecionando ... ");
            navigation("/main");
        }
    }

    return(
        <div id="geral" className="App">
            <header className="headerInitial">
                <img src="../assets/images/icon.jpg" />
                <div className="divSuperiorHeader">
                <div></div>
                <div></div>
                </div>
                <div className="divInferiorHeader"></div>
            </header>

            <main className="mainCadastro">
                <h1>Cadastro</h1>
                <section className="cadastroArea">
                    <br />
                    <br />
                    <Link to="/login" className="cconta">Ja possuo conta</Link>
                    <hr />
                    <form>
                        <p>Todos os campos são obrigatórios</p>
                        <input id="Nome" type={"text"} placeholder={"Nome de usuário"} onInput={text => setNome(text)} /><br />
                        <input id="Senha" type={"password"} placeholder={"Senha"} onInput={text => setSenha(text)} /><br />
                        <input id="Csenha" type={"password"} placeholder={"Confirmar senha"} onInput={text => setcsenha(text)} /><br />
                        <input id="Email" type={"email"} placeholder={"Email"} onInput={text => setEmail(text)} /><br />
                        <input id="Celular" type={"text"} placeholder={"Celular"} onInput={text => setCelular(text)} /><br />
                        <input id="CEP" type={"text"} placeholder={"CEP"} onInput={text => {verificarCEP(text); setcep(text)}} /><br />
                        <input id="Rua" type={"text"} placeholder={"Rua"} onInput={text => setRua(text)} value={rua} /><br />

                        <button onClick={(e) => {verificarCampos(e)}}>Cadastrar</button>
                        <Link to="/" ><button>Cancelar</button></Link>

                    </form>
                </section>
            </main>
        </div>
    );
}