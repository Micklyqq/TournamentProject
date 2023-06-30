import React from "react";
import "../css/tournaments_in.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import internationalImage from "../img/International_big.png";
import liquidLogo from "../img/Liquid.png";
function TournamentIn() {
  const tournaments = useSelector((state) => state || []);
  const { id } = useParams();
  let currentTournament;
  if (tournaments && tournaments.length > 0) {
    currentTournament = tournaments.find((item) => item.id == id);
  }
  return (
    <main>
      <section class="tournament_info">
        <h1 class="header1">{currentTournament?.tournamentName}</h1>
        <div class="image_info">
          <img src={internationalImage} alt="" />
          <div class="image_info_text">
            <div class="image_info_1">
              <p>Дата начала:</p>
              <p>Дата завершения:</p>
              <p>Призовой фонд:</p>
            </div>
            <div class="image_info_2">
              <p>{currentTournament?.tournamentStartDate}</p>
              <p>{currentTournament?.tournamentEndDate}</p>
              <p>{currentTournament?.tournamentPrizeFund}</p>
            </div>
          </div>
        </div>
        <div class="info_big">
          <p>{currentTournament?.tournamentDescription}</p>
        </div>
        <div class="results">
          <h2>Результаты</h2>
          <div class="element_headers">
            <p>Место</p>
            <p>Команда</p>
            <p>Призовые</p>
          </div>
          <div class="results_list">
            <div class="result_element">
              <p>1</p>
              <div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
              <p>$8 518 822</p>
            </div>
            <div class="result_element">
              <p>2</p>
              <div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
              <p>$8 518 822</p>
            </div>
            <div class="result_element">
              <p>3</p>
              <div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
              <p>$8 518 822</p>
            </div>
            <div class="result_element">
              <p>4</p>
              <div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
              <p>$8 518 822</p>
            </div>

            <div class="show_all"></div>
          </div>
        </div>
        <div class="tournament_format">
          <h2>Формат турнира</h2>
          <ul>
            <li>
              Участники
              <ul>
                <li>12 команд, прошедших через Dota Pro Circuit</li>
                <li>
                  6 команд из региональных отборочных; по одной команде из
                  Северной Америки, Южной Америки, Западной Европы, Восточной
                  Европы, Китая и Юго-Восточной Азии
                </li>
                <li>
                  2 команды, прошедшие через The International 2022:
                  Квалификации Последнего шанса
                </li>
              </ul>
            </li>
            <li>
              Групповая стадия: 15 октября - 18 октября, 2022
              <ul>
                <li>20 команд поделены на две группы, по 10 команд в каждой</li>
                <li>Формат «каждый с каждым»</li>
                <li>
                  Лучшие 4 команды в каждой группе проходят в верхнюю сетку
                  плей-офф
                </li>
                <li>Оставшиеся команды покидают турнир</li>
              </ul>
            </li>
            <li>
              Основная стадия: 20 октября - 23 октября, 2022 & 29 октября - 30
              октября, 2022
              <ul>
                <li>16 команд играют в сетке до двух поражений</li>
                <li>
                  8 команд начинают с верхней сетки, 8 команд с нижней сетки
                </li>
                <li>
                  В первом раунде верхней сетки команда, занявшая 1-е место в
                  каждой группе, выбирает себе соперника из команд, занявших 3-е
                  или 4-е место в противоположной группе
                </li>
                <li>
                  В первом раунде нижней сетки команда, занявшая 5-е место в
                  каждой группе, выбирает себе соперника из команд, занявших 7-е
                  или 8-е место в противоположной группе
                </li>
                <li>
                  Первый раунд нижней сетки проходит в формате «лучший из
                  одного», гранд-финал проходит в формате «лучший из пяти», все
                  остальные матчи проходят в формате «лучший из трёх»
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="tournament_h2">
          <h2>Турнирная таблица</h2>
        </div>
        <div class="tournament_table">
          <div class="tournament_table_1">
            <div class="tournament_header">
              <p>#</p>
              <p>Группа А</p>
              <p>W</p>
              <p>L</p>
            </div>
            <div class="tournament_table_1_info">
              <p>1</p>
              <div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
              <p>1</p>
              <p>1</p>
            </div>
            <div class="tournament_table_1_info">
              <p>2</p>
              <div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
              <p>1</p>
              <p>1</p>
            </div>
            <div class="tournament_table_1_info">
              <p>3</p>
              <div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
              <p>1</p>
              <p>1</p>
            </div>
            <div class="tournament_table_1_info">
              <p>4</p>
              <div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
              <p>1</p>
              <p>1</p>
            </div>
            <div class="tournament_table_1_info">
              <p>5</p>
              <div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
              <p>1</p>
              <p>1</p>
            </div>
            <div class="tournament_table_1_info">
              <p>6</p>
              <div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
              <p>1</p>
              <p>1</p>
            </div>
            <div class="tournament_table_1_info">
              <p>7</p>
              <div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
              <p>1</p>
              <p>1</p>
            </div>
            <div class="tournament_table_1_info">
              <p>8</p>
              <div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
              <p>1</p>
              <p>1</p>
            </div>
            <div class="tournament_table_1_info">
              <p>9</p>
              <div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
              <p>1</p>
              <p>1</p>
            </div>
            <div class="tournament_table_1_info">
              <p>10</p>
              <div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
              <p>1</p>
              <p>1</p>
            </div>
          </div>
          <div class="tournament_table_2">
            <div class="table_element_2"></div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2"></div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2"></div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2"></div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2"></div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2"></div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2"></div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2"></div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2"></div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2"></div>
            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2">
              <img src={liquidLogo} alt="" />
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>
            <div class="table_element_2">
              <p class="lose_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>

            <div class="table_element_2">
              <p class="win_number">0:2</p>
            </div>
            <div class="table_element_2"></div>
          </div>
        </div>
        <div class="match_time">
          <h2>Расписание матчей</h2>
          <div class="game_now">
            <h3>Текущие игры</h3>
            <div class="matchtime_element">
              <div class="matchtime_element_info">
                <p>Team Liquid</p>
                <img src={liquidLogo} alt="" />
                <div class="mathctime_time">
                  <p class="date_red">Игра 1/3</p>
                  <p class="time">+34:26</p>
                </div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
            </div>
          </div>
          <div class="game_future">
            <h3>Будущие игры</h3>
            <div class="matchtime_element">
              <div class="matchtime_element_info">
                <p>Team Liquid</p>
                <img src={liquidLogo} alt="" />
                <div class="mathctime_time">
                  <p>13:00</p>
                  <p class="time">20.10</p>
                </div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
            </div>
            <div class="matchtime_element">
              <div class="matchtime_element_info">
                <p>Team Liquid</p>
                <img src={liquidLogo} alt="" />
                <div class="mathctime_time">
                  <p>13:00</p>
                  <p class="time">20.10</p>
                </div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
            </div>
            <div class="matchtime_element">
              <div class="matchtime_element_info">
                <p>Team Liquid</p>
                <img src={liquidLogo} alt="" />
                <div class="mathctime_time">
                  <p>13:00</p>
                  <p class="time">20.10</p>
                </div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
            </div>
            <div class="matchtime_element">
              <div class="matchtime_element_info">
                <p>Team Liquid</p>
                <img src={liquidLogo} alt="" />
                <div class="mathctime_time">
                  <p>13:00</p>
                  <p class="time">20.10</p>
                </div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
            </div>
            <div class="show_more">
              <p>Показать все</p>
            </div>
          </div>
          <div class="game_past">
            <h3>Прошедшие игры</h3>
            <div class="matchtime_element">
              <div class="matchtime_element_info">
                <p>Team Liquid</p>
                <img src={liquidLogo} alt="" />
                <div class="mathctime_time">
                  <p>0:2</p>
                </div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
            </div>
            <div class="matchtime_element">
              <div class="matchtime_element_info">
                <p>Team Liquid</p>
                <img src={liquidLogo} alt="" />
                <div class="mathctime_time">
                  <p>0:2</p>
                </div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
            </div>
            <div class="matchtime_element">
              <div class="matchtime_element_info">
                <p>Team Liquid</p>
                <img src={liquidLogo} alt="" />
                <div class="mathctime_time">
                  <p>0:2</p>
                </div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
            </div>
            <div class="matchtime_element">
              <div class="matchtime_element_info">
                <p>Team Liquid</p>
                <img src={liquidLogo} alt="" />
                <div class="mathctime_time">
                  <p>0:2</p>
                </div>
                <img src={liquidLogo} alt="" />
                <p>Team Liquid</p>
              </div>
            </div>
            <div class="show_more">
              <p>Показать все</p>
            </div>
          </div>
        </div>
        <div class="commands_list">
          <h2>Команды</h2>
          <div class="command_list_body">
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
            <div class="command_list_element">
              <h3>Team Liquid</h3>
              <img src={liquidLogo} alt="" />
              <div class="command_button">
                <a href="#">
                  <p>Перейти к команде</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="profile">
        <div class="profile_header">
          <h2>Профиль</h2>
        </div>
        <div class="profile_info">
          <div class="profile_picture">
            <img src="img/profile_picture.png" alt="" />
            <a href="#">Изменить</a>
          </div>
          <p class="nickname">Gamer334</p>
          <p class="username_info">Команда:OG</p>
          <p class="username_info">Rating: 3400</p>
        </div>
        <form
          action="#"
          method="post"
          enctype="multipart/form-data"
          class="tournaments_search"
        >
          <a href="#">
            <div class="profile_buttons">Настройки</div>
          </a>
          <a href="#">
            <div class="profile_buttons">Личные сообщения</div>
          </a>
          <a href="#">
            <div class="profile_buttons">Смена ника</div>
          </a>
          <button type="submit" class="profile_exitbutton">
            Выйти
          </button>
        </form>
      </section>
    </main>
  );
}

export default TournamentIn;
