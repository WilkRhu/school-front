import React, {useState, useEffect} from 'react';
import jwt from 'jsonwebtoken';

export default function Sidebar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('@user-token');
    function Descript (token) {
      var decoded = jwt.verify(token, 'shhhhh');
     setNome(decoded.nome);
     setEmail(decoded.email);
     setFile(decoded.file);
    };
    Descript(token);
  },[]);
  
    return(
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav">
            <li class="nav-item nav-profile">
              <a href="#" class="nav-link">
                <div class="profile-image">
                  <img
                    class="img-xs rounded-circle"
                    src={`https://escola-sonho-de-icaro.herokuapp.com/src/tmp/uploads/${file}`}
                    alt="profile image"
                  />
                  <div class="dot-indicator bg-success"></div>
                </div>
                <div class="text-wrapper">
    <             p class="profile-name">{nome}</p>
                  <p class="designation">{email}</p>
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
          </ul>
        </nav>
    );
}
