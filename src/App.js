import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//layout
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// pages
import Home from "./components/pages/Home"
import Destino from './components/pages/Destino'
import Promocao from './components/pages/Promocao'
import Contato from './components/pages/Contato'

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destino" element={<Destino />} />
          <Route path="/Promocao" element={<Promocao />} />
          <Route path="/Contato" element={<Contato />} />
          </Routes>
        <Footer /> 
      </Router>    
    </>
  );
}

export default App;
