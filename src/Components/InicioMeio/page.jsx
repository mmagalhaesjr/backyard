import { Styledpagina2 } from "./styled";



import tacas from '../../assets/imgagens/inicio/tacas.png'
import texto2 from'../../assets/imgagens/inicio/texto2.png'

export default function InicioMeio() {
  return (
    <Styledpagina2>

      <img className="texto" src={texto2} alt="img" />
      <img className="taca" src={tacas} alt="img" />

    </Styledpagina2>
  )
}