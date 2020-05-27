import React  from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated, logout } from "../../service/auth";

//Components
import Materias from "../Materias";
import Series from '../Series';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/dashboard", state: { from: props.location } }} />
      )
    }
  />
);

function Dashboard() {
  return (
    <div classNameName="container-scroller">
      <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
          <a className="navbar-brand brand-logo" href="">
            <img src="../../../assets/images/logo.svg" alt="logo" />{" "}
          </a>
          <a className="navbar-brand brand-logo-mini" href="">
            <img src="../../../assets/images/logo-mini.svg" alt="logo" />{" "}
          </a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center">
          <form className="ml-auto search-form d-none d-md-block" action="#">
            <div className="form-group">
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
              />
            </div>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator"
                id="messageDropdown"
                href="#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="mdi mdi-bell-outline"></i>
                <span className="count">7</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                aria-labelledby="messageDropdown"
              >
                <a className="dropdown-item py-3">
                  <p className="mb-0 font-weight-medium float-left">
                    You have 7 unread mails{" "}
                  </p>
                  <span className="badge badge-pill badge-primary float-right">
                    View all
                  </span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="../../../assets/images/faces/face10.jpg"
                      alt="image"
                      className="img-sm profile-pic"
                    />{" "}
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      Marian Garner{" "}
                    </p>
                    <p className="font-weight-light small-text">
                      {" "}
                      The meeting is cancelled{" "}
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="../../../assets/images/faces/face12.jpg"
                      alt="image"
                      className="img-sm profile-pic"
                    />{" "}
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      David Grey{" "}
                    </p>
                    <p className="font-weight-light small-text">
                      {" "}
                      The meeting is cancelled{" "}
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="../../../assets/images/faces/face1.jpg"
                      alt="image"
                      className="img-sm profile-pic"
                    />{" "}
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">
                      Travis Jenkins{" "}
                    </p>
                    <p className="font-weight-light small-text">
                      {" "}
                      The meeting is cancelled{" "}
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator"
                id="notificationDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <i className="mdi mdi-email-outline"></i>
                <span className="count bg-success">3</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                aria-labelledby="notificationDropdown"
              >
                <a className="dropdown-item py-3 border-bottom">
                  <p className="mb-0 font-weight-medium float-left">
                    You have 4 new notifications{" "}
                  </p>
                  <span className="badge badge-pill badge-primary float-right">
                    View all
                  </span>
                </a>
                <a className="dropdown-item preview-item py-3">
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-alert m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1">
                      Application Error
                    </h6>
                    <p className="font-weight-light small-text mb-0">
                      {" "}
                      Just now{" "}
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item py-3">
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-settings m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1">
                      Settings
                    </h6>
                    <p className="font-weight-light small-text mb-0">
                      {" "}
                      Private message{" "}
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item py-3">
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-airballoon m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1">
                      New user registration
                    </h6>
                    <p className="font-weight-light small-text mb-0">
                      {" "}
                      2 days ago{" "}
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown d-none d-xl-inline-block user-dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="UserDropdown"
                href="#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="img-xs rounded-circle"
                  src="../../../assets/images/faces/face8.jpg"
                  alt="Profile image"
                />{" "}
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="UserDropdown"
              >
                <div className="dropdown-header text-center">
                  <img
                    className="img-md rounded-circle"
                    src="../../../assets/images/faces/face8.jpg"
                    alt="Profile image"
                  />
                  <p className="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                  <p className="font-weight-light text-muted mb-0">
                    allenmoreno@gmail.com
                  </p>
                </div>
                <a className="dropdown-item">
                  My Profile{" "}
                  <span className="badge badge-pill badge-danger">1</span>
                  <i className="dropdown-item-icon ti-dashboard"></i>
                </a>
                <a className="dropdown-item">
                  Messages<i className="dropdown-item-icon ti-comment-alt"></i>
                </a>
                <a className="dropdown-item">
                  Activity
                  <i className="dropdown-item-icon ti-location-arrow"></i>
                </a>
                <a className="dropdown-item">
                  FAQ<i className="dropdown-item-icon ti-help-alt"></i>
                </a>
                <a className="dropdown-item" onClick={() => logout()} href="#">
                  Sign Out<i className="dropdown-item-icon ti-power-off"></i>
                </a>
              </div>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
      {/*-------------------------------------------------------------------*/}
      <div class="container-fluid page-body-wrapper">
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
              <a
                class="nav-link"
                data-toggle="collapse"
                href="#auth"
                aria-expanded="false"
                aria-controls="auth"
              >
                <i class="menu-icon typcn typcn-document-add"></i>
                <span class="menu-title">User Pages</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="auth">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="../../pages/samples/blank-page.html"
                    >
                      {" "}
                      Blank Page{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../../pages/samples/login.html">
                      {" "}
                      Login{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="../../pages/samples/register.html"
                    >
                      {" "}
                      Register{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="../../pages/samples/error-404.html"
                    >
                      {" "}
                      404{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="../../pages/samples/error-500.html"
                    >
                      {" "}
                      500{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <BrowserRouter>
                <Switch>
                  <PrivateRoute path="/dashboard/materias" component={Materias} />
                  <PrivateRoute path="/dashboard/series" component={Series} />
                </Switch>
              </BrowserRouter>
            </div>
          </div>
          <footer class="footer">
            <div class="container-fluid clearfix">
              <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">
                Copyright © 2020{" "}
                <a href="http://www.bootstrapdash.com/" target="_blank">
                  Bootstrapdash
                </a>
                . All rights reserved.
              </span>
              <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                Hand-crafted & made with{" "}
                <i class="mdi mdi-heart text-danger"></i>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
