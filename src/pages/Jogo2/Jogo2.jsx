import { StyledJogo2 } from "./styled";


import titulo from "../../assets/musicas/titulo.png";
import { useState } from "react";
import { ListaMusicas } from "../../Components/Listas/musicas";
import { useParams } from "react-router-dom";





// Função para normalizar strings: remover acentos, pontuação e converter para minúsculas
// const padraoString = (str) => {
//     return str
//         .normalize("NFD")
//         .replace(/[\u0300-\u036f]/g, "")
//         .replace(/[^\w\s]|_/g, "")
//         .replace(/\s+/g, " ")
//         .toLowerCase();
// };


export default function Jogo2() {

    const { musicaId } = useParams();
    const [musicainput, setMusicainput] = useState('')
  


    function pegarValorinput(event){
        setMusicainput(event.target.value);
        console.log(musicainput)
    }


    let musicaSelecionada = ListaMusicas.find(obj => (
        obj.id == Number(musicaId)
    ))

   


    return (
        <StyledJogo2>
            <div id="container">
                <img className="titulo" src={titulo} alt="img" />

                <div id="player">


                    <audio controls>
                        <source src={musicaSelecionada.musica} type="audio/mpeg" />
                        Audio não suportado pelo
                        {/* {console.log(musicaSelecionada.nome)} */}
                    </audio>

                    <form >

                        <input onChange={pegarValorinput} value={musicainput} type="text" placeholder="Digite o nome da música..." />

                        <div className="cxBotao">
                            <button type="submit" className="enviar">Enviar</button>
                            <button className="enviar">Reiniciar</button>
                        </div>

                  

                    </form>
                </div>

            </div>
        </StyledJogo2>
    );
}
