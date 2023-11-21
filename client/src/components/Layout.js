import { Outlet } from "react-router-dom";
import React from "react";
import logo from "../img/Logo.svg";
import CustomNavLink from "./CustomNavLink";
function Layout() {
  return (
    <>
      <nav>
        <ul>
          <CustomNavLink to="/">
            <img src={logo} alt="" />
          </CustomNavLink>

          <CustomNavLink to="/tournaments">Туринры</CustomNavLink>

          <CustomNavLink to="/commands">Команды</CustomNavLink>

          <CustomNavLink to="/cabinet">Личный кабинет</CustomNavLink>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
