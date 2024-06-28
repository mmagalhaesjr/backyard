import Cabecalho from "../../Components/Cabecalho/Cabecalho";
import Inicial from "../Inicial/inicial";
import { StyledHome } from "./styled";

export default function Home(){
    return(
        <StyledHome>

            <Cabecalho />
            <Inicial />
        
        </StyledHome>
    )
}