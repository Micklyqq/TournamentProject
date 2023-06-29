import { NavLink, Outlet, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../img/Logo.svg";
function Layout() {
  const [navActive, setNavActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setNavActive("mainLink");
    } else if (location.pathname === "/tournaments") {
      setNavActive("tournamentsLink");
    } else if (location.pathname === "/commands") {
      setNavActive("commandsLink");
    } else if (location.pathname === "/cabinet") {
      setNavActive("cabinetLink");
    } else {
      setNavActive("");
    }
  }, [location]);
  return (
    <>
      <nav>
        <ul>
          <li className={navActive == "mainLink" ? "active-link" : ""}>
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </li>
          <li className={navActive == "tournamentsLink" ? "active-link" : ""}>
            <NavLink to="/tournaments">Туринры</NavLink>
          </li>
          <li className={navActive == "commandsLink" ? "active-link" : ""}>
            <NavLink to="/commands">Команды</NavLink>
          </li>
          <li className={navActive == "cabinetLink" ? "active-link" : ""}>
            <NavLink to="/cabinet">Личный кабинет</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
