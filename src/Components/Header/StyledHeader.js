import styled, { css } from "styled-components";


import { verde, bege } from "../constants/constants";



export const StyledHeader = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  border: none;
 

  position: fixed;
  top: 0;
  background-color: transparent;
  z-index: 9;

  display: flex; 
  align-items: center;
  justify-content: center;

  transition: opacity 4s ease-in-out, visibility 10s ease-in-out;


  #logo1{
    width: 90%;
    opacity: 1;
    position: absolute;
  }
  #logo2{
    width: 900px;
    height: 20px;
    opacity: 0;
    cursor: pointer;
  }

  a{
    text-decoration: none;
    outline: none;
    color: #000000;
    &:hover{
      color: ${verde};
    }
  }

  .cxNavegacaoEs{
    width: 50%;
    height: 50px;
    opacity: 0;

    display: flex; 
    align-items: center;
    justify-content: left;
  }
  .cxNavegacaoDr{
    width: 50%;
    height: 50px;
    opacity: 0;

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

  button{
    display: none;
  }


  @media (max-width:900px) {
    #logo1{
    width: 90%;
    opacity: 1;
    position: absolute;
    
    }
    #logo2{
    width: 500px;
    height: 20px;
    opacity: 0;
    cursor: pointer;
    }
  }



 

//rolagem com a tela grande.
  &.rolagem {
    /* cabeçalho */
      height: 100px;
      opacity: 1;
      background-color: ${bege};
      transition: 1s;
      
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid #eeeed5;

      .cxNavegacaoEs, .cxNavegacaoDr{
        opacity: 1;
        transition: 4s;
      }

    #logo1{
      width: 100px;
      opacity: 0;
      transition: 1s;
      position: absolute;
    }
    #logo2{
      width: 100px;
      height: 60px;
      opacity: 1;
      transition: 1s;
    }
  }






${({ mobile }) =>
        mobile &&
        css`
      .linha:nth-child(1) {
        transform: translateY(20px) rotate(45deg);
       
      }

      .linha:nth-child(2) {
        opacity: 0;
        transition: opacity 0.05s ease-in-out; 
      }

      .linha:nth-child(3) {
        transform: translateY(-10px) rotate(-45deg);

      }
    `}






    @media (max-width:900px) {
    height:50vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;



    .cxNavegacaoEs, .cxNavegacaoDr{
        display: none;
      }

      
//rolagem com a tem 900 -
  &.rolagem {
    
    height: 100px;
    opacity: 1;
    background-color: ${bege};
    transition: 1s;
      
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #eeeed5;

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

  #logo1{
    width: 100px;
    opacity: 0;
    transition: 1s;
    position: absolute;
    right:30px;
    }
    #logo2{
    width: 100px;
    height: 70px;
    opacity: 1;
    transition: 1s;
    }
  }


  }





`