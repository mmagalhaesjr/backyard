import styled, { css } from "styled-components";



export const StyledHeader2 = styled.header`
    width: 100%;
    height: 100px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #eeeed5;
    position:fixed;
    top:0;

    display: flex;
    align-items: center;
    justify-content: center;


.cxNavegacaoEs{
    width: 50%;
    height: 50px;

    display: flex; 
    align-items: center;
    justify-content: left;
    border: solid 2px #ff0000;
  }
  .cxNavegacaoDr{
    width: 50%;
    height: 50px;

    display: flex; 
    align-items: center;
    justify-content: right;
    border: solid 2px #ff0000;
  }

  .navegacao{
    width:50%;

    display: flex; 
    align-items: center;
    justify-content: space-evenly;
  }

  .circuloIcone{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #000000;

    display: flex; 
    align-items: center;
    justify-content: center;
  }
  .icone{
    font-size: 1.5rem;
    color: #ffffff;
  }

  #logo2{
    width: 100px;
    height: 70px;
  }

  button{
    display: none;
  }

  
  ${({ mobile }) =>
        mobile &&
        css`
      .linha:nth-child(1) {
        transform: translateY(20px) rotate(45deg);
      }

      .linha:nth-child(2) {
        opacity: 0;
      }

      .linha:nth-child(3) {
        transform: translateY(-10px) rotate(-45deg);
      }
    `}


    @media (max-width:900px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .cxNavegacaoEs, .cxNavegacaoDr{
        display: none;
      }

      button{
        width: 100px;
        height: 100px;
        background-color: transparent;
        border: none;

        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content: center;
      }
      .linha {
        position: relative;
        width: 40px;
        height: 5px;
        background-color: #000000;
        display: block;
        transform-origin: center;
        transition: transform 1s, opacity 0.3s;
        margin: 5px auto;
  }


  }








`;
