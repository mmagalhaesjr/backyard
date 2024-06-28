import styled from "styled-components";

export const StyledJogo  = styled.section`
width: 100%;
height: 100vh;

display: flex;
align-items: center;
justify-content: center;


#container{
    width: 100%;
    height: 100vh;
    background-color: #035d02;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.titulo{
    width: 90%;
    max-width: 400px;
    position: absolute;
    top: 50px;
}
.msg{
    width: 90%;
    position: absolute;
    bottom: 100px;
}


.play{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
    box-shadow: 0px 10px 14px -7px #000000;
    border: none;

    font-size: 1rem;
   
    &:hover{
        background-color: #67ff01ff;
        color: #ffffff;
        box-shadow: 0px 10px 20px 1px #ffffff;
    }
}

input{
    width: 60%;
    min-width: 400px;
    height: 50px;
    border-radius: 30px;
    margin-top: 10px;
    border: none;
    outline: none;
    padding-left: 5px;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.enviar{
    width: 80px;
    height: 30px;
    border-radius:20px;
    margin-top: 10px;
    box-shadow: 0px 10px 14px -7px #000000;
    border: none;

    font-size: 1rem;
   
    &:hover{
        background-color: #67ff01ff;
        color: #ffffff;
        box-shadow: 0px 10px 20px 1px #ffffff;
    }
}
.cxBotao{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
`