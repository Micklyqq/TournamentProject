import React, {useState} from "react";
import "../css/mainpage.css";
import {UserStore} from "../store/UserStore";
import Profile from "./Profile";
import {login, registration} from "../api/userApi";

function Authorization() {
  const isAuth = UserStore(state=>state._isAuth);
  const setAuth = UserStore(state=>state.setIsAuth);
  const user = UserStore(state=>state._user);
  const setUser = UserStore(state=>state.setUser);
  const [reg,setReg] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const buttonClick = async ()=>{
    try {
      let data;
      if(!reg){
        data = await login(email,password)
      }
      else{
        data = await registration(email,password)
      }
      setUser(data);
      setAuth(true);

    }
    catch (e){
      alert(e.response.data.message);
    }

  }

  return (
      !isAuth ? (
            <section className="authorization">
              <form>
                <div className="header_auth">
                  <h2>{!reg ?"Авторизация":"Регистрация"}</h2>
                </div>

                <input
                    type="email"
                    name="usermail"
                    placeholder="E-mail или имя пользователя"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="userpass"
                    placeholder="Пароль"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                />
              </form>
              {!reg?
                  (<>
                        <button onClick={buttonClick}>Войти</button>
                        <div className="remember_register">
                          <a href="#" onClick={()=>setReg(true)}>Зарегистрироваться</a>
                        </div>
                      </>
                  ) :  (
                      <>
                        <button onClick={buttonClick}>Зарегистрироваться</button>
                        <div className="remember_register">
                          <a href="#" onClick={()=>setReg(false)}>АвторизоватьсяN</a>
                        </div>
                      </>)}
            </section>
        )
      :(<Profile/>)

  );
}

export default Authorization;
