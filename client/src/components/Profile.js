import React, {useEffect, useState} from "react";
import "../css/tournaments.css";
import {UserStore} from "../store/UserStore";
import {jwtDecode} from "jwt-decode";
import {getData} from "../api/userApi";
import defaultLogo from "../static/8dd98655-043f-401e-b331-0b4e1bf1f647.png";
import {Spinner} from "react-bootstrap";

function Profile({setAuth,isAuth,setUser}) {


    const userLogo = UserStore(state=>state._userLogo);
    const userName = UserStore(state=>state._userName);
    const setUserName = UserStore(state=>state.setUserName);
    const setUserLogo = UserStore(state=>state.setUserLogo);
    const [loading,setLoading]=useState(true);


    const exit = ()=>{
        setAuth(false);
        setUser({});
        localStorage.setItem('token','');
    }
    useEffect(() => {
        const user = jwtDecode(localStorage.getItem('token'));
        getData(user.id).then(data => {
            setUserName(data.userName);
            setUserLogo(data.logo?(process.env.REACT_APP_API_URL+data.logo):null);

        }).finally(()=>setLoading(false));

    }, [isAuth]);
    if(loading){
        return <Spinner animation={"grow"}/>
    }
  return (
    <section className="profile">
      <div className="profile_header">
        <h2>Профиль</h2>
      </div>
      <div className="profile_info">
        <div className="profile_picture">
          <img src={userLogo?userLogo:defaultLogo} alt="" />
        </div>
        <p className="nickname">{userName?userName:"defaulName"}</p>
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

      </form>
        <button onClick={exit} className="profile_buttons">
            Выйти
        </button>
    </section>
  );
}

export default Profile;
