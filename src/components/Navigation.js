import React from "react";
import "../css/mainpage.css";
import logo from "../img/Logo.svg";
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <a href="mainpage.html" class="logo">
            <img src={logo} alt="" />
          </a>
        </li>
        <li>
          <a href="tournaments.html" class="tournament">
            Туринры
          </a>
        </li>
        <li>
          <a href="commands.html" class="commands">
            Команды
          </a>
        </li>
        <li>
          <a href="cabinet.html" class="cabinet">
            Личный кабинет
          </a>
        </li>
        <li>
          <a href="#" class="enter_acc">
            Войти
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
