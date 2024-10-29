"use client";

import { Styled } from "./styled";


import Header2 from "@/Components/Header2/Header2";

import sobreImg from "@/assets/imgagens/sobre/sobre.png"
import textoImg from "@/assets/imgagens/sobre/texto.png"
import drink from '../../assets/imgagens/sobre/drink.png';


export default function Sobre() {
    return (
        <Styled>
            <Header2 />

            <main>
                <section id="sobreImg">
                    <img src={sobreImg.src} alt="img" />
                </section>

                <div id="cxTexto">
                    <p>
                        Descubra uma experiência diferenciada em um ambiente único.
                    </p>
                    <p>
                        Descubra uma experiência diferenciada em um ambiente único. A economia está em constante transformação, e uma das tendências mais significativas dos últimos anos é a ascensão da economia colaborativa. Essa nova perspectiva, além de redefinir a maneira como fazemos negócios.
                    </p>
                </div>

                <section id="textoImg">
                    <img src={textoImg.src} alt="img" />
                </section>

                <img id="drink" src={drink.src} alt="img" />
            </main>



        </Styled>
    )
}