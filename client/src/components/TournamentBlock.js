import React, {useEffect, useState} from "react";
import "../css/tournaments.css";
import { Link, useLocation } from "react-router-dom";
import {TournamentStore} from "../store/TournamentStore";
import {TOURNAMENT_ROUTE} from "../utils/consts";
function TournamentBlock({ tournament }) {
  const currentUrl = useLocation().pathname;
  const game = TournamentStore(store=>store._games);

  const [gameName,setGameName] = useState('');
  const {
    id,
    name,
    description,
    size,
    gameId,
    prize,
    date,
    logo,
  } = tournament;

  const getGameName = (id,game)=>{
    for(let i =0;i<game.length;i++){
      if(game[i].id===id){
        setGameName(game[i].name);
      }
    }
  }

  useEffect(() => {
    getGameName(gameId,game)
  }, [game]);

  const tournamentView = (
    <div className="tournament_block">
      <div className="tournament_image">
        <img src={process.env.REACT_APP_API_URL+logo} alt="" />
      </div>
      <div className="tournament_text">
        <h2>{name}</h2>
        <p>Дата начала: {date} </p>
        <p>Призовой фонд: ${prize} </p>
      </div>
      <div className="tournament_go">
        <p>Игра: {gameName}</p>
        <p>Число команд: {size}</p>
        <Link to={TOURNAMENT_ROUTE+`/${id}`}>
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
        <img src={process.env.REACT_APP_API_URL+logo} alt="" />
        <h1>{name}</h1>
        <p>Дата начала: {date}</p>
        <p>Призовой фонд: {prize}</p>
      </div>
    </Link>
  );

  return <>{currentUrl != "/" ? tournamentView : mainPageView}</>;
}

export default TournamentBlock;
