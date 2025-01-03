import { StyledMenuMobile } from "./styled";

import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";




// eslint-disable-next-line react/prop-types
export default function MenuMobile({ mobileAtivado, ativaMenuMobile }) {


    return (
      <StyledMenuMobile mobile={mobileAtivado ? "true" : "false"}>
        <nav className="nav-lista">
          <Link onClick={ativaMenuMobile} to={"/sobrenos"}>SOBRE NÓS</Link>
          <Link onClick={ativaMenuMobile} to={"/menu"}>MENU</Link>
          <Link onClick={ativaMenuMobile} to={"/eventos"}>EVENTOS</Link>
          <Link onClick={ativaMenuMobile} to={"/"}>HOME</Link>
  
          <div id="cxicones">
            <a href="#">
              <div className="circuloIcone">
                <FaInstagram className="icone" />
              </div>
            </a>
            <a href="#">
              <div className="circuloIcone">
                <FaWhatsapp className="icone" />
              </div>
            </a>
          </div>
        </nav>
      </StyledMenuMobile>
    );
  }