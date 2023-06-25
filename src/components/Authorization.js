import React from "react";
import "../css/mainpage.css";
function Authorization() {
  return (
    <section class="authorization">
      <form action="#" method="post" enctype="multipart/form-data">
        <div class="header_auth">
          <h2>Авторизация</h2>
        </div>

        <input
          type="email"
          name="usermail"
          placeholder="E-mail или имя пользователя"
        />
        <input type="password" name="userpass" placeholder="Пароль" />
        <div class="remember_auth">
          <input
            checked
            type="checkbox"
            name="remember"
            class="remember_user"
          />
          <p>Запомнить меня</p>
        </div>
        <button>Войти</button>
        <div class="remember_register">
          <a href="#">Забыли пароль</a>
          <div></div>
          <a href="#">Зарегистрироваться</a>
        </div>
      </form>
    </section>
  );
}

export default Authorization;
