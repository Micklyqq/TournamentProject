import { Outlet } from "react-router-dom";
import React from "react";
import logo from "../img/Logo.svg";
import CustomNavLink from "./CustomNavLink";
import {COMMAND_ROUTE, MAIN_ROUTE, TOURNAMENT_ROUTE} from "../utils/consts";
function Layout() {
  return (
    <>
      <nav>
        <ul>
          <CustomNavLink to={MAIN_ROUTE}>
            <img src={logo} alt="" />
          </CustomNavLink>

          <CustomNavLink to={TOURNAMENT_ROUTE}>Туринры</CustomNavLink>

          <CustomNavLink to={COMMAND_ROUTE}>Команды</CustomNavLink>

          <CustomNavLink to="/cabinet">Личный кабинет</CustomNavLink>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
