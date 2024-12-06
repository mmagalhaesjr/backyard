
import styled from "styled-components";
import { bege } from "../constants/constants";





export const Styledpagina2 = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${bege};
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;



  @keyframes animar {
    0%{
    transform: translateX(0);
    }
    100%{
      transform: translateX(-100%);
    }
  }

  .cxInicio {
    width: 100vw;
    display: flex;
    align-items: left;
    justify-content: left;
    flex-wrap: nowrap;
    overflow: hidden;
  }

  .cxInicio img{
    width: 100vw;
    animation-name: animar;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    flex-shrink: 0;
  }


  .botao{
    width: 300px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
  }

  .cxMeio {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  form {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  .cxEmail {
    display: flex;
    align-items: start;
    justify-content: left;
    position: relative;
  }

  input {
    width: 500px;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #000000;
    outline: none;
  }

  .seta {
    font-size: 2rem;
    position: absolute;
    bottom: 0;
    right: 0px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.2);
    }
  }

@media (max-width:930px){
    .cxMeio img{
        width:30%;
    }
}

@media (max-width:600px) {
    height: 90vh;
    .cxMeio img {
        width:50%;
    }

  input {
    width: 300px;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #000000;
    outline: none;
  }

  .botao {
    width: 200px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
  }

}

`;


export const StyledFinal = styled.section`

    width: 100%;
    height: fit-content;
    position: relative;
    margin-top: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;

  .cxContatoEndereco{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul{
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    list-style-type: none;
    line-height: 1.5;
  }
  ul li{
    font-size: 1.2rem;
  }
  ul h2{
    font-size:2rem;
    margin-top: 5px;
  }
  .cxTexto{
    width:fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
  .cxTexto p{
    font-size: 1.3rem;
  }
  .cxTexto img{
    margin: 10px;
  }



  @media (max-width:1300px) {
  .cxTexto{
    width:fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
  .cxTexto p{
    font-size: 1rem;
  }
  .cxTexto img{
    margin: 10px;
  }

  .cxContatoEndereco{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul{
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    list-style-type: none;
    line-height: 1.5;
  }
  ul li{
    font-size: 1rem;
  }
  ul h2{
    font-size:1.3rem;
    margin-top: 5px;
  }
}

@media (max-width:1000px){
  
    width: 100%;
    height: fit-content;
    position: relative;
    margin-top: 50px;
 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  
  .cxTexto{
    width:fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    position: static;
    margin-top: 50px;
  }
  
}

@media (max-width:500px) {
    height: fit-content;
 
.cxContatoEndereco{
  width: 90%;
  justify-content: space-between;
}
  ul{
    margin-left: 0;
  }
  .cxTexto p{
    font-size: .5em;
  }
  .cxTexto img{
    width: 10px;
    margin: 10px;
  }
}

  


`