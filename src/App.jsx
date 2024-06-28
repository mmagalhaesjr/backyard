import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Jogo from './pages/Jogo/Jogo';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/jogo" exact element={<Jogo />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
