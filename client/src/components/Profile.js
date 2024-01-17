import React, { useEffect, useState } from "react";
import "../css/tournaments.css";
import { UserStore } from "../store/UserStore";
import { jwtDecode } from "jwt-decode";
import { getData } from "../api/userApi";
import defaultLogo from "../img/defaultLogo.png";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PROFILE_ROUTE } from "../utils/consts";

function Profile({ setAuth, isAuth, setUser }) {
  const user = UserStore((state) => state._user);
  const [loading, setLoading] = useState(true);

  const exit = () => {
    setAuth(false);
    setUser({});
    localStorage.setItem("token", "");
  };

  return (
    <section className="profile">
      <div className="profile_header">
        <h2>Профиль</h2>
      </div>
      <div className="profile_info">
        <div className="profile_picture">
          <img
            src={
              user.logo
                ? process.env.REACT_APP_API_URL + user.logo
                : defaultLogo
            }
            alt=""
          />
        </div>
        <p className="nickname">
          {user.userName ? user.userName : "defaulName"}
        </p>
        <p className="username_info">Команда:OG</p>
      </div>

      <div className="tournaments_search">
        <Link to={PROFILE_ROUTE}>
          <div className="profile_buttons">Настройки</div>
        </Link>
        <div className="profile_buttons">Личные сообщения</div>

        <div className="profile_buttons">Смена ника</div>
      </div>
      <button onClick={exit} className="profile_buttons">
        Выйти
      </button>
    </section>
  );
}

export default Profile;
