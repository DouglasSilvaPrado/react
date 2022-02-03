import { Link } from 'react-router-dom';


function Pessoas() {
    return ( 
        <>
            <div class="container vh-100" align="center">
                <h1>Pessoas</h1>
                <Link to="/NovaPessoa" className="btn btn-primary">Nova Pessoa</Link>
                
                <table id="tabela" class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td>1</td>
                            <td>Douglas</td>
                            <td>123.123.123-12</td>
                            <td>(21)9900-8890</td>
                            <td>
                                <Link to="/EditarPessoa" className="btn btn-primary mb-1">Editar</Link>
                                <Link to="/" className="btn btn-danger mb-1">Excluir</Link>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div> 
        </>
     );
}

export default Pessoas;