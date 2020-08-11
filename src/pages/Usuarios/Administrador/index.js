import React, {useState, useEffect} from 'react';
import api from '../../../service/api';
import { getToken } from "../../../service/auth";
import tokenDescript from '../../../service/tokenDescript';


export default function Administrador({Header, data}) {
     const [admin, setAdmin] = useState([]);
    useEffect(async () => {
        const {type} = tokenDescript(getToken());
        if(type === "admin"){
            const response = await api.get("/users", {
                headers: { auth: getToken() },
            })
            if(response.status === 200){
                setAdmin(response.data.user);
            }
        }
    }, []);
    
    
    return(
        <div className="col-12">
            <div className="card-container">
                <div className="card-body">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Matérias Cadastradas</h4>
                        <table class="table">
                        <thead>
                            <tr>
                            <th>Nome</th>
                            <th>Login</th>
                            <th>Tipo</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admin.map((item) => (
                            <tr>
                               {item.type === "admin" ?
                                    <>
                                        <td>{item.name}</td>
                                        <td>{item.login}</td>
                                        <td>{item.tipo}</td>
                                        <td>
                                            <i className="fa fa-pencil"></i>
                                        </td>
                                        <td>
                                        <i className="fa fa-trash-o "></i>
                                        </td>
                                    </>
                                : "Não Há Professores Administradores Cadastrados"}
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>        
            </div>
        </div>
    )
}