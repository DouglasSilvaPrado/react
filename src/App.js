import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//layout
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// pages
import Home from "./components/pages/Home"
import Destino from './components/pages/Destino'
import Promocao from './components/pages/Promocao'
import Contato from './components/pages/Contato'
import Viagens from './components/pages/Viagens'
import Pessoas from './components/pages/Pessoas'
import EditarViagem from './components/pages/EditarViagem'
import EditarPessoa from './components/pages/EditarPessoa'
import NovaViagem from './components/pages/NovaViagem'
import NovaPessoa from './components/pages/NovaPessoa'
 
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
            <Route path="/Viagens" element={<Viagens />} />
            <Route path="/EditarViagem" element={<EditarViagem />} />
            <Route path="/NovaViagem" element={<NovaViagem />} />
            <Route path="/Pessoas" element={<Pessoas />} />
            <Route path="/EditarPessoa" element={<EditarPessoa />} />
            <Route path="/NovaPessoa" element={<NovaPessoa />} />
          </Routes>
        <Footer /> 
      </Router>    
    </>
  );
}

export default App;
