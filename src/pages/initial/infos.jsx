import { Link } from "react-router-dom";
import './index.css'

export default function InfosPrincipais(){
    return(
        <div id="geral" className="App">
            <header className="headerInitial">
                <img src="../assets/images/icon.jpg" />
                <div className="divSuperiorHeader">
                <div></div>
                <div></div>
                </div>
                <div className="divInferiorHeader">
                <Link to="/main"><button>Inicial</button></Link>
                <Link to="/infos#VersaoSistema"><button>Sobre nós</button></Link>
                <Link to="/infos#RedesSociais"><button>Redes Sociais</button></Link>
                <Link to="/cadastro"><button>Cadastre-se</button></Link>
                </div>
            </header>

            <section className="sectionPrincipal">
                <main className="mainPrincipalInfos">
                    <h1 id="SobreNos">Sobre nós</h1>
                    <p>Bolegria <br /> Levamos alegria em forma de doce <br />
                    - Jaraguá <br />
                    - Terça a Domingo das 13:30 ás 18:30</p>
                    <hr />

                    <h1 id="RedesSociais">Redes Sociais</h1>
                    <a href="https://www.instagram.com/bolegria.nopote/"><button>Instagram</button></a>
                    <a href="https://api.whatsapp.com/send/?phone=xxxxxxxxxx"><button>WhatsApp</button></a>
                    <hr />

                    <h1>Sobre o sistema</h1>
                    <p>Sistema feito com React.JS e Vite</p>
                    <p>Versão do Sistema: 0.7</p>
                </main>

                <footer className="footerInitial">
                    <p>WhatsApp: xxxxxxx</p>
                    <p>Instagram: @xxxxx</p>
                </footer>
            </section>
        </div>
    );
}