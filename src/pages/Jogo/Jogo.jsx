import { StyledJogo } from "./styled";
import { useState } from 'react';
import { ListaMusicas } from "../../Components/Listas/musicas";

import titulo from "../../assets/musicas/titulo.png";
import ganhou from '../../assets/musicas/ganhou.png';
import perdeu from '../../assets/musicas/perdeu.png';

// Função para normalizar strings: remover acentos, pontuação e converter para minúsculas
const normalizeString = (str) => {
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
        console.log(ListaMusicas[musicaAleatoria].nome);
    };

    const handleInputChange = (event) => {
        setValorInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const normalizedInput = normalizeString(valorInput);
        const normalizedMusicaAtual = normalizeString(musicaAtual.nome);

        if (normalizedMusicaAtual === normalizedInput) {
            setResultado("sim");
        } else {
            setResultado("nao");
        }

        setValorInput("");
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

                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleInputChange}
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

                {resultado === "sim" ? <img className="msg" src={ganhou} alt="img" /> : resultado === "nao" ? <img className="msg" src={perdeu} alt="img" /> : <div className="espaco"> </div> }
            </div>
        </StyledJogo>
    );
}
