import { Link } from 'react-router-dom';


function Viagens() {
    return (  
        <>
           <div className="container vh-100" align="center">
                <h1>Viagens</h1>
                <Link to="/NovaViagem" className="btn btn-primary">Nova Viagem</Link>
                
                <table id="tabela" className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Origem</th>
                            <th scope="col">Destino</th>
                            <th scope="col">Data de Ida</th>
                            <th scope="col">Data de Volta</th>
                            <th scope="col">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td>1</td>
                            <td>Rio de Janeiro</td>
                            <td>São Paulo</td>
                            <td>20/02/2020</td>
                            <td>21/07/2020</td>
                            <td>
                                <Link to="/EditarViagem" className="btn btn-primary mb-1">Editar</Link>
                                <Link to="/" className="btn btn-danger mb-1">Excluir</Link>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Belo Horizonte</td>
                            <td>Bahia</td>
                            <td>01/01/2021</td>
                            <td>09/08/2021</td>
                            <td>
                                <Link to="/EditarViagem" className="btn btn-primary mb-1">Editar</Link>
                                <Link to="/" className="btn btn-danger mb-1">Excluir</Link>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div> 
        </>
    );
}

export default Viagens;