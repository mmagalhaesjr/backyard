

import styled from "styled-components";
import {  azul, branco } from '../../Constants/cores';

import foto from '../../assets/musicas/fundoJogo.png'



const foto1 = `url(${foto})`;

export const StyledJogo2 = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  #container {
    width: 100%;
    height: 100%;
    background-color: ${azul};
    background-image: ${foto1};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 80% 10%;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    overflow: hidden;
    
  }

  #cxPlayer {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
  .musica{
    width: 100px;
    height: 100px;
    border-radius: 47% 57% 35% 60%;
    
    border: solid 2px ${props => 
    props.musicaIgual === true ? '#33ff00' :
    props.musicaIgual === false ? '#ff0000' :
    '#ffffff'};
 
    box-shadow: ${props => 
    props.musicaIgual === true ? '0 0 40px #33ff00' : 
    props.musicaIgual === false ? '0 0 40px #ff0000' :
    '0 0 10px #00c4ff, 0 0 10px #00c4ff, 0 0 10px #00c4ff, 0 0 40px #00c4ff'};

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .play,.pause{
    color: #ffffff;
    font-size: 3rem;
  }
  

  .titulo,
  .msg {
    width: 90%;
    height: 400px;
    max-width: 500px;
  }

  .espaco {
    width: 90%;
    height: 20%;
    height: 150px;
    margin-top: 50px;
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    background-color: #ffffff;
    outline: none;
    font-size: 1rem;

    border: solid 2px ${props => 
    props.musicaIgual === true ? '#33ff00' :
    props.musicaIgual === false ? '#ff0000' :
    '#ffffff'};
 
    box-shadow: ${props => 
    props.musicaIgual === true ? '0 0 40px #33ff00' : 
    props.musicaIgual === false ? '0 0 40px #ff0000' :
      '0 0 10px #00c4ff, 0 0 10px #00c4ff, 0 0 10px #00c4ff, 0 0 40px #00c4ff'};

    transition: background-color 0.3s, border 0.3s, box-shadow 0.3s;
    

    color:#000000;
   
    &::placeholder {
      color: #6c6868;
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
    background-color: #ffffff;
    font-size: 1rem;
    color: #000000;
    font-weight: 700;
    transition: background-color 0.3s, box-shadow 0.3s;
    &:hover {
      background-color: ${branco};
      box-shadow: 0 0 10px #00c4ff, 0 0 10px #00c4ff, 0 0 10px #00c4ff, 0 0 40px #00c4ff;
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






  
`;

