import React, { useEffect, useState } from "react";
import "../css/commands.css";
import CommandsList from "../components/CommandsList";
import Authorization from "../components/Authorization";
import { Link } from "react-router-dom";
import { COMMAND_CREATE } from "../utils/consts";
import { CommandStore } from "../store/CommandStore";
import { getTeams } from "../api/commandApi";
import Pagination from "../components/Pagination";
function CommandsPage() {
  const [loading, setLoading] = useState(true);
  const commands = CommandStore((state) => state._commands);
  const setCommand = CommandStore((state) => state.setCommand);
  const page = CommandStore((state) => state._page);
  const setPage = CommandStore((state) => state.setPage);
  const totalCount = CommandStore((state) => state._totalCount);
  const setTotalCount = CommandStore((state) => state.setTotalCount);
  const limit = CommandStore((state) => state._limit);

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
  }, [page]);

  if (loading) {
    return <div className="loading">Подождите,идёт загрузка...</div>;
  }
  return (
    <>
      <main>
        <section className="commands_menu">
          <form
            action="#"
            method="post"
            encType="multipart/form-data"
            className="commands_search"
          >
            <input
              type="text"
              name="search"
              placeholder="Введите название команды или её id"
            />
            <button type="submit" className="button_search">
              Поиск
            </button>
            <Link to={COMMAND_CREATE}>
              <div className="create_command">Создать команду</div>
            </Link>
          </form>
          <div className="commands_list">
            {commands && commands.length > 0 && (
              <CommandsList commands={commands} />
            )}
          </div>
        </section>
        <Authorization />
      </main>
      <Pagination
        store={commands}
        setPage={setPage}
        totalCount={totalCount}
        limit={limit}
        page={page}
      />
    </>
  );
}

export default CommandsPage;
