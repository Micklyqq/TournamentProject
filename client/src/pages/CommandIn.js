import React, {useEffect} from "react";
import "../css/commands_in.css";
import { useParams } from "react-router-dom";
import commandImage from "../img/TS.png";
import playerIcon from "../img/player.png";
import international from "../img/int.png";
import {CommandStore} from "../store/CommandStore";
import {getOneTeam} from "../api/commandApi";
function CommandIn() {

  const command = CommandStore(state=>state._commands);
  const setCommand = CommandStore(state=>state.setCommand)
  const { id } = useParams();
  useEffect(() => {
    getOneTeam(id).then((data)=>setCommand(data));
  }, []);
  return (
    <main>
      <section className="commands_info">
        <h1>
          Команда {command?.name}
        </h1>
        <div className="main_info">
          <img src={process.env.REACT_APP_API_URL+command.logo} alt="" />
          <div className="command_about">
            <div className="command_about_first">
              <p>Страна:</p>
              <p>Рейтинг:</p>
              <p>Заработано:</p>
              <p>Туринры:</p>
              <p>Первые места:</p>
            </div>
            <div className="command_about_second">
              <p>Москва</p>
              <p>9300</p>
              <p>$ 24 965 688</p>
              <p>106</p>
              <p>16</p>
            </div>
          </div>
        </div>
        <div className="info_big">

        </div>
        <h2>Статистика команды</h2>
        <div className="command_stat">
          <div className="command_stat_element">
            <p>Победы %</p>
            <p>55%</p>
          </div>
          <div className="command_stat_element">
            <p>Всего сыграно</p>
            <p>
              <span className="win">329 </span>/ 66 /{" "}
              <span className="lose">196</span>
            </p>
          </div>
          <div className="command_stat_element">
            <p>Текущий стрик:</p>
            <p>
              <span className="lose">1 поражение</span>
            </p>
          </div>
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
            <tr>
              <td>
                <div>
                  <img src={playerIcon} alt="" />
                  <div>
                    <p>Zai</p>
                    <p>Людвиг Уолберг</p>
                  </div>
                </div>
              </td>
              <td>Оффлейнер</td>
              <td>25</td>
              <td>03.11.2021</td>
            </tr>
            <tr>
              <td>
                <div>
                  <img src={playerIcon} alt="" />
                  <div>
                    <p>Zai</p>
                    <p>Людвиг Уолберг</p>
                  </div>
                </div>
              </td>
              <td>Оффлейнер</td>
              <td>25</td>
              <td>03.11.2021</td>
            </tr>
            <tr>
              <td>
                <div>
                  <img src={playerIcon} alt="" />
                  <div>
                    <p>Zai</p>
                    <p>Людвиг Уолберг</p>
                  </div>
                </div>
              </td>
              <td>Оффлейнер</td>
              <td>25</td>
              <td>03.11.2021</td>
            </tr>
            <tr>
              <td>
                <div>
                  <img src={playerIcon} alt="" />
                  <div>
                    <p>Zai</p>
                    <p>Людвиг Уолберг</p>
                  </div>
                </div>
              </td>
              <td>Оффлейнер</td>
              <td>25</td>
              <td>03.11.2021</td>
            </tr>
            <tr>
              <td>
                <div>
                  <img src={playerIcon} alt="" />
                  <div>
                    <p>Zai</p>
                    <p>Людвиг Уолберг</p>
                  </div>
                </div>
              </td>
              <td>Оффлейнер</td>
              <td>25</td>
              <td>03.11.2021</td>
            </tr>
            <tr>
              <td>
                <div>
                  <img src={playerIcon} alt="" />
                  <div>
                    <p>Zai</p>
                    <p>Людвиг Уолберг</p>
                  </div>
                </div>
              </td>
              <td>Оффлейнер</td>
              <td>25</td>
              <td>03.11.2021</td>
            </tr>
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
