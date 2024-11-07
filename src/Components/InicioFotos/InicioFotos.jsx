import { Styledpagina2 } from "./styled";
import foto1 from '../../assets/imgagens/fotos/1.png'
import foto2 from '../../assets/imgagens/fotos/2.png'


export default function InicioFotos() {
  return (
    <Styledpagina2>

      <img  src={foto1} alt="img" />
      <img  src={foto2} alt="img" />

    </Styledpagina2>
  )
}