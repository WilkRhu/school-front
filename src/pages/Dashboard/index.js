import React  from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../service/auth";

//Components
import Materias from "../Materias";
import Series from '../Series';
import Usuarios from '../Usuarios';
import MenuSuperior from '../../components/MenuSuperior';
import Sidebar from '../../components/SideBar';

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
      <MenuSuperior />
      {/*-------------------------------------------------------------------*/}
      <div class="container-fluid page-body-wrapper">
        <Sidebar />
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <BrowserRouter>
                <Switch>
                  <PrivateRoute path="/dashboard/materias" component={Materias} />
                  <PrivateRoute path="/dashboard/series" component={Series} />
                  <PrivateRoute path="/dashboard/usuarios" component={Usuarios} />
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
