import Input from "../../form/Input";
import { Link } from 'react-router-dom';

function EditarViagem() {
    return ( 
        <>
            <div className="container vh-100" align="center">
                <h1>Editar Viagem</h1>
                <form name="frmContato" action="update">
                    <table>
                               
                        <tr>
                            <td><Input type="text" name="origem" className="Caixa1" placeholder="Origem"/></td>
                        </tr>
                        <tr>
                            <td><Input type="text" name="destiono" className="Caixa1" placeholder="Destiono"/></td>
                        </tr>
                        <tr>
                            <td><Input type="date" name="data_ida" className="Caixa1" /></td>
                        </tr>
                        <tr>
                            <td><Input type="date" name="data_volta" className="Caixa1" /></td>
                        </tr>  
                        
            
                    </table>
                    <Link to="/Viagens">
                        <Input type="button" value="Salvar" className="btn btn-primary" click="validar()"/>
                    </Link>
                </form>
            </div>
        </>
     );
}

export default EditarViagem;