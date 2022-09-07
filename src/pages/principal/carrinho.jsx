import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import "./index.css"

export default function Carrinho(){

    const location = useLocation();
    const {item_comprar} = location.state;
    const [itens_, setItens] = useState(item_comprar)

    function adicionarUm(index){
        itens_[index].quantidade = Number(itens_[index].quantidade) + 1;
    }
    
    function diminuirUm(index){
        itens_[index].quantidade = Number(itens_[index].quantidade) - 1;
    }

    function removerItem(){

    }

    const itensCarrinho = (itemRender, index) => {
        return(
            <li key={index} className="itemCarrinho">
                <div className="itemCarrinhoInfo">
                    <img src={itemRender.imagem} />
                    <h1 style={{gridRowStart: 2}}>{itemRender.nome}</h1>
                    <p style={{gridRowStart: 3}}>Valor Unidade: {itemRender.valor}</p>
                    <p style={{gridRowStart: 4}}>Quantidade: {itemRender.quantidade}</p>
                    <p style={{gridRowStart: 5}}>Valor por quantidade</p>
                </div>
                <div className="itemCarrinhoBtns">
                    <button onClick={() => {adicionarUm(index)}} style={{gridRowStart: 2}}><FontAwesomeIcon icon={faPlus} /></button>
                    <button onClick={() => {diminuirUm(index)}} style={{gridRowStart: 3}}><FontAwesomeIcon icon={faMinus} /></button>
                    <button onClick={() => {removerItem(index)}} style={{gridRowStart: 4}}><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </li>
        );
    }

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
                <main className="mainPrincipal">
                    <section className="meuCarrinhoSection">
                        <h1 className="mc">Meu Carrinho</h1>
                        <ul>
                            {itens_.map((element) => (
                                itensCarrinho(element, 0)
                            ))}
                        </ul>
                        <div style={{width: "80%", marginLeft: "10%", textAlign: "center"}}>
                            <button className="actionsCarrinho">Finalizar</button>
                            <button className="actionsCarrinho">Cancelar</button>
                        </div>
                    </section>
                </main>

                <footer className="footerInitial">
                    <p>WhatsApp: xxxxxxx</p>
                    <p>Instagram: @xxxxx</p>
                </footer>
            </section>
        </div>  
    );
}