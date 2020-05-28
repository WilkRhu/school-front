import React, { useState, useEffect } from "react";
import api from "../../service/api";
import { getToken } from "../../service/auth";
import { useForm } from "react-hook-form";

export default function Usuarios() {
  const [materia, setMateria] = useState([]);
  const [serie, setSerie] = useState([]);
  const [image, setImage] = useState({ preview: "", raw: "" });
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = async (values) => {
    // const response = await api.post(
    //   "/users",
    //   values.nome,
    //   values.login,
    //   values.email,
    //   values.senha,
    //   values.estado,
    //   values.cidade,
    //   values.rua,
    //   values.numero,
    //   values.bairro,
    //   values.telefone,
    //   values.referencia,
    //   values.tipo,
    //   values.materia_id,
    //   values.serie_id,
    //   values.matricula,
    //   values.responsavel_aluno_um,
    //   values.responsavel_aluno_dois,
    //   { file: image },
    //   {
    //     headers: { auth: getToken() },
    //   }
    // );
    console.log(
      values.nome,
      values.login,
      values.email,
      values.senha,
      values.estado,
      values.cidade,
      values.rua,
      values.numero,
      values.bairro,
      values.telefone,
      values.referencia,
      values.tipo,
      values.materia_id,
      values.serie_id,
      values.matricula,
      values.responsavel_aluno_um,
      values.responsavel_aluno_dois,
    );
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
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  return (
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Formulario Cadastro de Usuário</h4>
          <p className="card-description">
            {" "}
            Tipos de Usuários (Adm, Estudante e Professor){" "}
          </p>
          <form className="forms-sample" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-6" id="positionForm">
              <div className="col-6">
                <label htmlFor="upload-button">
                  {image.preview ? (
                    <img
                      src={image.preview}
                      alt="dummy"
                      id="previewImage"
                      name="file"
                      ref={register()}
                    />
                  ) : (
                    <>
                      <div className="text-center" id="output_image"></div>
                    </>
                  )}
                </label>
              </div>
              <div className="form-group">
                <div>
                  <input
                    type="file"
                    id="upload-button"
                    style={{ display: "none" }}
                    onChange={handleChange}
                    name="file"
                    ref={register()}
                  />
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
                  ref={register({
                    required: "Required",
                  })}
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
                  ref={register({
                    required: "Required",
                  })}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail3">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail3"
                  placeholder="Email"
                  ref={register({
                    required: "Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "invalid email address",
                    },
                  })}
                  name="email"
                />
                {errors.email && errors.email.message}
              </div>
              <div className="form-group">
                <label for="exampleInputPassword4">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword4"
                  placeholder="Password"
                  ref={register({
                    required: "Required",
                  })}
                  name="senha"
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
                  ref={register()}
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
                  ref={register()}
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
                  ref={register()}
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
                  ref={register()}
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
                  ref={register()}
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
                  ref={register()}
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
                  ref={register()}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Tipo de Usuário</label>
                <select
                  class="form-control form-control-lg"
                  id="tipo"
                  name="tipo"
                  ref={register({
                    required: "Required",
                  })}
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
                    ref={register()}
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
                    ref={register()}
                  />
                </div>
                <div className="from-group">
                  <label for="exampleInputCity1">2º Resposável do Aluno</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputCity1"
                    placeholder="Nome do pai"
                    ref={register()}
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
                    ref={register()}
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
