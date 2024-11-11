import { Styledpagina1 } from "./styled";

import texto from '../../assets/imgagens/inicio/texto.png';
import Header from "../Header/Header";

export default function InicioCapa() { 



  return (
  
    <Styledpagina1 >
   
    <Header />

      <img id='texto' src={texto} alt="" />

    </Styledpagina1>
  );
}
