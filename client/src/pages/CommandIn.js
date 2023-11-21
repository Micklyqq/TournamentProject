import React from "react";
import "../css/commands_in.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import commandImage from "../img/TS.png";
import playerIcon from "../img/player.png";
import international from "../img/int.png";
function CommandIn() {
  const commands = useSelector((state) => state.commands || []);
  const { id } = useParams();
  let currentCommand;
  if (commands && commands.length > 0) {
    currentCommand = commands.find((item) => item.id == id);
  }
  return (
    <main>
      <section className="commands_info">
        <h1>
          Команда {currentCommand?.commandName} по {currentCommand?.commandGame}
        </h1>
        <div className="main_info">
          <img src={commandImage} alt="" />
          <div className="command_about">
            <div className="command_about_first">
              <p>Страна:</p>
              <p>Рейтинг:</p>
              <p>Заработано:</p>
              <p>Туринры:</p>
              <p>Первые места:</p>
            </div>
            <div className="command_about_second">
              <p>{currentCommand?.commandCountry}</p>
              <p>9300</p>
              <p>$ 24 965 688</p>
              <p>106</p>
              <p>16</p>
            </div>
          </div>
        </div>
        <div className="info_big">
          <p>
            {currentCommand?.commandName} — европейская киберспортивная
            организация. Первый американский собрался в декабре 2012, в него
            вошли TC, BuLba, FLUFFNSTUFF, ixmike88 и Korok. Та команда получила
            прямое приглашение на The International 2013 и смогла занять 7-8
            место.
          </p>

          <p>
            {currentCommand?.commandName} неплохо выступала в американском
            регионе, однако на крупных турнирах не побеждали. Поэтому перед The
            International 2014 в команде произошли замены: остались лишь TC и
            BuLba, а новыми игроками стали qojqva, DeMoN и Waytosexy. В этот раз
            главный турнир вновь не покорился американцам, а после неудачи было
            принято решение полностью распустить Dotа-состав.
          </p>

          <p>
            Осенью 2015 {currentCommand?.commandName} представляет новый состав
            команды, который будет выступать в Европе. Подписание бесхозных
            5Jungz определенно стало лучшим решением организации. Опыт FATA- и
            KuroKy и таланты JerAx, MATUMBAMAN и MinD_ContRoL сразу привлекли
            фанатов по всему миру. Несмотря на провал в квалификациях к
            Frankfurt Major, в команде был виден потенциал, который окончательно
            раскрылся весной 2016: победа на EPICENTER, вторые места на
            Major-турнирах от Valve в Шанхае и Маниле. К The International 2016{" "}
            {currentCommand?.commandName} подходила в качестве одной из
            фавориток, однако заняла лишь 7-8 место.
          </p>

          <p>
            После главного турнира из команды ушли FATA- и JerAx. Вместо них
            пришли Miracle- и BuLba. Последнего вскоре очень быстро заменил GH,
            который после первых турниров получил народное звание «лучшая
            четверка мира». Именно тот состав стал «золотым» в истории
            организации. Пятерка KuroKy в 2017 выиграла два турнира от
            Starladder, EPICENTER 2017, DreamLeague Season 7 , а также подняла
            эгиду на The International 2017.
          </p>
          <p>
            Дальнейшая судьба той команды складывалась не так ярко: в 2018 она
            выиграла лишь один турнир, а на The International 2018 взяла
            четвертое место. В 2019 {currentCommand?.commandName} побеждает на
            MDL Macau 2019, берет серебро MDL Disneyland® Paris Major. Тем не
            менее, перед EPICENTER XL впервые за долгое время в команде
            происходят изменения: MATUMBAMAN уходит из состава, а на его место
            приходит вице-чемпион мира w33. Обновленный состав Ликвид по Дота 2
            берет второе место на турнире в Москве, а в августе — второе на The
            International 2019.
          </p>
          <p>
            Турнир в Шанхае стал последним для той команды. Осенью 2019 весь
            состав покидает организацию, которая в свою очередь подписывает на
            их место пятерку из Alliance во главе с iNSaNiA. Обновленная Team
            Liquid зарекомендавала себя как крепкий состав, показав хорошие
            результаты на оффлайн и онлайн турнирах: 5-6 места на DreamLeague
            Season 13: The Leipzig Major и MDL Changsha Major, а также второе на
            OGA Dota PIT 2020 Online: EU/CIS.
          </p>
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
        <h2>Состав {currentCommand?.commandName}</h2>
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
        <h2>Игры {currentCommand?.commandName}</h2>
        <div className="match_time">
          <div className="game_future">
            <h3>Будущие игры</h3>
            <div className="matchtime_element">
              <div className="matchtime_element_info">
                <p>{currentCommand?.commandName}</p>
                <img src={commandImage} alt="" />
                <div className="mathctime_time">
                  <p>13:00</p>
                  <p className="time">20.10</p>
                </div>
                <img src={commandImage} alt="" />
                <p>{currentCommand?.commandName}</p>
              </div>
            </div>
            <div className="matchtime_element">
              <div className="matchtime_element_info">
                <p>{currentCommand?.commandName}</p>
                <img src={commandImage} alt="" />
                <div className="mathctime_time">
                  <p>13:00</p>
                  <p className="time">20.10</p>
                </div>
                <img src={commandImage} alt="" />
                <p>{currentCommand?.commandName}</p>
              </div>
            </div>
            <div className="matchtime_element">
              <div className="matchtime_element_info">
                <p>{currentCommand?.commandName}</p>
                <img src={commandImage} alt="" />
                <div className="mathctime_time">
                  <p>13:00</p>
                  <p className="time">20.10</p>
                </div>
                <img src={commandImage} alt="" />
                <p>{currentCommand?.commandName}</p>
              </div>
            </div>
            <div className="matchtime_element">
              <div className="matchtime_element_info">
                <p>{currentCommand?.commandName}</p>
                <img src={commandImage} alt="" />
                <div className="mathctime_time">
                  <p>13:00</p>
                  <p className="time">20.10</p>
                </div>
                <img src={commandImage} alt="" />
                <p>{currentCommand?.commandName}</p>
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
                <p>{currentCommand?.commandName}</p>
                <img src={commandImage} alt="" />
                <div className="mathctime_time">
                  <p>0:2</p>
                </div>
                <img src={commandImage} alt="" />
                <p>{currentCommand?.commandName}</p>
              </div>
            </div>
            <div className="matchtime_element">
              <div className="matchtime_element_info">
                <p>{currentCommand?.commandName}</p>
                <img src={commandImage} alt="" />
                <div className="mathctime_time">
                  <p>0:2</p>
                </div>
                <img src={commandImage} alt="" />
                <p>{currentCommand?.commandName}</p>
              </div>
            </div>
            <div className="matchtime_element">
              <div className="matchtime_element_info">
                <p>{currentCommand?.commandName}</p>
                <img src={commandImage} alt="" />
                <div className="mathctime_time">
                  <p>0:2</p>
                </div>
                <img src={commandImage} alt="" />
                <p>{currentCommand?.commandName}</p>
              </div>
            </div>
            <div className="matchtime_element">
              <div className="matchtime_element_info">
                <p>{currentCommand?.commandName}</p>
                <img src={commandImage} alt="" />
                <div className="mathctime_time">
                  <p>0:2</p>
                </div>
                <img src={commandImage} alt="" />
                <p>{currentCommand?.commandName}</p>
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
