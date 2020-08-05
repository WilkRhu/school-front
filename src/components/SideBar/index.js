import React, { useEffect, useState } from "react";
import logUser from "../../service/logUser";
import api from "../../service/api";
import { getToken } from "../../service/auth";

export default function Sidebar(props) {
  const token = getToken();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [contentType, setContentType] = useState("");
  const [type, setType] = useState("");
 
  useEffect(() => {
    const { id, name, email, type } = logUser(token);
    setType(type)
    setEmail(email);
    setName(name);
    async function fileUser(){
      const response = await api.get(`/users/${id}`);
      setFile(Buffer.from(response.data.file.data.data.data).toString('base64'));
      setContentType(response.data.file.type)
    }
    fileUser();
  
  }, []);

  return (
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <a href="#" class="nav-link">
            <div class="profile-image">
              <img
                class="img-xs rounded-circle"
                src={`data:${contentType};base64,${file}`}
                alt="profile image"
              />
              <div class="dot-indicator bg-success"></div>
            </div>
            <div class="text-wrapper">
              <p class="profile-name">{name}</p>
              <p class="designation">{email}</p>
              <p class="designation">{type}</p>
            </div>
          </a>
        </li>
        <li class="nav-item nav-category">Menu</li>
        <li class="nav-item">
          <a class="nav-link" href="/dashboard">
            <i class="menu-icon typcn typcn-document-text"></i>
            <span class="menu-title">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/dashboard/materias">
            <i class="menu-icon typcn typcn-document-text"></i>
            <span class="menu-title">Cadastro Matérias</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/dashboard/series">
            <i class="menu-icon typcn typcn-document-text"></i>
            <span class="menu-title">Cadastro Séries</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/dashboard/usuarios">
            <i class="menu-icon typcn typcn-document-text"></i>
            <span class="menu-title">Cadastro de Usuários</span>
          </a>
        </li>
        <li class="nav-item">
              <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                <i class="menu-icon typcn typcn-document-add"></i>
                <span class="menu-title">Usuários Cadastrados</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="auth">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    <a class="nav-link" href="/dashboard/admin"> Administradores </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/dashboard/professor"> Professores </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="pages/samples/register.html"> Alunos </a>
                  </li>
                </ul>
              </div>
            </li>
      </ul>
    </nav>
  );
}
