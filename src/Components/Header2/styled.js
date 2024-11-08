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
  }
  .cxNavegacaoDr{
    width: 50%;
    height: 50px;

    display: flex; 
    align-items: center;
    justify-content: right;
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

  /* Transformações ao clicar no botão */
${({ mobile }) =>
        mobile &&
        css`
      .linha:nth-child(1) {
        transform: translateY(20px) rotate(45deg);
       
      }

      .linha:nth-child(2) {
        opacity: 0;
        transition: opacity 0.05s ease-in-out; /* Transição rápida */
      }

      .linha:nth-child(3) {
        transform: translateY(-10px) rotate(-45deg);

      }
    `}


    @media (max-width:900px) {
    .cxNavegacaoEs, .cxNavegacaoDr{
        display: none;
      }

  button{
    height: 100px;
    opacity: 0;
    background: none;
    border: none;
    cursor: pointer;
    margin-top: -50px;
    z-index: 9;
  }
 .linha{
    position: relative;
    width: 40px;
    height: 5px;
    background-color:#ffffff;
    display:block;
    margin: 10px auto;
    transform-origin:center;
 }

 
 


  }








`;
