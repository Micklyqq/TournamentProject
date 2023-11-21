import React, { useState } from "react";
import "../css/commands.css";
import Profile from "../components/Profile";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";
import CommandsList from "../components/CommandsList";
import CreateNewCommand from "../components/CreateNewCommand";

function CommandsPage() {
  const [modalActive, setModalActive] = useState(false);
  const commands = useSelector((state) => state.commands);
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
            <div
              className="create_command"
              onClick={() => setModalActive(true)}
            >
              Создать команду
            </div>
          </form>
          <div className="commands_list">
            {commands && commands.length > 0 && (
              <CommandsList commands={commands} />
            )}
          </div>
        </section>
        <Profile />
      </main>
      <Modal active={modalActive} setActive={setModalActive}>
        <CreateNewCommand />
      </Modal>
    </>
  );
}

export default CommandsPage;
