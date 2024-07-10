import { StyledJogo } from "./styled";
import { useState } from 'react';
import { ListaMusicas } from "../../Components/Listas/musicas";

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

export default function Jogo() {
    const [musicaAtual, setMusicaAtual] = useState(null);
    const [valorInput, setValorInput] = useState("");
    const [resultado, setResultado] = useState(null);
    const [botaoDesativado, setBotaoDesativado] = useState(false);

    const tocarMusicaAleatoria = () => {
        const musicaAleatoria = Math.floor(Math.random() * ListaMusicas.length);
        setMusicaAtual(ListaMusicas[musicaAleatoria]);
        setBotaoDesativado(true);

        console.log(ListaMusicas[musicaAleatoria].id);
        console.log(ListaMusicas[musicaAleatoria].nome);
    };

    const pegarNomeMusica = (event) => {
        setValorInput(event.target.value);
    };

    const enviar = (event) => {
        event.preventDefault();

        const nomeMusicaInput = padraoString(valorInput);
        const nomeMusicaLista = padraoString(musicaAtual.nome);

        if (nomeMusicaLista === nomeMusicaInput) {
            setResultado("sim");
        } else {
            setResultado("nao");
        }

        // setValorInput("");
    };

    const reiniciarPagina = () => {
        window.location.reload();
    };

    return (
        <StyledJogo>
            <div id="container">
                <img className="titulo" src={titulo} alt="img" />

                <div id="player">
                    <button
                        className="play"
                        onClick={tocarMusicaAleatoria}
                        disabled={botaoDesativado}
                    >
                        GERAR MÚSICA
                    </button>

                    {musicaAtual && (
                        <audio controls>
                            <source src={musicaAtual.musica} type="audio/mpeg" />
                            Audio não suportado pelo navegador
                        </audio>
                    )}

                    <form onSubmit={enviar}>
                        <input
                            onChange={pegarNomeMusica}
                            value={valorInput}
                            type="text"
                            placeholder="Digite o nome da música..."
                        />
                        <div className="cxBotao">
                            <button type="submit" className="enviar">Enviar</button>
                            <button onClick={reiniciarPagina} className="enviar">Reiniciar</button>
                        </div>
                    </form>
                </div>

                {resultado === "sim" ? (
                    <>
                        <img className="msg" src={ganhou} alt="img" />
                        <img className="confete" src={confete} alt="gif" style={{ display: 'block' }} />
                    </>
                ) : resultado === "nao" ? (
                    <img className="msg" src={perdeu} alt="img" />
                ) : (
                    <div className="espaco"> </div>
                )}
            </div>
        </StyledJogo>
    );
}
