import Input from "../../form/Input";
import { Link } from 'react-router-dom';


function NovaPessoa() {
    return ( 
        <>
            <div className="container vh-100" align="center">
                <h1>Nova Pessoa</h1>
                <form name="frmContato" action="update">
                    <table>
                               
                        <tr>
                            <td><Input type="text" name="nome" className="Caixa1" placeholder="Nome"/></td>
                        </tr>
                        <tr>
                            <td><Input type="text" name="cpf" className="Caixa1" placeholder="Cpf"/></td>
                        </tr>
                        <tr>
                            <td><Input type="text" name="telefone" className="Caixa1" placeholder="Telefone" /></td>
                        </tr>      
                    </table>
                    <Link to="/Pessoas">
                        <Input type="button" value="Salvar" className="btn btn-primary"/>
                    </Link>
                </form>
            </div>
        </>
     );
}

export default NovaPessoa;