import { Link } from "react-router-dom";
import "./index.css"

export default function Initial(){
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

            <main className="mainInitial">
                <section>
                    <div>
                    <h1>Brownie de chocolate</h1>
                    <p>
                        + Venha conferir nosso delicioso brownie de <br /> chocolate com recheio de leite ninho
                    </p>
                    </div>
                    <div></div>
                    <div>
                    <img src="../assets/images/imagem1.jpg" />
                    </div>
                </section>
                <Link to="/main" ><button>Ver Doces</button></Link>
            </main>

            <footer className="footerInitial">
                <p>WhatsApp: xxxxxxx</p>
                <p>Instagram: @xxxxx</p>
            </footer>
        </div>
    );
}