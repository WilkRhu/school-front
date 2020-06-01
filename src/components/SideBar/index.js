import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

export default function Sidebar(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  useEffect(() => {
    function decodeToken() {
      jwt.verify(props.user, "shhhhh", (err, decoded) => {
        setNome(decoded.nome);
        setEmail(decoded.email);
        setFile(decoded.file);
      });
    }
    decodeToken();
  }, []);
  return (
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <a href="#" class="nav-link">
            <div class="profile-image">
              <img
                class="img-xs rounded-circle"
                src={`http://localhost:3001/tmp/uploads/${file}`}
                alt="profile image"
              />
              <div class="dot-indicator bg-success"></div>
            </div>
            <div class="text-wrapper">
              <p class="profile-name">{nome}</p>
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
