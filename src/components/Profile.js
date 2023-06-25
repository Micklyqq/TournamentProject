import React from "react";
import "../css/tournaments.css";

function Profile() {
  return (
    <section class="profile">
      <div class="profile_header">
        <h2>Профиль</h2>
      </div>
      <div class="profile_info">
        <div class="profile_picture">
          <img src="img/profile_picture.png" alt="" />
          <a href="#">Изменить</a>
        </div>
        <p class="nickname">Gamer334</p>
        <p class="username_info">Команда:OG</p>
        <p class="username_info">Rating: 3400</p>
      </div>
      <form
        action="#"
        method="post"
        enctype="multipart/form-data"
        class="tournaments_search"
      >
        <button type="submit" class="profile_buttons">
          Настройки
        </button>
        <button type="submit" class="profile_buttons">
          Личные сообщения
        </button>
        <button type="submit" class="profile_buttons">
          Смена ника
        </button>
        <button type="submit" class="profile_buttons">
          Выйти
        </button>
      </form>
    </section>
  );
}

export default Profile;
