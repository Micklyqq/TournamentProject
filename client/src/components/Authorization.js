import React, { useState } from "react";
import "../css/mainpage.css";
import { UserStore } from "../store/UserStore";
import Profile from "./Profile";
import { login, registration } from "../api/userApi";

function Authorization() {
  const isAuth = UserStore((state) => state._isAuth);
  const setAuth = UserStore((state) => state.setIsAuth);
  const user = UserStore((state) => state._user);
  const setUser = UserStore((state) => state.setUser);
  const [validationError, setValidationError] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [reg, setReg] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const buttonClick = async () => {
    try {
      let data;
      if (!reg) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      setUser(data);
      setAuth(true);
    } catch (e) {
      setValidationError(null);
      setAuthError(null);
      if (e.response.data.errorInfo) {
        setValidationError(e.response.data.errorInfo);
      } else {
        setAuthError(e.response.data.message);
      }
    }
  };

  return !isAuth ? (
    <section className="authorization">
      <form>
        <div className="header_auth">
          <h2>{!reg ? "Авторизация" : "Регистрация"}</h2>
        </div>

        <input
          type="email"
          name="usermail"
          placeholder="E-mail или имя пользователя"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {validationError && validationError.path[0] === "email" && (
          <div className="AuthValidationError">{validationError.message}</div>
        )}
        <input
          type="password"
          name="userpass"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {validationError && validationError.path[0] === "password" && (
          <div className="AuthValidationError">{validationError.message}</div>
        )}
      </form>
      {!reg ? (
        <>
          <button onClick={buttonClick}>Войти</button>
          <div className="remember_register">
            <a href="#" onClick={() => setReg(true)}>
              Зарегистрироваться
            </a>
          </div>
        </>
      ) : (
        <>
          <button onClick={buttonClick}>Зарегистрироваться</button>
          <div className="remember_register">
            <a href="#" onClick={() => setReg(false)}>
              Авторизоваться
            </a>
          </div>
        </>
      )}
      <div className="authError">{authError}</div>
    </section>
  ) : (
    <Profile isAuth={isAuth} setAuth={setAuth} setUser={setUser} />
  );
}

export default Authorization;
