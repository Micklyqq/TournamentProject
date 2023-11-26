import React, {useEffect} from "react";
import "../css/tournaments.css";
import TournamentsList from "../components/TournamentsList";
import Authorization from "../components/Authorization";
import {Link} from 'react-router-dom';
import {CREATE_TOURNAMENT} from "../utils/consts";
import {TournamentStore} from "../store/TournamentStore";
import {getAllGames, getTournaments} from "../api/tournamentApi";
function TournamentPage() {

 const tournaments = TournamentStore(state => state._tournaments);
const setTournaments = TournamentStore(state=>state.setTournament);
    const setGame = TournamentStore(state=>state.setGame)

    useEffect(() => {
        getTournaments().then((data)=>setTournaments(data));
        getAllGames().then((data)=>setGame(data));

    }, []);




  return (
    <div>
      <main>
        <section className="tournaments">
          <form
            action="#"
            method="post"
            encType="multipart/form-data"
            className="tournaments_search"
          >
            <input
              type="text"
              name="search"
              placeholder="Введите название турнира или его id"
            ></input>
            <button type="submit" className="button_search">
              Поиск
            </button>
            <Link to={CREATE_TOURNAMENT}>
            <div
              className="create_tournament"
            >
              Создать турнир
            </div>
            </Link>
          </form>
          <div className="tournaments_list">
            {tournaments && tournaments.length > 0 && (
              <TournamentsList tournaments={tournaments} />
            )}
          </div>
        </section>
        <Authorization />
      </main>

    </div>
  );
}

export default TournamentPage;
