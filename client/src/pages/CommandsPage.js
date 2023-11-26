import React, {useEffect} from "react";
import "../css/commands.css";
import CommandsList from "../components/CommandsList";
import Authorization from "../components/Authorization";
import {Link} from "react-router-dom";
import {COMMAND_CREATE} from "../utils/consts";
import {CommandStore} from "../store/CommandStore";
import {getTeams} from "../api/commandApi";

function CommandsPage() {
  const commands = CommandStore(state => state._commands);
  const setCommand = CommandStore(state=>state.setCommand);


  useEffect(() => {
    getTeams().then((data)=>setCommand(data));

  }, []);


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
            <div
              className="create_command"
            >
              Создать команду
            </div>
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
    </>
  );
}

export default CommandsPage;
