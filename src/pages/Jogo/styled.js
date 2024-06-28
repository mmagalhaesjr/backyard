import styled from "styled-components";
import { azul, branco, cinza } from '../../Constants/cores';

export const StyledJogo  = styled.section`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;


#container{
    width: 100%;
    height: 100%;
    background-color: ${azul};
    position: relative;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

}
#player{
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly; 
    
   
    
    
}

.titulo{
    width: 90%;
    height: 20%;
    max-width: 400px;
}
.msg{
    width: 90%;
    height: 20%;
    max-width: 400px;
    
}
.espaco{
    width: 90%;
    height: 20%;
    height: 150px;
    margin-top: 50px;
  
}


.play{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
    box-shadow: 0px 10px 14px -7px #000000;
    border: none;
    background-color: ${cinza}; 
    font-size: 1rem;
    font-weight:700;
   
    &:hover{
        background-color: #ffffff; 
        box-shadow: 0 0 20px #00c4ff, 
                0 0 40px #00c4ff, 
                0 0 80px #00c4ff, 
                0 0 100px #00c4ff; 
    }
}
form{
    width:100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

input{
    width:95%;
    max-width: 500px;
    height: 50px;
    border-radius: 30px;
    margin-top: 10px;
    outline: none;
    padding-left: 5px;
    background-color: ${cinza}; 
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom:2px solid ${cinza};
    font-size: 1rem;
   

    &:hover{
        background-color: #ffffff;
        border: 2px solid #ffffff;
        box-shadow: 0 0 20px #00c4ff, 
                0 0 40px #00c4ff, 
                0 0 80px #00c4ff, 
                0 0 100px #00c4ff; 
    }

 &::placeholder{
    color: #000000;
    text-align: center;
    
 }
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
    background-color: ${cinza};
    font-size: 1rem;
    color: #000000;
    font-weight: 700;
   
    &:hover{
        background-color: ${branco};
        box-shadow: 0 0 20px #00c4ff, 
                0 0 40px #00c4ff, 
                0 0 80px #00c4ff, 
                0 0 100px #00c4ff; 
    }
}
.cxBotao{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

audio {
    width:95%;
    max-width: 500px;
}

audio::-webkit-media-controls-panel {
   
  background-color: ${cinza}; 
  padding: 10px; 
}

audio::-webkit-media-controls-play-button,
audio::-webkit-media-controls-volume-slider {
    color: #000000; 
   
}

audio::-webkit-media-controls-current-time-display,
audio::-webkit-media-controls-time-remaining-display {
    color: #000000; 
}


`