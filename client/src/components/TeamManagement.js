import defaultLogo from "../img/defaultLogo.png";
import changeIcon from "../img/change.svg";
import React, { useEffect, useState } from "react";
import { UserStore } from "../store/UserStore";
import {
  deleteTeam,
  findAllTeammates,
  getOneTeam,
  kickUser,
  updateTeam,
} from "../api/commandApi";
import { updateUser } from "../api/userApi";
import { jwtDecode } from "jwt-decode";
import "../css/teamManagement.css";
import { Link } from "react-router-dom";
import { COMMAND_CREATE } from "../utils/consts";
import { getAllTeamNotification } from "../api/notificationApi";
import { TeamNotificationComponent } from "./TeamNotificationComponent";
import Modal from "./Modal";

function TeamManagement() {
  const user = UserStore((state) => state._user);
  const [notification, setNotification] = useState([]);
  const [team, setTeam] = useState({});
  const [teammates, setTeammates] = useState([]);
  const [playerKicked, setPlayerKicked] = useState(null);
  const [notificationReload, setNotificationReload] = useState(null);
  const [active, setActive] = useState(false);

  const hadleChildData = (data) => {
    setNotificationReload(data);
  };

  useEffect(() => {
    if (user.teamOwner !== null) {
      getOneTeam(user.teamOwner)
        .then((data) => {
          setTeam(data);
          return getAllTeamNotification(data.id);
        })
        .then((notificationData) => {
          setNotification(notificationData);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [notificationReload]);

  useEffect(() => {
    if (team.id) {
      findAllTeammates(team.id)
        .then((data) => setTeammates(data))
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [team.id, playerKicked, notificationReload]);

  const [logo, setLogo] = useState(null);
  const [name, setName] = useState(null);
  const [nameInput, setNameInput] = useState(false);

  const changeTeam = async () => {
    const formData = new FormData();

    formData.append("logo", logo);
    formData.append("name", name);
    formData.append("id", team.id);
    await updateTeam(formData)
      .then((data) => {
        setLogo(null);
        setName(null);
        setNameInput(!nameInput);
        setTeam(data);
      })
      .catch((e) => console.error(e));
  };

  const kickPlayer = async (userId) => {
    await kickUser(userId, team.id).then((data) =>
      setPlayerKicked(data.userId)
    );
  };

  const delTeam = async () => {
    if (team.id) {
      await deleteTeam(team.id).then(() => window.location.reload());
    }
  };
  return user.teamOwner ? (
    <div className="TeamBlock">
      <div className="avatarTeam">
        <div className="avatar">
          <img
            src={
              team.logo
                ? process.env.REACT_APP_API_URL + team.logo
                : defaultLogo
            }
            alt="nologo"
          />
        </div>
        <div className="changeIcon">
          <label htmlFor="logo_input">
            <img src={changeIcon} alt="nologo" />
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
      <div className="delTeamButton" onClick={() => setActive(true)}>
        Удалить команду
      </div>
      <div className="teamName">
        Название: {team.name ? team.name : "defaultName"}
        <div className="changeIcon">
          <img
            src={changeIcon}
            onClick={() => {
              setNameInput(!nameInput);
              setName(null);
            }}
            alt="nologo"
          />

          {nameInput ? (
            <input
              id="name_input"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            false
          )}
        </div>
      </div>
      {logo || name ? (
        <div className="submitButton" onClick={changeTeam}>
          Применить изменения
        </div>
      ) : (
        false
      )}
      {teammates && teammates != null && teammates.length > 0 && (
        <>
          <h2>Состав </h2>
          <table className="team_composition_management">
            <tbody>
              {teammates &&
                teammates.length > 0 &&
                teammates.map((item) => (
                  <tr key={item.id}>
                    {" "}
                    <td>
                      <div>
                        <img
                          src={
                            item.logo
                              ? process.env.REACT_APP_API_URL + item.logo
                              : defaultLogo
                          }
                          alt=""
                          className="teammatesListImage"
                        />
                        <div>
                          <p className="teammatesListUsername">
                            {item.userName ? item.userName : "defaultName"}
                          </p>{" "}
                        </div>
                        <div
                          className="kickButton"
                          onClick={() => kickPlayer(item.id)}
                        >
                          <p>Выгнать</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}

      {notification && notification != null && notification.length > 0 && (
        <div className="Notifications">
          <p>Уведомления:</p>
          {notification &&
            notification.length > 0 &&
            notification.map((item, index) => (
              <TeamNotificationComponent
                key={index}
                notification={item}
                hadleChildData={hadleChildData}
              />
            ))}
        </div>
      )}

      <Modal active={active} setActive={setActive}>
        <p>Вы уверены,что хотите удалить команду?</p>
        <div className="delButtonsModal">
          <div className="yesModalDel" onClick={delTeam}>
            Да
          </div>
          <div className="noModalDel" onClick={() => setActive(false)}>
            Нет
          </div>
        </div>
      </Modal>
    </div>
  ) : (
    <>
      <p>У вас нет команды, но вы можете ее создать!</p>
      <Link to={COMMAND_CREATE}>
        <div className="submitButton">Создать команду</div>
      </Link>
    </>
  );
}

export default TeamManagement;
