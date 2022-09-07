import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Item(){

    const [commentIsOpen, setComentOpen] = useState(false);

    const [imgZoom, setImgZoom] = useState("hidden");
    const [styleComent, setStyleComent] = useState({
        width: 0,
        visibility: "hidden",
        display: "none"
    })
    const [buttonCmtTitle, setButtonCmtTitle] = useState("Ver comentários");
    const [myComentario, setMyComentario] = useState("");


    const location = useLocation();

    const {item} = location.state;

    const comentarios = [
        {
            id: 1,
            user: "Usuário 1",
            comentario: "MUITO BOM <3",
            data: "10/05/2022"
          },
          {
            id: 2,
            user: "Usuário 2",
            comentario: "Incrivel super recomendo!!",
            data: "10/05/2022"
          },
          {
            id: 3,
            user: "Usuário 3",
            comentario: "Todos nós aqui em casa adoramos. Muito obrigado!",
            data: "10/05/2022"
          },
          {
            id: 4,
            user: "Usuário 4",
            comentario: "Comprei vários e realmente foi um dinheiro bem gasto.",
            data: "10/05/2022"
          },
    ];

    const [comentariosViews, setComentariosView] = useState(comentarios);

    const comentarioView = (comentarioRender) => {
        return (
            <li key={comentarioRender.id} className="comentarioDiv">
                <h1>{comentarioRender.user}</h1>
                <p>{comentarioRender.comentario}</p>
                <p>Publicado em: {comentarioRender.data}</p>
            </li>
        );
    }

    function abrirImagem(){
        setImgZoom("visible");
    }

    function fecharZoom(){
        setImgZoom("hidden");
    }

    function mostrarComentarios(){
        if(!commentIsOpen){
            setStyleComent(
                {
                    width: "100%",
                    visibility: "visible",
                    display: "block"
                }
            )
            setComentOpen(true);
            setButtonCmtTitle("Fechar comentários");
        }
        else{
            setStyleComent(
                {
                    width: 0,
                    visibility: "hidden",
                    display: "none"
                }
            )
            setComentOpen(false);
            setButtonCmtTitle("Ver comentarios");
        }
    }

    function adicionarComentarios(){
        setComentariosView([...comentariosViews, {
            id: comentariosViews.length+1,
            user: "Admin",
            comentario: myComentario.target.value,
            data: new Date().getDate() + "/" + (new Date().getMonth()+1) + "/" + new Date().getFullYear()
        }]);

        setMyComentario("");
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
                <div className="imageZoom" style={{visibility: imgZoom}}>
                    <FontAwesomeIcon onClick={() => {fecharZoom()}} className="iconeVoltar" icon={faArrowLeft} />
                    <img src={item.imagem} className="zoomImagem" />
                </div>

                <main className="mainPrincipal">
                   <div className="itemView">
                        <img onClick={() => {abrirImagem()}} className="itemImage" src={item.imagem} />
                        <div className="itemViewInfos">
                            <h1>{item.nome}</h1>
                            <p>{item.description}</p>
                            <p>{item.valor}</p>
                            <Link to="/carrinho" state={{item_comprar: [item]}}><button>Comprar</button></Link><br />
                            <button>Adicionar ao carrinho</button>
                        </div>
                   </div>
                   <hr />
                   <div className="divComentarios">
                        <h1>Comentários</h1>
                        <input onInput={(text) => {setMyComentario(text)}} type={"text"} placeholder="Deixe um comentário" />
                        <button onClick={() => {adicionarComentarios()}}><FontAwesomeIcon icon={faPaperPlane} /></button><br />

                        <button onClick={() => {mostrarComentarios()}} className="buttonComentario">{buttonCmtTitle}</button>
                        <ul style={{visibility: styleComent.visibility, height: styleComent.width, display: styleComent.display, marginLeft: "-4%"}}>
                            {comentariosViews.map((item) => (
                                comentarioView(item)
                            ))}
                        </ul>
                   </div>
                </main>

                <footer className="footerInitial">
                    <p>WhatsApp: xxxxxxx</p>
                    <p>Instagram: @xxxxx</p>
                </footer>
            </section>
        </div>
    );
}