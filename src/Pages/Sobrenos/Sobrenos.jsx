import Header2 from "../../Components/Header2/Header2";
import { StyledSobrenos } from "./styled";
import drink from '../../assets/imgagens/sobre/drink.png';
import sobre from '../../assets/imgagens/sobre/sobre.png';
import texto from '../../assets/imgagens/sobre/texto.png';
import bar from '../../assets/imgagens/sobre/bar.png';
import botao from '../../assets/imgagens/sobre/botao.png';
import { useEffect } from "react";

export default function Sobrenos() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <StyledSobrenos>
            <Header2 />

            <main>

                <img className="img" src={sobre} alt="img" />

                <p className="txt">
                    Descubra uma experiência diferenciada em um ambiente único.
                </p>
                <p className="txt">
                    Descubra uma experiência diferenciada em um ambiente único. A economia está em constante transformação, e uma das tendências mais significativas dos últimos anos é a ascensão da economia colaborativa. Essa nova perspectiva, além de redefinir a maneira como fazemos negócios.
                </p>

                <img className="img" src={texto} alt="img" />
            </main>


            <img id="imgDrink" src={drink} alt="img" />

            <img id="imgBar" src={bar} alt="img" />

            <img id="botao" src={botao} alt="img" />


        </StyledSobrenos>
    )
}