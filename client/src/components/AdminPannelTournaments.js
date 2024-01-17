import { useEffect, useState } from "react";
import "../css/adminPannel.css";
import { TournamentStore } from "../store/TournamentStore";
import { deleteTournament, getTournaments } from "../api/tournamentApi";
import Modal from "./Modal";
import PaginationAdminPannel from "./PaginationAdminPannel";
import { useNavigate } from "react-router-dom";
import { TOURNAMENT_ROUTE } from "../utils/consts";

const AdminPannelTournaments = ({ setToggle }) => {
  const [loading, setLoading] = useState(true);
  const tournaments = TournamentStore((state) => state._tournaments);
  const setTournaments = TournamentStore((state) => state.setTournament);
  const setGame = TournamentStore((state) => state.setGame);
  const page = TournamentStore((state) => state._page);
  const setPage = TournamentStore((state) => state.setPage);
  const totalCount = TournamentStore((state) => state._totalCount);
  const setTotalCount = TournamentStore((state) => state.setTotalCount);
  const limit = TournamentStore((state) => state._limit);
  const [active, setActive] = useState(false);
  const [choosenTeam, setChoosenTeam] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getTournaments(1, 5)
      .then((data) => {
        setTournaments(data.rows);
        setTotalCount(data.count);
      })
      .finally(() => setLoading(false));
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

  const deleteTournamentAdmin = (tournamentId) => {
    deleteTournament(tournamentId);
    setActive(false);
  };

  if (loading) {
    return <div className="loading">Подождите,идёт загрузка...</div>;
  }
  return (
    <>
      <div className="backArrow" onClick={() => setToggle(1)}>
        {"<---"}
      </div>

      <div className="commandsAdmin_list">
        {tournaments &&
          tournaments.length > 0 &&
          tournaments.map((command) => (
            <div className="commandAdmin_block" key={command.id}>
              <div className="commandAdmin_image">
                <img
                  src={process.env.REACT_APP_API_URL + command.logo}
                  alt=""
                />
              </div>
              <h2>{command.name}</h2>
              <div className="adminCommands">
                <div
                  className="adminCommandsElem"
                  onClick={() => {
                    setActive(true);
                    setChoosenTeam(command.id);
                  }}
                >
                  Удалить
                </div>
                <div
                  className="adminCommandsElem"
                  onClick={() => navigate(TOURNAMENT_ROUTE + "/" + command.id)}
                >
                  Перейти
                </div>
              </div>
            </div>
          ))}
      </div>

      <PaginationAdminPannel
        store={tournaments}
        setPage={setPage}
        totalCount={totalCount}
        limit={limit}
        page={page}
      />

      <Modal active={active} setActive={setActive}>
        <p>Вы уверены,что хотите удалить турнир?</p>
        <div className="delButtonsModal">
          <div
            className="yesModalDel"
            onClick={() => deleteTournamentAdmin(choosenTeam)}
          >
            Да
          </div>
          <div className="noModalDel" onClick={() => setActive(false)}>
            Нет
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AdminPannelTournaments;
