import { StyledHeader2 } from './styled';

import {useState } from "react";

import MenuMobile from "../MenuMobile/MenuMobile";

import logo2 from '../../assets/imgagens/inicio/by.png';
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";





export default function Header2() {
    const [mobileAtivado, setMobileAtivado] = useState(false);
  
  
    function mobile() {
      setMobileAtivado(!mobileAtivado);
  
      if (!mobileAtivado) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }

    return (
        <>

            <MenuMobile mobileAtivado={mobileAtivado} setMobileAtivado={setMobileAtivado} />

            <StyledHeader2  mobile={mobileAtivado}>
                <button onClick={mobile}>
                    <span className='linha'></span>
                    <span className='linha'></span>
                    <span className='linha'></span>
                </button>

                <div className="cxNavegacaoEs">
                    <div className="navegacao">
                        <Link to={"/sobrenos"}><p>SOBRE</p></Link>
                        <Link to={"/menu"}> <p>MENU</p></Link>
                        <Link to={"/eventos"}> <p>EVENTOS</p></Link>
                    </div>
                </div>

                <Link to={'/'}><img id='logo2' src={logo2} alt="logo" /></Link>

                <div className="cxNavegacaoDr">
                    <div className="navegacao">
                        <div className="circuloIcone"><FaInstagram className="icone" /></div>
                        <div className="circuloIcone"><FaWhatsapp className="icone" /></div>
                    </div>
                </div>
            </StyledHeader2>

        </>
    );
}
