import { StyledFinal, Styledpagina2 } from "./styled";

import { MdOutlineArrowRightAlt } from "react-icons/md";


import ponto from '../../assets/imgagens/inicio/ponto.png';
import texto1 from '../../assets/imgagens/rodape/texto1.png'
import texto2 from '../../assets/imgagens/rodape/texto2.png'
import texto3 from '../../assets/imgagens/rodape/texto3.png'
import botao from '../../assets/imgagens/rodape/botao.png'
import { Link } from "react-router-dom";




export default function InicioRodape() {

    // // const whatsapp = "https://api.whatsapp.com/send?phone=32999158008"
    // const insta = "https://www.instagram.com/musicboxstudiobr?igsh=bTBlYXRxMzZyNG13"

    return (
        <Styledpagina2>

            <div className="cxInicio">
                <img className="texto" src={texto1} alt="img" />
                <img className="texto" src={texto1} alt="img" />
            </div>

            <img className="botao" src={botao} alt="img" />

            <div className="cxMeio">
                <img className="texto" src={texto2} alt="img" />
                <img className="texto" src={texto3} alt="img" />
            </div>

            <form >
                <label htmlFor="">E-mail</label>

                <div className="cxEmail">
                    <input type="email" />
                    <MdOutlineArrowRightAlt className="seta" />
                </div>
            </form>




            <StyledFinal>
                <div className="cxContatoEndereco">
                    <ul>
                        <li>&nbsp;</li>
                        <li>(32) 99915-8008</li>
                        <li>@backyardjf</li>
                        <li>e-mail: backyardjf <br /> @gmail.com</li>
                        <h2>CONTATO</h2>
                    </ul>
                    <ul>
                        <Link to={'https://www.google.com.br/maps/place/Av.+Bar%C3%A3o+do+Rio+Branco,+3233-4105+-+Passos,+Juiz+de+Fora+-+MG,+36021-630/@-21.776865,-43.3469102,3a,75y,47.49h,101.35t/data=!3m7!1e1!3m5!1sYZM4wLAc_A5P4UL6fCGpBg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-11.346079147240644%26panoid%3DYZM4wLAc_A5P4UL6fCGpBg%26yaw%3D47.48679178529248!7i16384!8i8192!4m15!1m8!3m7!1s0x989b43af041855:0xd7ae3b52b2436da!2sAv.+Bar%C3%A3o+do+Rio+Branco,+3233-4105+-+Passos,+Juiz+de+Fora+-+MG,+36021-630!3b1!8m2!3d-21.7761762!4d-43.3458872!16s%2Fg%2F11c0rrd841!3m5!1s0x989b43af041855:0xd7ae3b52b2436da!8m2!3d-21.7761762!4d-43.3458872!16s%2Fg%2F11c0rrd841?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'} target="_blank" rel="noreferrer">
                            <li>Rua Morais e Castro, 179</li>
                            <li>Alto dos Passos</li>
                            <li>Juiz de Fora/MG</li>
                            <li>36025-160</li>
                            <li>Entrada pelo estacionamento do Mc Donald&sbquo;s.</li>
                            <h2>ENDEREÇO</h2>
                        </Link>
                    </ul>
                </div>
                <div className="cxTexto">
                    <p>© 2024 Todos os direitos reservados</p>
                    <img src={ponto} alt="img" />
                    <p>Política de privacidade</p>
                    <img src={ponto} alt="img" />
                    <p>Termos de uso</p>
                </div>
            </StyledFinal>

        </Styledpagina2>
    )
}