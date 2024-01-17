import React, { useEffect, useState } from "react";
import "../css/tournaments.css";
import TournamentsList from "../components/TournamentsList";
import Authorization from "../components/Authorization";
import { Link } from "react-router-dom";
import { CREATE_TOURNAMENT } from "../utils/consts";
import { TournamentStore } from "../store/TournamentStore";
import { getAllGames, getTournaments } from "../api/tournamentApi";
import Pagination from "../components/Pagination";

function TournamentPage() {
  const [loading, setLoading] = useState(true);
  const tournaments = TournamentStore((state) => state._tournaments);
  const setTournaments = TournamentStore((state) => state.setTournament);
  const setGame = TournamentStore((state) => state.setGame);
  const page = TournamentStore((state) => state._page);
  const setPage = TournamentStore((state) => state.setPage);
  const totalCount = TournamentStore((state) => state._totalCount);
  const setTotalCount = TournamentStore((state) => state.setTotalCount);
  const limit = TournamentStore((state) => state._limit);

  useEffect(() => {
    getTournaments(1, 5)
      .then((data) => {
        setTournaments(data.rows);
        setTotalCount(data.count);
      })
      .finally(() => setLoading(false));
    getAllGames().then((data) => setGame(data));
  }, []);

  useEffect(() => {
    setLoading(true);
    getTournaments(page, 5)
      .then((data) => {
        setTournaments(data.rows);
        setTotalCount(data.count);
      })
      .finally(() => setLoading(false));
  }, [page]);

  if (loading) {
    return <div className="loading">Подождите,идёт загрузка...</div>;
  }
  return (
    <>
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
              <div className="create_tournament">Создать турнир</div>
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
      <Pagination
        store={tournaments}
        setPage={setPage}
        totalCount={totalCount}
        limit={limit}
        page={page}
      />
    </>
  );
}

export default TournamentPage;
