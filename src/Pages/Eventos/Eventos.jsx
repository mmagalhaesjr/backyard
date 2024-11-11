import Header2 from "../../Components/Header2/Header2";
import { StyledEventos } from "./styled";

import backyard from '../../assets/imgagens/inicio/fotoBar.png'

export default function Eventos() {
    return (
        <StyledEventos>
              <Header2 />
              
              <img src={backyard} alt="img" />

        </StyledEventos>
    )
}