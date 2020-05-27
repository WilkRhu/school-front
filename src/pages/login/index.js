import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import api from "../../service/api";
import { login } from "../../service/auth";

function Login(props) {
  const { handleSubmit, register, errors } = useForm();
  const [error, setError] = useState();
  const onSubmit = async (values) => {
    const { email, senha } = values;
    if (!email || !senha) {
      setError("Preencha e-mail e senha para continuar!");
      alert(error);
    } else {
      try {
        const response = await api.post("/logOn", { email, senha });
        login(response.data.token);
        props.history.push("/dashboard");
      } catch (err) {
        setError(
          "Houve um problema com o login, verifique suas credenciais. T.T"
        );
        alert(error);
      }
    }
  };
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
          <div className="row w-100">
            <div className="col-lg-4 mx-auto">
              <div className="auto-form-wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label className="label">Email</label>
                    <div className="input-group">
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        ref={register({
                          required: "Required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address",
                          },
                        })}
                      />
                      {errors.email && errors.email.message}
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label">Senha</label>
                    <div className="input-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="*********"
                        name="senha"
                        ref={register({
                          validate: (value) => value !== "admin" || "Nice try!",
                        })}
                      />
                      {errors.senha && errors.senha.message}
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary submit-btn btn-block">
                      Login
                    </button>
                  </div>

                  <div className="form-group d-flex justify-content-between">
                    <div className="form-check form-check-flat mt-0">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked
                        />{" "}
                        Keep me signed in{" "}
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-small forgot-password text-black"
                    >
                      Forgot Password
                    </a>
                  </div>
                  {/* <div className="form-group">
                    <button className="btn btn-block g-login">
                      <img className="mr-3" src="../../../assets/images/file-icons/icon-google.svg" alt="" />Log in with Google</button>
                  </div>
                  {/* <div className="text-block text-center my-3">
                    <span className="text-small font-weight-semibold">Not a member ?</span>
                    <a href="register.html" className="text-black text-small">Create new account</a>
                  </div> */}
                </form>
              </div>
              {/* <ul className="auth-footer">
                <li>
                  <a href="#">Conditions</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul> */}
              <p className="footer-text text-center">
                copyright © 2018 Bootstrapdash. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
