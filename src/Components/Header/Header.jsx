import { useEffect, useState } from "react";

import MenuMobile from "../MenuMobile/MenuMobile";

import logo from '../../assets/imgagens/inicio/backyard.png';
import logo2 from '../../assets/imgagens/inicio/by.png';
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
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



    function ativaMenuMobile() {
        setMobileAtivado(!mobileAtivado);

        if (!mobileAtivado) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    function paginaInicial(){
        Navigate('/')
        setMobileAtivado(false)
      }


       const whatsapp = "https://api.whatsapp.com/send?phone=32999158008"
        const insta ="https://www.instagram.com/backyardjf?igsh=MTlxamd1c3Qwb2djNg=="
     


    return (
        <>
            <MenuMobile ativaMenuMobile={ativaMenuMobile}  mobileAtivado={mobileAtivado} />

            <StyledHeader className={scrollY > 50 ? 'rolagem' : ''} mobile={mobileAtivado ? "true" : undefined}>

                <button onClick={ativaMenuMobile}>
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

                <img id='logo1' src={logo} alt="logo" />
                <Link onClick={paginaInicial} to={'/'}><img id='logo2' src={logo2} alt="logo" /></Link>

                <div className="cxNavegacaoDr">
                    <div className="navegacao">
                        <Link to={insta} target="_blank" rel="noreferrer" className="circuloIcone"><FaInstagram className="icone" /></Link>
                        <Link to={whatsapp} target="_blank" rel="noreferrer" className="circuloIcone"><FaWhatsapp className="icone" /></Link>
                    </div>
                </div>
            </StyledHeader>
        </>
    );
}
