import { StyledHeader2 } from "./styled";
import { useState } from "react";
import MenuMobile from "../MenuMobile/MenuMobile";
import logo2 from "../../assets/imgagens/inicio/by.png";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Header2() {
    const [mobileAtivado, setMobileAtivado] = useState(false);
    const navigate = useNavigate();

    function ativaMenuMobile() {
        setMobileAtivado(!mobileAtivado);

        if (mobileAtivado) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }

    function paginaInicial() {
        navigate('/')
        setMobileAtivado(false)
    }

    const whatsapp = "https://api.whatsapp.com/send?phone=32999158008"
    const insta = "https://www.instagram.com/backyardjf?igsh=MTlxamd1c3Qwb2djNg=="

    return (
        <>
            <MenuMobile mobileAtivado={mobileAtivado} />

            <StyledHeader2 mobile={mobileAtivado ? "true" : undefined}>
                <button onClick={ativaMenuMobile}>
                    <span className="linha"></span>
                    <span className="linha"></span>
                    <span className="linha"></span>
                </button>

                <div className="cxNavegacaoEs">
                    <div className="navegacao">
                        <Link to={"/sobrenos"}>
                            <p>SOBRE</p>
                        </Link>
                        <Link to={"/menu"}>
                            <p>MENU</p>
                        </Link>
                        <Link to={"/eventos"}>
                            <p>EVENTOS</p>
                        </Link>
                    </div>
                </div>


                <img onClick={paginaInicial} id="logo2" src={logo2} alt="logo" />


                <div className="cxNavegacaoDr">
                    <div className="navegacao">
                        <div className="circuloIcone">
                            <Link to={insta} target="_blank" rel="noreferrer" className="circuloIcone"><FaInstagram className="icone" /></Link>
                        </div>
                        <div className="circuloIcone">
                            <Link to={whatsapp} target="_blank" rel="noreferrer" className="circuloIcone"><FaWhatsapp className="icone" /></Link>
                        </div>
                    </div>
                </div>
            </StyledHeader2>
        </>
    );
}