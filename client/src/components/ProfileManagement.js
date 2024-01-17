import defaultLogo from "../img/defaultLogo.png";
import changeIcon from "../static/change.svg";
import React, { useState } from "react";
import { UserStore } from "../store/UserStore";
import { updateUser } from "../api/userApi";
import { jwtDecode } from "jwt-decode";
import "../css/profileManagement.css";

function ProfileManagement() {
  const user = UserStore((state) => state._user);
  const setUser = UserStore((state) => state.setUser);
  const [logo, setLogo] = useState(null);
  const [userName, setUserName] = useState(null);
  const [nameInput, setNameInput] = useState(false);

  const changeProfile = async () => {
    const formData = new FormData();

    formData.append("logo", logo);
    formData.append("userName", userName);
    formData.append("id", user.id);
    await updateUser(formData)
      .then((data) => {
        setUser(jwtDecode(data.token));
        localStorage.setItem("token", data.token);
        setLogo(null);
        setUserName(null);
        setNameInput(!nameInput);
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="ProfileBlock">
      <div className="avatarProfile">
        <div className="avatar">
          <img
            src={
              user.logo
                ? process.env.REACT_APP_API_URL + user.logo
                : defaultLogo
            }
          />
        </div>
        <div className="changeIcon">
          <label htmlFor="logo_input">
            <img src={changeIcon} />
          </label>
          <input
            id="logo_input"
            type="file"
            onChange={(e) => {
              setLogo(e.target.files[0]);
            }}
          />
        </div>
      </div>
      <div className="userName">
        Имя: {user.userName ? user.userName : "defaultName"}
        <div className="changeIcon">
          <img
            src={changeIcon}
            onClick={() => {
              setNameInput(!nameInput);
              setUserName(null);
            }}
          />

          {nameInput ? (
            <input
              id="name_input"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
          ) : (
            false
          )}
        </div>
      </div>
      <p>Email: {user.email}</p>
      <p>Команда:</p>
      {logo || userName ? (
        <div className="submitButton" onClick={changeProfile}>
          Применить изменения
        </div>
      ) : (
        false
      )}
    </div>
  );
}

export default ProfileManagement;
