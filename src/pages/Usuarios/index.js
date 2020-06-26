import React, { useState, useEffect } from "react";
import api from "../../service/api";
import { getToken } from "../../service/auth";
import { useForm } from "react-hook-form";
import {Danger, Success} from '../../components/Alert/alerts';

export default function Usuarios() {
  const [materia, setMateria] = useState([]);
  const [serie, setSerie] = useState([]);
  const [form, setForm] = useState();
  const [file, setFile] = useState('');
  const [cadUser, setCadUser] = useState(false);
  const [errorcaduser, setErroCadUser] = useState(false);
  const [filename, setFilename] = useState('Choose File');
  const [image, setImage] = useState({ preview: "", raw: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();   
    formData.append('file', file);
    formData.append('nome', form.nome);
    formData.append('login', form.login);
    formData.append('email', form.email);
    formData.append('senha', form.senha);
    formData.append('estado', form.estado);
    formData.append('cidade', form.cidade);
    formData.append('rua', form.rua);
    formData.append('numero', form.numero);
    formData.append('bairro', form.bairro);
    formData.append('telefone', form.telefone);
    formData.append('referencia', form.referencia);
    formData.append('tipo', form.tipo);
    formData.append('materia_id', form.materia_id);
    formData.append('serie_id', form.serie_id);
    formData.append('responsavel_aluno_um', form.responsavel_aluno_um);
    formData.append('responsavel_aluno_dois', form.responsavel_aluno_dois)


    const response = await api.post("/users", formData, {
      headers: { auth: getToken() },
    });
    
    if (response.status === 201) {
      setCadUser(true);
      setTimeout(() => {
        setCadUser(false);
      }, 4000);
    } else {
      setErroCadUser(true);
      setTimeout(() => {
        setErroCadUser(false);
      }, 4000);
    }
  };

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

  const handleChange = (e) => {
    setForm({
      ...form, [e.target.name] : e.target.value
    });
    
  };

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
       {cadUser === true ?
          Success("Usuário cadastrado com sucesso!")
        : ""}
        {errorcaduser === true ?
          Danger("Ocorreu um erro no cadastro do usuário!")
        : ""}
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
                  name="nome"
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
                  name="senha"
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
                  name="estado"
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
                  name="cidade"
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
                  name="rua"
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
                  name="numero"
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
                  name="bairro"
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
                  name="referencia"
                  onChange={e => handleChange(e)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Tipo de Usuário</label>
                <select
                  class="form-control form-control-lg"
                  id="tipo"
                  name="tipo"
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
                      <option value={item.id}>{item.nome}</option>
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
                    name="responsavel_aluno_um"
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
                    name="responsavel_aluno_dois"
                    onChange={e => handleChange(e)}
                  />
                </div>
              </div>
              <div className="col-12 professorForm" id="positionForm">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">
                    Matéria do Professor
                  </label>
                  <select
                    class="form-control form-control-lg"
                    id="tipo"
                    name="materia_id"
                    onChange={e => handleChange(e)}
                  >
                    <option></option>
                    {materia.map((item) => (
                      <option value={item.id}>{item.nome}</option>
                    ))}
                  </select>
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
