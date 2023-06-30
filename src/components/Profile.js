import React from "react";
import "../css/tournaments.css";
import ProfileImage from "../img/profile_picture.png";

function Profile() {
  return (
    <section className="profile">
      <div className="profile_header">
        <h2>Профиль</h2>
      </div>
      <div className="profile_info">
        <div className="profile_picture">
          <img src={ProfileImage} alt="" />
          <a href="#">Изменить</a>
        </div>
        <p className="nickname">Gamer334</p>
        <p className="username_info">Команда:OG</p>
        <p className="username_info">Rating: 3400</p>
      </div>
      <form
        action="#"
        method="post"
        encType="multipart/form-data"
        className="tournaments_search"
      >
        <button type="submit" className="profile_buttons">
          Настройки
        </button>
        <button type="submit" className="profile_buttons">
          Личные сообщения
        </button>
        <button type="submit" className="profile_buttons">
          Смена ника
        </button>
        <button type="submit" className="profile_buttons">
          Выйти
        </button>
      </form>
    </section>
  );
}

export default Profile;
