import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faG, faF} from '@fortawesome/free-solid-svg-icons';

import './index.css'

export default function Login(){

    const navigation = useNavigate();

    const [usersData, setUserData] = useState([]);

    const login_data = {
        nome: "",
        senha: ""
    };

    useEffect(() => {
        fetch("http://localhost:3000/usuarios", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json())
        .then((data) => {
            setUserData(data);
            // console.log(data);
        })
        .catch(error => console.log(error));
    }, []);

    function verificarDados(e){

        e.preventDefault();
        var index = Object.keys(usersData).find(key => (usersData[key].username === login_data.nome.target.value || usersData[key].email === login_data.nome.target.value));
        
        if(index != undefined){
            if((login_data.nome.target.value == usersData[index].username || login_data.nome.target.value == usersData[index].email)  && login_data.senha.target.value == usersData[index].senha){
                alert("Conectando ...");
                navigation("/main");
            }
            else{
                e.preventDefault();
                alert("Email ou senha inválidos!");
            }
        }
        else{
            e.preventDefault();
            alert("Email não existe")
        }
    }

    return(
        <div div id="geral" className="App">
            <header className="headerInitial">
                <img src="../assets/images/icon.jpg" />
                <div className="divSuperiorHeader">
                <div></div>
                <div></div>
                </div>
                <div className="divInferiorHeader"></div>
            </header>

            <main className="mainCadastro">
                <h1>Login</h1>
                <section className="cadastroArea">
                    <br />
                    <br />
                    <Link to="/cadastro" className="cconta">Não possuo uma conta</Link>
                    <hr />
                    <form>

                        <input id="Nome" type={"text"} placeholder={"Nome de usuário"} onInput={text => {login_data.nome = text}} /><br />
                        <input id="Senha" type={"password"} placeholder={"Senha"} onInput={text => {login_data.senha = text}} /><br />

                        <button onClick={(e) => {verificarDados(e)}}>Conectar-se</button>
                        <Link to="/" ><button>Cancelar</button></Link>

                    </form>
                </section>
            </main>
        </div>
    );
}