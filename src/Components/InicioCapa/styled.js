

import styled from "styled-components";
import fundo from '../../assets/imgagens/inicio/capa1.jpg';

export const Styledpagina1 = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${fundo});
  background-repeat: no-repeat; 
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #logo{
    width: 70%;
    opacity: 1;
    
   
  }
  #texto{
    width: 40%;
    position: absolute;
    bottom: 100px;
    left: 100px;
  }

&.rolagem {
  #logo{
    width: 20%;
    opacity: 0;
    visibility: visible;
    transform: translateY(-300px);  
    transition: 1s, 3s;
  }
  

}

@media (max-width:500px) {
  height:60vh;
  #texto{
    width: 80%;
    position: absolute;
    bottom: 100px;
    left: 10px;
  }
}

`;
