import React, { useState } from "react";
import "../css/tournaments.css";
import Profile from "../components/Profile";
import Modal from "../components/Modal";
import CreateNewTournament from "../components/CreateNewTournament";
import TournamentsList from "../components/TournamentsList";
import { useSelector } from "react-redux";
function TournamentPage() {
  const [modalActive, setModalActive] = useState(false);
  const tournaments = useSelector((state) => state.tournaments);
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
            <div
              className="create_tournament"
              onClick={() => setModalActive(true)}
            >
              Создать турнир
            </div>
          </form>
          <div className="tournaments_list">
            {tournaments && tournaments.length > 0 && (
              <TournamentsList tournaments={tournaments} />
            )}
          </div>
        </section>
        <Profile />
      </main>
      <Modal active={modalActive} setActive={setModalActive}>
        <CreateNewTournament />
      </Modal>
    </div>
  );
}

export default TournamentPage;
