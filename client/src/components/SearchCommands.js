import React from "react";
import "../css/commands.css";

function SearchCommands() {
  return (
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
      <button type="submit" className="create_command">
        Создать команду
      </button>
    </form>
  );
}

export default SearchCommands;
