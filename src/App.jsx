import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Jogo from './pages/Jogo/Jogo';
import Jogo2 from './pages/Jogo2/Jogo2';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/jogo" exact element={<Jogo />} />
          <Route path="/jogo2/:musicaId" exact element={<Jogo2 />} />

        </Routes>

      </Router>
    </>
  )
}

export default App
