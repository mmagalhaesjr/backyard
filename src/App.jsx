import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Jogo from './Pages/Jogo/Jogo.jsx';

import Inicial from './Pages/Inicial/Inicial.jsx'
import Sobrenos from './Pages/Sobrenos/Sobrenos';
import Menu from './Pages/Menu/Menu';
import Eventos from './Pages/Eventos/Eventos';





export default function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Inicial />} />
          <Route path="/sobrenos" exact element={<Sobrenos />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/eventos" exact element={<Eventos />} />

        
          <Route path="/jogo/:musicaId" exact element={<Jogo />} />
        </Routes>

      </Router>
    </>
  )
}


