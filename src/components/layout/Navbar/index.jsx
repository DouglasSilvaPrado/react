import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark btn-primary">
                <div className="container-fluid">
                    <Link to="/" className='navbar-brand'>Agencia</Link>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className='nav-link active'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Destino" className='nav-link'>Destino</Link>
                        </li>
                        <li className="nav-item">      
                            <Link to="/Promocao" className="nav-link">Promoções</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contato" className="nav-link">Contato</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Viagens</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pessoas</a>
                        </li> 
                    </ul>
                    
                    </div>
                </div>
            </nav>
        </>
      );
}

export default Navbar;