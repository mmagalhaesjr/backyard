
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
justify-content: center;




.texto{
    width: 50%;
    position: absolute;
    left: 100px;
    top: 100px;
}
.taca{
    width: 40%;
    position: absolute;
    right: 100px;
    bottom: 0;
}



@media (max-width:500px) {

    height: fit-content;

    
.texto{
    width: 90%;
    position: static;
    left: 10px;
    top: 300px;
    margin-top: 50px;
    margin-bottom: 50px;
}
.taca{
    width: 90%;
    position: static;
    right: 10px;
    bottom: 10px;
}
}


`