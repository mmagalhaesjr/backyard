import { StyledMenuMobile } from "./styled";

import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";



export default function MenuMobile({ mobileAtivado, setMobileAtivado }) {


  return (
    <StyledMenuMobile mobile={mobileAtivado}>
      <nav className="nav-lista">
        <Link href="/Sobre" >SOBRE</Link>
        <Link href="/Sobre" >MENU</Link>
        <Link href="/Sobre" >EVENTOS</Link>

        <div id="cxicones">
          <a onClick={() => '#'}>
            <div className="circuloIcone"><FaInstagram className="icone" /></div>
          </a>
          <a onClick={() => '#'}>
            <div className="circuloIcone"><FaWhatsapp className="icone" /></div>
          </a>
        </div>

      </nav>
    </StyledMenuMobile>
  );
}
