import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import "./index.css"

export default function Principal(){

    const [imgZoom, setImgZoom] = useState("hidden");

    const [imagemID, setImagemID] = useState(0);

    function ampliarImagem(id){
        setImagemID(id-1);
        setImgZoom("visible");
    }

    function fecharZoom(){
        setImgZoom("hidden");
    }

    const itens = [
        {
            id: 1,
            nome: "Brownie de Leite ninho com morango",
            imagem: "../assets/images/imagem1.jpg",
            description: "Brownie recheado com leite ninho e decorado com morango",
            valor: "R$45,00",
            quantidade: 1
        },
        {
            id: 2,
            nome: "Surpresa de uva",
            imagem: "../assets/images/imagem2.jpg",
            description: "Surpresa de uva em formato de casquinha de sorvete",
            valor: "R$50,00",
            quantidade: 1
        },
        {
            id: 3,
            nome: "Torta de chocolate com morango",
            imagem: "../assets/images/imagem3.jpg",
            description: "Torta de chocolate recheado com chocolate e leite ninho",
            valor: "R$80,00",
            quantidade: 1
        },
        {
            id: 4,
            nome: "Barra de prestigio",
            imagem: "../assets/images/imagem4.jpg",
            description: "Barra de chocolate recheada com prestígio",
            valor: "R$35,00",
            quantidade: 1
        },
        {
            id: 5,
            nome: "Barra de ovomaltine",
            imagem: "../assets/images/imagem5.jpg",
            description: "Barra de chocolate feita com Ovomaltine",
            valor: "R$35,00",
            quantidade: 1
        },
    ]

    const [data_itens, setDataItens] = useState(itens);

    const itensRender = [];

    const ItemView = (itemToRender) => {
        return(
            <li key={itemToRender.id} className="itemViewPrincipal">
                <div className="itemViewImage">
                    <img onClick={() => {ampliarImagem(itemToRender.id)}} className="itemViewItem" src={itemToRender.imagem} />
                </div>
                <div className="itemViewInform">
                    <h1 className="itemViewName">{itemToRender.nome}</h1>
                    <Link to="/item" state={{item: itemToRender}} ><button className="itemViewButton">Conferir</button></Link>
                </div>
            </li>
        )
    };

    itens.forEach(element => {
        
        itensRender.push(ItemView(element));
        
    })
    

    return(
        <div id="geral" className="App">
            <header className="headerInitial">
                <img src="../assets/images/icon.jpg" />
                <div className="divSuperiorHeader">
                <div></div>
                <div></div>
                </div>
                <div className="divInferiorHeader">
                <Link to="/"><button>Home</button></Link>
                <Link to="/infos#VersaoSistema"><button>Sobre nós</button></Link>
                <Link to="/infos#RedesSociais"><button>Redes Sociais</button></Link>
                <Link to="/cadastro"><button>Cadastre-se</button></Link>
                </div>
            </header>

            <section className="sectionPrincipal">
                <div className="imageZoom" style={{visibility: imgZoom}}>
                    <FontAwesomeIcon onClick={() => {fecharZoom()}} className="iconeVoltar" icon={faArrowLeft} />
                    <img className="zoomImagem" src={itens[imagemID].imagem} />
                </div>

                <main className="mainPrincipal">
                    <ul>
                        {data_itens.map((item) => (
                            ItemView(item)
                        ))}
                    </ul>
                </main>

                <footer className="footerInitial">
                    <p>WhatsApp: xxxxxxx</p>
                    <p>Instagram: @xxxxx</p>
                </footer>
            </section>

        </div>
    );
}