import React, { useState, useEffect } from "react";
import api from "../../service/api";
import { dataAtualFormatada } from "../../service/formatData";
import { useForm } from "react-hook-form";
import './style.css'

export default function Materias() {
  const [materia, setMateria] = useState([]);
  const { handleSubmit, register, errors } = useForm();
  const [loading, setLoaging] = useState(false);
  useEffect(() => {
    async function conectMateria() {
      const response = await api.get("/materias");
      setLoaging(true);
      setTimeout(() => {
        setLoaging(false);
      }, 4000);
      setMateria(response.data);
    }
    conectMateria();
  }, []);

  const onSubmit = async (values) => {
    const response = await api.post("/materias", values);
    if (response.status === 201) {
      setLoaging(true);
      setTimeout(() => {
        setLoaging(false);
       
      }, 4000);
    }
  };

  return (
    <div className="col-12">
      <div class="col-12 stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Cadasto de Matérias</h4>
            <p class="card-description"> </p>
            <form class="forms-sample" onSubmit={handleSubmit(onSubmit)}>
              <div class="form-group row">
                <label for="exampleInputEmail2" class="col-sm-3 col-form-label">
                  Nome
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail2"
                    placeholder="Ex: Matemática"
                    name="nome"
                    ref={register()}
                    required
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-success mr-2">
                Submit
              </button>
              <button class="btn btn-light">Cancel</button>
            </form>
          </div>
        </div>
      </div>
      <br />
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Matérias Cadastradas</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>Nome da Matéria</th>
                  <th>Data de Criação</th>
                  <th>Data de Modificação</th>
                  <th>Editar</th>
                  <th>Excluir</th>
                </tr>
              </thead>
              <tbody className="tbody">
                {!loading ? (
                  materia.map((item) => (
                    <tr>
                      <td key={item.id}>{item.nome}</td>
                      <td>{dataAtualFormatada(item.created_at)}</td>
                      <td>{dataAtualFormatada(item.updated_at)}</td>
                      <td>
                        <i className="fa fa-edit"></i>
                      </td>
                      <td>
                        <i className="fa fa-trash-o"></i>
                      </td>
                    </tr>
                  ))
                ) : (
                  <img src="../../assets/images/loader.gif" className="col-12" id="img" />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
