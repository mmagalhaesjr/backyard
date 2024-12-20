import styled from "styled-components";
import foto1 from '../../assets/musicas/fundoJogo.png';
import foto2 from '../../assets/musicas/botao.png';
import { bege } from "../../Constants/cores";

export const StyledJogo = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${bege};
  display: flex;
  align-items: center;
  justify-content: center;

  #container {
    width: 100%;
    max-width: 600px;
    height: 100%;
    background-color: #1859c1;
    background-color: #0f326a;
    background-image: url(${foto1});
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

  .musica {
    width: 100px;
    height: 100px;
    position: relative;
    cursor: pointer;
    background-image: url(${foto2});
    background-repeat: no-repeat;
    background-size: 100%;
   

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .play, .pause {
    color: #1859c1;
    font-size: 4rem;
    z-index: 2;
    position: absolute;
    top: 20px;
    right: 15px;
  }

  .titulo {
    width: 95%;
    margin-top: 100px;
  }

  .msg, .espaco {
    width: 100%;
    height: 400px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .espaco img{
    width: 80%;
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
    padding-left: 5px;
    background-color: #ffffff;
    font-size: 1rem;
    border: solid 4px #ffffff;
    outline: none;
    transition: background-color 0.3s, border 0.3s, box-shadow 0.3s;
    color: #000000;

    &::placeholder {
      color: #6c6868;
      text-align: center;
    }
    &:hover {
      background-color: #ffffff;
      box-shadow: 0 0 10px #00c4ff, 0 0 10px #00c4ff, 0 0 10px #00c4ff, 0 0 40px #00c4ff;
    }
  }

  .enviar {
    width: 80px;
    height: 30px;
    border-radius: 20px;
    margin-top: 10px;
    border: none;
    outline: none;
    background-color: #ffffff;
    font-size: 1rem;
    color: #000000;
    font-weight: 700;
    transition: background-color 0.3s, box-shadow 0.3s;

    &:hover {
      background-color: #ffffff;
      box-shadow: 0 0 10px #00c4ff, 0 0 10px #00c4ff, 0 0 10px #00c4ff, 0 0 40px #00c4ff;
    }
  }

  .cxBotao {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    z-index: 2;
  }

  .confete {
    position: absolute;
    top: 0;
    display: none;
    z-index: 1;
  }
`;
