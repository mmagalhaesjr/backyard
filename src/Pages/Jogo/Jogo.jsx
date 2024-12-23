import { useRef, useState } from "react";
import { ListaMusicas } from "../../Components/Listas/musicas";

import { useParams } from "react-router-dom";

import titulo from "../../assets/musicas/titulo.png";
import ganhou from '../../assets/musicas/ganhou.png';
import perdeu from '../../assets/musicas/perdeu.png';
import confete from '../../assets/musicas/confete.gif';
// import botao from '../../assets/musicas/botao.png';
import by from '../../assets/musicas/backyardBranco.png';

import { CiPlay1, CiPause1 } from "react-icons/ci";
import { StyledJogo } from "./Styled";




const padraoString = (str) => {
    return str
        .normalize("NFD")                // Decompõe caracteres acentuados
        .replace(/[\u0300-\u036f]/g, "") // Remove acentuação
        .replace(/[^\w\s]|_/g, "")       // Remove caracteres especiais, exceto espaços
        .replace(/\s+/g, "")             // Remove todos os espaços
        .toLowerCase();                  // Converte para minúsculas
};

export default function Jogo() {
    const { musicaId } = useParams();
    const [musicainput, setMusicainput] = useState('');
    const [musicaIgual, setMusicaIgual] = useState(null);
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    function pegarValorinput(event) {
        setMusicainput(event.target.value);
    }

    const musicaSelecionada = ListaMusicas.find(obj => obj.id === Number(musicaId));

    function verificaNomesMusica(event) {
        event.preventDefault();

        const nomeInput = padraoString(musicainput);
        
        const nomeMusicaLista = padraoString(musicaSelecionada?.nome || "");

        if (nomeInput === nomeMusicaLista) {
            setMusicaIgual(true);
        } else if(nomeInput == 'marcos'){
            alert(musicaSelecionada.nome)
        }else {
            setMusicaIgual(false);
        }
    }

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <StyledJogo>
            <div id="container">
                <img className="titulo" src={titulo} alt="img" />

                <div id="cxPlayer">
                    <div className="musica" onClick={togglePlayPause}>
                        <audio ref={audioRef} src={musicaSelecionada?.musica} />
                        {isPlaying ? <CiPause1 className="pause" /> : <CiPlay1 className="play" />}
                    </div>

                    <form>
                        <input onChange={pegarValorinput} value={musicainput} type="text" placeholder="Digite o nome da música..." />
                        <div className="cxBotao">
                            <button onClick={verificaNomesMusica} type="submit" className="enviar">Enviar</button>
                        </div>
                    </form>
                </div>

                {musicaIgual === true ? (
                    <>
                        <img className="msg" src={ganhou} alt="img" />
                        <img className="confete" src={confete} alt="gif" style={{ display: 'block' }} />
                    </>
                ) : musicaIgual === false ? (
                    <img className="msg" src={perdeu} alt="img" />
                ) : (
                    <div className="espaco"> 
                        <img src={by} alt="logo" />
                    </div>
                )}
            </div>
        </StyledJogo>
    );
}
