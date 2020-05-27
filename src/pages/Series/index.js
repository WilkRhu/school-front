import React, { useState, useEffect } from "react";
import api from "../../service/api";
import { getToken } from "../../service/auth";
import { dataAtualFormatada } from "../../service/formatData";

export default function Series() {
  const [materia, setMateria] = useState([]);
  const [serie, setSerie] = useState([]);
  useEffect(() => {
    async function conectMateria() {
      const response = await api.get("/materias");
      if (response.status === 200) {
        setMateria(response.data);
      }
    }
    conectMateria();
  }, []);

  useEffect(() => {
    async function conectSerie() {
      const response = await api.get("/series", {
        headers: { auth: getToken() },
      });
      setSerie(response.data);
    }
    conectSerie();
  }, []);

  return (
    <div className="col-12">
      <div className="col-12 stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Cadasto de Séries</h4>
            <p className="card-description"> </p>
            <form className="forms-sample">
              <div className="form-group row">
                <label
                  for="exampleInputEmail2"
                  className="col-sm-3 col-form-label"
                >
                  Nome da Série
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail2"
                    placeholder="Ex: 1º Ano"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="exampleInputEmail2"
                  className="col-sm-3 col-form-label"
                >
                  Escolha as Matérias Referente a Série
                </label>
                <div className="col-sm-9">
                  {materia
                    ? materia.map((item) => (
                        <div className="form-check form-check-flat">
                          <label className="">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              value=""
                            />
                            {item.nome}
                          </label>
                        </div>
                      ))
                    : "Cadastre a Matéria antes de cadastrar a série"}
                </div>
              </div>
              <button type="submit" className="btn btn-success mr-2">
                Submit
              </button>
              <button className="btn btn-light">Cancel</button>
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
                  <th>Nome da Série</th>
                  <th>Data de Criação</th>
                  <th>Delete Serie</th>
                </tr>
              </thead>
              <tbody>
                {serie.map((item) => (
                  <tr>
                    <td>{item.nome}</td>
                    <td>{dataAtualFormatada(item.created_at)}</td>
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
  );
}
