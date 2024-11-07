import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Inicial from './pages/Inicial/Inicial.jsx'
import Jogo from './pages/Jogo/Jogo.jsx';





export default function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Inicial />} />
          
          <Route path="/jogo/:musicaId" exact element={<Jogo />} />
        </Routes>

      </Router>
    </>
  )
}


