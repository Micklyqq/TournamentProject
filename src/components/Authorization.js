import React from "react";
import "../css/mainpage.css";
function Authorization() {
  return (
    <section className="authorization">
      <form action="#" method="post" encType="multipart/form-data">
        <div className="header_auth">
          <h2>Авторизация</h2>
        </div>

        <input
          type="email"
          name="usermail"
          placeholder="E-mail или имя пользователя"
        />
        <input type="password" name="userpass" placeholder="Пароль" />
        <div className="remember_auth">
          <input
            checked
            type="checkbox"
            name="remember"
            className="remember_user"
          />
          <p>Запомнить меня</p>
        </div>
        <button>Войти</button>
        <div className="remember_register">
          <a href="#">Забыли пароль</a>
          <div></div>
          <a href="#">Зарегистрироваться</a>
        </div>
      </form>
    </section>
  );
}

export default Authorization;
