

import { useEffect, useState } from "react";

import MenuMobile from "../MenuMobile/MenuMobile";

import logo from '../../assets/imgagens/inicio/backyard.png';
import logo2 from '../../assets/imgagens/inicio/by.png';
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StyledHeader } from "./StyledHeader";



export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileAtivado, setMobileAtivado] = useState(false);


  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

      <StyledHeader className={scrollY > 50 ? 'rolagem' : ''} mobile={mobileAtivado}>
        <button onClick={mobile}>
          <span className='linha'></span>
          <span className='linha'></span>
          <span className='linha'></span>
        </button>

        <div className="cxNavegacaoEs">
          <div className="navegacao">
            <Link to={"/Sobre"}><p>SOBRE</p></Link>
            <Link to={"/Menu"}> <p>MENU</p></Link>
            <Link to={"/Eventos"}> <p>EVENTOS</p></Link>
          </div>
        </div>

        <img id='logo1' src={logo} alt="logo" />
       <Link to={'/'}><img  id='logo2' src={logo2} alt="logo" /></Link> 

        <div className="cxNavegacaoDr">
          <div className="navegacao">
            <div className="circuloIcone"><FaInstagram className="icone" /></div>
            <div className="circuloIcone"><FaWhatsapp className="icone" /></div>
          </div>
        </div>
      </StyledHeader>
    </>
  );
}
