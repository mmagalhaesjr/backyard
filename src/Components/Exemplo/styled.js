

import styled from "styled-components";
import fundo from '../../assets/capa1.jpg';

export const Styled = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${fundo});
  background-repeat: no-repeat; 
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

`;
