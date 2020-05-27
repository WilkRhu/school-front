import React, { useState, useEffect } from "react";
import api from "../../service/api";
import { dataAtualFormatada } from '../../service/formatData';

export default function Materias() {
  const [materia, setMateria] = useState([]);
  useEffect(() => {
    async function conectMateria() {
      const response = await api.get("/materias");
      if (response.status === 200) {
        setMateria(response.data);
      }
    }
    conectMateria();
  }, []);

  return (
    <div className="col-12">
      <div class="col-12 stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Cadasto de Matérias</h4>
            <p class="card-description"> </p>
            <form class="forms-sample">
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
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Matérias Cadastradas</h4>
            <table class="table">
              <thead>
                <tr>
                  <th>Nome da Matéria</th>
                  <th>Data de Criação</th>
                  <th>Data de Modificação</th>
                </tr>
              </thead>
              <tbody>
                {materia.map((item) => (
                  <tr>
                    <td key={item.id}>{item.nome}</td>
                    <td>{dataAtualFormatada(item.created_at)}</td>
                    <td>{dataAtualFormatada(item.updated_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
