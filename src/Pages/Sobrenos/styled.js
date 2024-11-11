import styled from "styled-components";
import { bege } from '../../Constants/cores';


export const StyledSobrenos = styled.main`
width: 100%;
height: fit-content;
background-color: ${bege};
overflow: hidden;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

main{
    width: 80%;
    height: 800px;
    margin-top: 100px;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-evenly;
}


#imgBar{
    width: 100%;
    z-index: 2;

}
#botao{
    width: 300px;
    margin: 20px;
}

.img{
    width: 300px;
    height:fit-content;
}
.txt{
    width: 50%;
    font-size: 1.5rem;
}

#imgDrink{
    width: 500px;
    position: absolute;
    right: 20px;
    bottom: 0;
    z-index: 1;
}

@media (max-width:900px) {

    main{
    width: 80%;
    height: 90vh;
    margin-top: 100px;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-evenly;
}


#imgBar{
    width: 100%;
    z-index: 2;

}
#botao{
    width: 300px;
    margin: 20px;
}

.img{
    width: 300px;
    height:fit-content;
}
.txt{
    width: 90%;
    font-size: 1.3rem;
}

#imgDrink{
    width: 200px;
    position: relative;
    left: 100px;
    bottom:0px;
    z-index: 1;
}


}

`