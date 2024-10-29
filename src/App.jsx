import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Inicial from './pages/Inicial/page.jsx';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Inicial />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
