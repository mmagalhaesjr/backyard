import Header2 from "../../Components/Header2/Header2";
import { StyledEventos } from "./styled";

import backyard from '../../assets/imgagens/inicio/fotoBar.png'
import { useEffect } from "react";

export default function Eventos() {

    useEffect(() => {
            window.scrollTo(0, 0);
        }, [])

    return (
        <StyledEventos>
              <Header2 />
              
              <img src={backyard} alt="img" />

        </StyledEventos>
    )
}