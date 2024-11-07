import { useEffect, useState } from "react";
import { Styledpagina1 } from "./styled";


// import backyard from '../../assets/imgagens/inicio/backyard.png';
import texto from '../../assets/imgagens/inicio/texto.png';
import Header from "../Header/Header";

export default function InicioCapa() { 

  const [ setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <Styledpagina1 className={scrollY > 50 ? 'rolagem' : ''}>
    <Styledpagina1 >
   
<Header />
      {/* <img id='logo' src={backyard.src} alt="logo" /> */}
      <img id='texto' src={texto} alt="" />

    </Styledpagina1>
  );
}
