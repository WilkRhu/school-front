import React, {useState, useEffect} from 'react';
import api from '../../../service/api';
import { getToken } from "../../../service/auth";


export default function Professor() {
     const [professor, setProfessor] = useState([]);
    useEffect(async () => {
        const response = await api.get("/professor", {
            headers: { auth: getToken() },
        })
       if(response.status === 200){
        setProfessor(response.data.user);
       }
    }, []);
    console.log(professor);
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
                            {professor.map((item) => (
                            <tr>
                                <td>{item.nome}</td>
                                <td>{item.login}</td>
                                <td>{item.tipo}</td>
                                <td>
                                    <i className="fa fa-pencil"></i>
                                </td>
                                <td>
                                <i className="fa fa-trash-o "></i>
                                </td>
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