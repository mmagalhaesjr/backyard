import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicial from './Pages/Inicial/Inicial';
import Jogo from './Pages/Jogo/Jogo';





function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Inicial />} />
          <Route path="/jogo/:musicaId" element={<Jogo />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
