import React from "react";
import "../css/tournaments.css";
import internationalImage from "../img/International_big.png";
import { Link, useLocation } from "react-router-dom";
import internationalSmall from "../img/International.png";
function TournamentBlock({ tournament }) {
  const currentUrl = useLocation().pathname;
  const {
    id,
    tournamentName,
    tournamentDescription,
    tournamentCommandNumber,
    tournamentGame,
    tournamentFormat,
    tournamentStartDate,
    tournamentEndDate,
    tournamentPrizeFund,
  } = tournament;
  const tournamentView = (
    <div className="tournament_block">
      <div className="tournament_image">
        <img src={internationalImage} alt="" />
        <p>Дата начала: {tournamentStartDate} </p>
        <p>Дата завершения: {tournamentEndDate}</p>
        <p>Призовой фонд: ${tournamentPrizeFund} </p>
      </div>
      <div className="tournament_text">
        <h2>{tournamentName}</h2>
        <p>{tournamentDescription}</p>
      </div>
      <div className="tournament_go">
        <p>Игра: {tournamentGame}</p>
        <p>Число команд: {tournamentCommandNumber}</p>
        <p>Формат турнира: {tournamentFormat}</p>
        <a href="#">
          <button className="apply_for">
            <p>Подать заявку на участие</p>
          </button>
        </a>
        <Link to={`/tournaments/${id}`}>
          <div className="go_to_tournament">
            <p>Перейти к турниру</p>
          </div>
        </Link>
      </div>
    </div>
  );
  const mainPageView = (
    <Link to={`/tournaments/${id}`}>
      <div className="tournament_block">
        <img src={internationalSmall} alt="" />
        <h1>{tournamentName}</h1>
        <p>Дата начала: {tournamentStartDate}</p>
        <p>Дата завершения: {tournamentEndDate}</p>
        <p>Призовой фонд: {tournamentPrizeFund}</p>
      </div>
    </Link>
  );

  return <>{currentUrl != "/" ? tournamentView : mainPageView}</>;
}

export default TournamentBlock;
