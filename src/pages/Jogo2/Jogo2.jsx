import { StyledJogo2 } from "./styled";



import { useState } from "react";
import { ListaMusicas } from "../../Components/Listas/musicas";
import { useParams } from "react-router-dom";

import titulo from "../../assets/musicas/titulo.png";
import ganhou from '../../assets/musicas/ganhou.png';
import perdeu from '../../assets/musicas/perdeu.png';
import confete from '../../assets/musicas/confete.gif';





// Função para normalizar strings: remover acentos, pontuação e converter para minúsculas
const padraoString = (str) => {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ")
        .toLowerCase();
};


export default function Jogo2() {

    const { musicaId } = useParams();
    const [musicainput, setMusicainput] = useState('')
    const [musicaIgual, setMusicaIgual] = useState(null);
  


    function pegarValorinput(event){
        setMusicainput(event.target.value);
    }


    let musicaSelecionada = ListaMusicas.find(obj => (
        obj.id == Number(musicaId)
       
    ))
    

    function verificaNomesMusica(event){

        event.preventDefault();

        let nomeInput = padraoString(musicainput)
        let nomeMusicaLista = padraoString(musicaSelecionada.nome)

        if(nomeInput === nomeMusicaLista){
            setMusicaIgual('sim')
        }else{
            setMusicaIgual('nao')
        }
    }

    const reiniciarPagina = () => {
        window.location.reload();
    };



    return (
        <StyledJogo2>
            <div id="container">
                <img className="titulo" src={titulo} alt="img" />

                <div id="player">

                    <audio controls >
                        <source src={musicaSelecionada.musica} type="audio/mpeg" />
                        Audio não suportado pelo
                    </audio>

                    <form >

                        <input onChange={pegarValorinput} value={musicainput} type="text" placeholder="Digite o nome da música..." />

                        <div className="cxBotao">
                            <button onClick={verificaNomesMusica} type="submit" className="enviar">Enviar</button>
                            <button onClick={reiniciarPagina}className="enviar">Reiniciar</button>
                        </div>

                    </form>

                </div>
                {musicaIgual === "sim" ? (
                    <>
                        <img className="msg" src={ganhou} alt="img" />
                        <img className="confete" src={confete} alt="gif" style={{ display: 'block' }} />
                    </>
                ) : musicaIgual === "nao" ? (
                    <img className="msg" src={perdeu} alt="img" />
                ) : (
                    <div className="espaco"> </div>
                )}
            </div>
        </StyledJogo2>
    );
}
