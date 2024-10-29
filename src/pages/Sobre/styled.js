import styled from "styled-components";

export const Styled = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  main{
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }


  #sobreImg{
    width: 100%;
  }
  #sobreImg img{
    width: 25vw;
    margin-left: 50px;
  }

 

  #cxTexto{
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 50px;
  }
  #cxTexto p{
    width: 50%;
    font-size: 1.5rem;
    margin-left: 50px;
  }

  #textoImg{
    width: 100%;
  }
  #textoImg img{
    width: 25vw;
    margin-left: 50px;
  }

  #drink{
    width: 35vw;
    position: absolute;
    right: 0;
    bottom: 0;
  }


  @media (max-width:900px){

    justify-content: center;

    main{
    height: 80%;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
 
    #sobreImg img{
        width: 60vw;
        margin-left: 20px;
    }
    #cxTexto {
        width: 100%;
        height:fit-content;
    }
    #cxTexto p{
        width: 90%;
        font-size:5vw;
        margin-left: 10px;
    }
   
    #textoImg img{
        width: 60vw;
        margin-left: 20px;
    }
  }
  

`