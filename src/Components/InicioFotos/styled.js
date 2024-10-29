
import styled from "styled-components";
import { bege } from "../constants/constants";



export const Styledpagina2 = styled.section`
width: 100%;
height: 100vh;
background-color: ${bege};
position: relative;

display: flex;
align-items: center;
justify-content: center;



img{
    width: 50%;
    height: 100%;
}

@media (max-width:500px) {

height: fit-content;

    img{
    width: 50%;
    height: 250px;
}
}




`