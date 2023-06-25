import React from "react";
import "../css/commands.css";

function Search_commands() {
  return (
    <form
      action="#"
      method="post"
      enctype="multipart/form-data"
      class="commands_search"
    >
      <input
        type="text"
        name="search"
        placeholder="Введите название команды или её id"
      />
      <button type="submit" class="button_search">
        Поиск
      </button>
      <button type="submit" class="create_command">
        Создать команду
      </button>
    </form>
  );
}

export default Search_commands;
