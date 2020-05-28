import React from 'react';

export default function Sidebar() {
    return(
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav">
            <li class="nav-item nav-profile">
              <a href="#" class="nav-link">
                <div class="profile-image">
                  <img
                    class="img-xs rounded-circle"
                    src="../../../assets/images/faces/face8.jpg"
                    alt="profile image"
                  />
                  <div class="dot-indicator bg-success"></div>
                </div>
                <div class="text-wrapper">
                  <p class="profile-name">Allen Moreno</p>
                  <p class="designation">Premium user</p>
                </div>
              </a>
            </li>
            <li class="nav-item nav-category">Main Menu</li>
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
