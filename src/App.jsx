import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Inicial from './Pages/Inicial/Inicial.jsx'
import Jogo from './Pages/Jogo/Jogo.jsx';





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


