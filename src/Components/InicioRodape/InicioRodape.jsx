import { StyledFinal, Styledpagina2 } from "./styled";

import { MdOutlineArrowRightAlt } from "react-icons/md";


import ponto from '../../assets/imgagens/inicio/ponto.png';
import texto1 from '../../assets/imgagens/rodape/texto1.png'
import texto2 from '../../assets/imgagens/rodape/texto2.png'
import texto3 from '../../assets/imgagens/rodape/texto3.png'
import botao from '../../assets/imgagens/rodape/botao.png'




export default function InicioRodape() {
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
            <li>(32) 98555-6666</li>
            <li>ig: @backyardjf</li>
            <li>e-mail: backyardjf <br/> @gmail.com</li>
            <h2>CONTATO</h2>
          </ul>
          <ul>
            <li>Av. Rio Branco, 3896</li>
            <li>Alto dos Passos</li>
            <li>Juiz de Fora/MG</li>
            <li>36021-630</li>
            <h2>ENDEREÇO</h2>
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