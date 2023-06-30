import React from "react";
import "../css/tournaments.css";
import internationalImage from "../img/International_big.png";
import { Link } from "react-router-dom";
function TournamentBlock({ tournament, tournamentId }) {
  const {
    tournamentName,
    tournamentDescription,
    tournamentCommandNumber,
    tournamentGame,
    tournamentFormat,
    tournamentStartDate,
    tournamentEndDate,
    tournamentPrizeFund,
  } = tournament;
  return (
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
        <Link to={`/tournaments/${tournamentId}`}>
          <div className="go_to_tournament">
            <p>Перейти к турниру</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default TournamentBlock;
