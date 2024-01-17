import { useEffect, useState } from "react";
import "../css/adminPannel.css";
import { CommandStore } from "../store/CommandStore";
import { deleteTeam, getTeams } from "../api/commandApi";
import CommandsList from "../components/CommandsList";
import PaginationAdminPannel from "./PaginationAdminPannel";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { COMMAND_ROUTE } from "../utils/consts";

const AdminPannelTeams = ({ toggle, setToggle }) => {
  const [loading, setLoading] = useState(true);
  const commands = CommandStore((state) => state._commands);
  const setCommand = CommandStore((state) => state.setCommand);
  const page = CommandStore((state) => state._page);
  const setPage = CommandStore((state) => state.setPage);
  const totalCount = CommandStore((state) => state._totalCount);
  const setTotalCount = CommandStore((state) => state.setTotalCount);
  const limit = CommandStore((state) => state._limit);
  const [active, setActive] = useState(false);
  const [choosenTeam, setChoosenTeam] = useState(null);
  const [refresh, setRefresh] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getTeams(1, 6)
      .then((data) => {
        setCommand(data.rows);
        setTotalCount(data.count);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    getTeams(page, 6)
      .then((data) => {
        setCommand(data.rows);
        setTotalCount(data.count);
      })
      .finally(() => setLoading(false));
  }, [page, refresh]);

  const deleteTeamAdmin = (teamId) => {
    deleteTeam(teamId).then(() => setRefresh(teamId));
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
        {commands &&
          commands.length > 0 &&
          commands.map((command) => (
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
                  onClick={() => navigate(COMMAND_ROUTE + "/" + command.id)}
                >
                  Перейти
                </div>
              </div>
            </div>
          ))}
      </div>

      <PaginationAdminPannel
        store={commands}
        setPage={setPage}
        totalCount={totalCount}
        limit={limit}
        page={page}
      />

      <Modal active={active} setActive={setActive}>
        <p>Вы уверены,что хотите удалить команду?</p>
        <div className="delButtonsModal">
          <div
            className="yesModalDel"
            onClick={() => deleteTeamAdmin(choosenTeam)}
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

export default AdminPannelTeams;
