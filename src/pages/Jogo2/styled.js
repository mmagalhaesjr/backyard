

import styled from "styled-components";
import {  branco, cinza } from '../../Constants/cores';

export const StyledJogo2 = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  #container {
    width: 100%;
    height: 100%;
    background-color: black;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    overflow: hidden;
    
  }




  #player {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }

  .titulo,
  .msg {
    width: 90%;
    height: 20%;
    max-width: 400px;
  }

  .espaco {
    width: 90%;
    height: 20%;
    height: 150px;
    margin-top: 50px;
  }

 

  form {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 95%;
    max-width: 500px;
    height: 50px;
    border-radius: 30px;
    margin-top: 10px;
    outline: none;
    padding-left: 5px;
    background-color: #000000;
    outline: none;
    border-bottom: 2px solid ${cinza};
    font-size: 1rem;
    transition: background-color 0.3s, border 0.3s, box-shadow 0.3s;
    border: 2px solid #ffffff;
    box-shadow: 0 0 10px #00c4ff, 
                  0 0 10px #00c4ff, 
                  0 0 10px #00c4ff, 
                  0 0 40px #00c4ff;
    color:#ffffff;
   
    &::placeholder {
      color: #ffffff;
      text-align: center;
    
    }
  }

  .enviar {
    width: 80px;
    height: 30px;
    border-radius: 20px;
    margin-top: 10px;
    box-shadow: 0px 10px 14px -7px #000000;
    border: none;
    background-color: ${cinza};
    font-size: 1rem;
    color: #000000;
    font-weight: 700;
    transition: background-color 0.3s, box-shadow 0.3s;
    &:hover {
      background-color: ${branco};
      box-shadow: 0 0 10px #00c4ff, 
                  0 0 10px #00c4ff, 
                  0 0 10px #00c4ff, 
                  0 0 40px #00c4ff;
    }
  }

  .cxBotao {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    z-index: 10;
  }

  .confete {
    position: absolute;
    top: 0;
    display: none;
  }


  audio{
      border-radius: 100px;
      background-color: #ffffff;
      border: 2px solid #ffffff;
      box-shadow: 0 0 10px #00c4ff, 
                  0 0 10px #00c4ff, 
                  0 0 10px #00c4ff, 
                  0 0 40px #00c4ff;
  }


audio::-webkit-media-controls-panel {
  background-color: #000000; /* Cor de fundo do painel */
  border-radius: 15px; /* Arredondar os cantos do painel */

}
/* Estilizando a barra de progresso */
audio::-webkit-media-controls-timeline {
  height: 5px;
  background-color: #ffffff;
  border-radius: 100px;
  margin: 10px;
}
/* Estilizando a barra de volume */
audio::-webkit-media-controls-volume-slider {
  height: 5px;
  background-color: #ffffff;
  border-radius: 5px;
  border-radius: 100px;
}

  audio::-webkit-media-controls-play-button{
    background-color: #ffffff;
    border-radius: 50%;
  }
  audio::-webkit-media-controls-current-time-display,
  audio::-webkit-media-controls-time-remaining-display {
    color: #ffffff;
  }

  audio::-webkit-media-controls-mute-button,
  audio::-webkit-media-controls-volume-slider-container {
    background-color: #ffffff; /* Change the background color of mute button and volume slider */
    border-radius:50%;
   
}



  
`;

