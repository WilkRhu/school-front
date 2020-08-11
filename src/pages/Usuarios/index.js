import React, { useState, useEffect } from "react";
import api from "../../service/api";
import { getToken } from "../../service/auth";
import { useForm } from "react-hook-form";
import Select from "react-select";

export default function Usuarios() {
  const [materia, setMateria] = useState([]);
  const [serie, setSerie] = useState([]);
  const [form, setForm] = useState();
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [optionSeries, setOptionSeries] = useState([]);
  
  
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();   
    formData.append('file', file);
    formData.append('name', form.name);
    formData.append('login', form.login);
    formData.append('email', form.email);
    formData.append('password', form.password);
    formData.append('state', form.state);
    formData.append('city', form.city);
    formData.append('street', form.street);
    formData.append('number', form.number);
    formData.append('neighborhood', form.neighborhood);
    formData.append('telefone', form.telefone);
    formData.append('reference', form.reference);
    formData.append('type', form.type);
    formData.append('subjects', form.subjects);
    formData.append('series', optionSeries);
    formData.append('student_responsible_one', form.student_responsible_one);
    formData.append('student_responsible_two', form.student_responsible_two)


    const response = await api.post("/users", formData, {
      headers: { auth: getToken() },
    });
    console.log(response);
  };
  console.log(form);
  
  
  
  useEffect(() => {
    async function conectMateria() {
      const response = await api.get("/subject");
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
      setOptionSeries(response.data);
    }
    conectSerie();
  }, []);
 
  const opt = optionSeries.map(item => (
    {
      "value": item.name,
      "label": item.name
    }
  ))

  const handleChange = (e) => {
    setForm({
      ...form, [e.target.name] : e.target.value
    });
    
  };

  const handleChangeSelect = (e) => {
    setOptionSeries(e);
  }

  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  }

  return (
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Formulario Cadastro de Usuário</h4>
          <p className="card-description">
            {" "}
            Tipos de Usuários (Adm, Estudante e Professor){" "}
          </p>
          <form
            className="forms-sample"
           onSubmit={onSubmit}
            encType="multipart/form-data"
            id="form"
          >
            <div className="col-6">
                <label htmlFor="upload-button">
                  {image.preview ? (
                    <img src={image.preview} alt="dummy" id="previewImage" />
                  ) : (
                    <>
                      <div className="text-center" id="output_image"></div>
                    </>
                  )}
                </label>
              </div>
            <div className="col-6" id="positionForm">
              <div className="form-group">
                <div>
                  <input type="file" name="file" onChange={e => handleChangeFile(e)}  />
                  <br />
                </div>
              </div>
              <div className="form-group">
                <label for="exampleInputName1">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                  placeholder="Name"
                  name="name"
                  onChange={e => handleChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <label for="exampleInputName1">Login</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                  placeholder="Login"
                  name="login"
                  onChange={e => handleChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail3">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail3"
                  placeholder="Email"
                  name="email"
                  onChange={e => handleChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword4">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword4"
                  placeholder="Password"
                  name="password"
                  onChange={e => handleChange(e)}
                  required
                />
              </div>
            </div>
            <div className="col-6" id="positionForm">
              <div className="form-group">
                <label for="exampleInputCity1">Estado</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputCity1"
                  placeholder="Estado"
                  name="state"
                  onChange={e => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputCity1">Cidade</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputCity1"
                  placeholder="Cidade"
                  name="city"
                  onChange={e => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputCity1">Rua</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputCity1"
                  placeholder="Rua"
                  name="street"
                  onChange={e => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputCity1">Numero</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputCity1"
                  placeholder="Ex: 00 "
                  name="number"
                  onChange={e => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputCity1">Bairro</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputCity1"
                  placeholder="Bairro"
                  name="neighborhood"
                  onChange={e => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputCity1">Telefone</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputCity1"
                  placeholder="Telefone"
                  name="telefone"
                  onChange={e => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputCity1">Ponto de Referência</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputCity1"
                  placeholder="Referência"
                  name="reference"
                  onChange={e => handleChange(e)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Tipo de Usuário</label>
                <select
                  class="form-control form-control-lg"
                  id="tipo"
                  name="type"
                  onChange={e => handleChange(e)}
                  required
                >
                  <option></option>
                  <option value="admin">Admin</option>
                  <option value="professor">Professor</option>
                  <option value="estudante">Estudante</option>
                </select>
              </div>
              <div className="col-12 estudanteForm" id="positionForm">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">
                    Escolha a Serie do Estudante
                  </label>
                  <select
                    class="form-control form-control-lg"
                    id="exampleFormControlSelect1"
                    name="serie_id"
                    onChange={e => handleChange(e)}
                  >
                    <option></option>
                    {serie.map((item) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className="from-group">
                  <label for="exampleInputCity1">Matrícula</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputCity1"
                    placeholder="Matrícula"
                    name="matricula"
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="from-group">
                  <label for="exampleInputCity1">1º Resposável do Aluno</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputCity1"
                    placeholder="Nome da Mãe"
                    name="student_responsible_one"
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="from-group">
                  <label for="exampleInputCity1">2º Resposável do Aluno</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputCity1"
                    placeholder="Nome do pai"
                    name="student_responsible_two"
                    onChange={e => handleChange(e)}
                  />
                </div>
              </div>
              <div className="col-12 professorForm bg-light" id="positionForm">
                <div class="form-group">
                  <div for="exampleFormControlSelect1">
                    Matéria(as) do Professor
                  </div>
                        <div className="form-check form-check-flat danger">
                            <select class="selectpicker" multiple name="subjects" onChange={e => handleChange(e)}>
                            {materia
                                ? materia.map((item) => (
                              <option value={item.name}>{item.name}</option>
                              ))
                              : "Cadastre a Matéria antes de cadastrar a série"}
                            </select>
                        </div>
                </div>
                <div for="exampleFormControlSelect1">
                    Serie(s) do Professor
                </div>
                  <div className="form-check form-check-flat danger">
                      <Select 
                        options={
                          opt
                        }
                        value={
                          opt.value
                        }
                        onChange={e => handleChangeSelect(e)}
                        isMulti
                        name={"series"}
                      />
                
                  </div>      
              </div>
            </div>
            <div className="col-12" id="positionForm">
              <button type="submit" className="btn btn-success mr-2">
                Submit
              </button>
              <button className="btn btn-light">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
