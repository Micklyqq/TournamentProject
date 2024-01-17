import React, { useEffect, useState } from "react";
import "../css/commands_in.css";
import { useParams } from "react-router-dom";
import commandImage from "../img/TS.png";
import international from "../img/int.png";
import { findAllTeammates, getOneTeam } from "../api/commandApi";
import { UserStore } from "../store/UserStore";
import {
  createTeamNotification,
  getOneTeamNotification,
} from "../api/notificationApi";
import defaultLogo from "../img/defaultLogo.png";
function CommandIn() {
  const [loading, setLoading] = useState(true);
  const [teammates, setTeammates] = useState({});
  const user = UserStore((state) => state._user);
  const [command, setCommand] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getOneTeam(id)
      .then((data) => setCommand(data))
      .finally(() => setLoading(false));
    findAllTeammates(id).then((data) => setTeammates(data));
  }, []);

  const Click = async () => {
    try {
      if (teammates && teammates.length < 5 && user.teamId === null) {
        const notificationData = await getOneTeamNotification(
          command.id,
          user.id
        );
        if (notificationData === null) {
          await createTeamNotification(user.id, command.id);
          alert("Заявка была подана!");
        } else {
          alert("Вы уже подали заявку!");
        }
      } else {
        alert("Команда уже набрала достаточное количество игроков!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  if (loading) {
    return <div className="loading">Подождите,идёт загрузка...</div>;
  }
  return (
    <main>
      <section className="commands_info">
        <h1>Команда {command?.name}</h1>
        <div className="main_info">
          <div className="team_logo">
            <img src={process.env.REACT_APP_API_URL + command.logo} alt="" />
          </div>
        </div>
        <div className="info_big">
          {teammates && teammates.length < 5 && user.teamId === null ? (
            <div className="applyToJoinButton" onClick={Click}>
              Подать заявку на вступление
            </div>
          ) : (
            <div className="commandIsFull">Вы не можете подать заявку</div>
          )}
        </div>

        <h2>Состав </h2>
        <table className="team_composition">
          <tbody>
            <tr>
              <td>Игрок</td>
              <td>Позиция</td>
              <td>Возраст</td>
              <td>Принят</td>
            </tr>
            {teammates &&
              teammates.length > 0 &&
              teammates.map((item) => (
                <tr key={item.id}>
                  {" "}
                  {/* Добавлен key для каждого элемента в массиве */}
                  <td>
                    <div>
                      <img
                        src={
                          item.logo
                            ? process.env.REACT_APP_API_URL + item.logo
                            : defaultLogo
                        }
                        alt=""
                      />
                      <div>
                        <p>{item.userName ? item.userName : "defaultName"}</p>{" "}
                        {/* Использование item.userName вместо teammates.userName */}
                      </div>
                    </div>
                  </td>
                  <td>Оффлейнер</td>
                  <td>25</td>
                  <td>03.11.2021</td>
                </tr>
              ))}
          </tbody>
        </table>
        <h2>Игры </h2>
        <div className="match_time">
          <div className="game_future">
            <h3>Будущие игры</h3>
            <div className="matchtime_element">
              <div className="matchtime_element_info">
                <p></p>
                <img src={commandImage} alt="" />
                <div className="mathctime_time">
                  <p>13:00</p>
                  <p className="time">20.10</p>
                </div>
                <img src={commandImage} alt="" />
                <p></p>
              </div>
            </div>
            <div className="matchtime_element">
              <div className="matchtime_element_info">
                <p></p>
                <img src={commandImage} alt="" />
                <div className="mathctime_time">
                  <p>13:00</p>
                  <p className="time">20.10</p>
                </div>
                <img src={commandImage} alt="" />
                <p></p>
              </div>
            </div>
            <div className="matchtime_element">
              <div className="matchtime_element_info">
                <p></p>
                <img src={commandImage} alt="" />
                <div className="mathctime_time">
                  <p>13:00</p>
                  <p className="time">20.10</p>
                </div>
                <img src={commandImage} alt="" />
                <p></p>
              </div>
            </div>
            <div className="matchtime_element">
              <div className="matchtime_element_info">
                <p></p>
                <img src={commandImage} alt="" />
                <div className="mathctime_time">
                  <p>13:00</p>
                  <p className="time">20.10</p>
                </div>
                <img src={commandImage} alt="" />
                <p></p>
              </div>
            </div>
            <div className="show_more">
              <p>Показать все</p>
            </div>
          </div>
          <div className="game_past">
            <h3>Прошедшие игры</h3>
            <div className="matchtime_element">
              <div className="matchtime_element_info">
                <p></p>
                <img src={commandImage} alt="" />
                <div className="mathctime_time">
                  <p>0:2</p>
                </div>
                <img src={commandImage} alt="" />
                <p></p>
              </div>
            </div>
            <div className="matchtime_element">
              <div className="matchtime_element_info">
                <p></p>
                <img src={commandImage} alt="" />
                <div className="mathctime_time">
                  <p>0:2</p>
                </div>
                <img src={commandImage} alt="" />
                <p></p>
              </div>
            </div>
            <div className="matchtime_element">
              <div className="matchtime_element_info">
                <p></p>
                <img src={commandImage} alt="" />
                <div className="mathctime_time">
                  <p>0:2</p>
                </div>
                <img src={commandImage} alt="" />
                <p></p>
              </div>
            </div>
            <div className="matchtime_element">
              <div className="matchtime_element_info">
                <p></p>
                <img src={commandImage} alt="" />
                <div className="mathctime_time">
                  <p>0:2</p>
                </div>
                <img src={commandImage} alt="" />
                <p></p>
              </div>
            </div>
            <div className="show_more">
              <p>Показать все</p>
            </div>
          </div>
        </div>
        <h2>Турниры</h2>
        <table className="tournament_list">
          <tbody>
            <tr>
              <td>Место</td>
              <td>Турнир</td>
              <td>Приз</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <div>
                  <img src={international} alt="" />
                  <div>
                    <p>The Internation 2022</p>
                  </div>
                </div>
              </td>
              <td>$1 703 810</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <div>
                  <img src={international} alt="" />
                  <div>
                    <p>The Internation 2022</p>
                  </div>
                </div>
              </td>
              <td>$1 703 810</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <div>
                  <img src={international} alt="" />
                  <div>
                    <p>The Internation 2022</p>
                  </div>
                </div>
              </td>
              <td>$1 703 810</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <div>
                  <img src={international} alt="" />
                  <div>
                    <p>The Internation 2022</p>
                  </div>
                </div>
              </td>
              <td>$1 703 810</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <div>
                  <img src={international} alt="" />
                  <div>
                    <p>The Internation 2022</p>
                  </div>
                </div>
              </td>
              <td>$1 703 810</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default CommandIn;
