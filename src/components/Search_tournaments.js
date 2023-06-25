import React from "react";
import "../css/tournaments.css";

function Search_tournaments() {
  return (
    <form
      action="#"
      method="post"
      enctype="multipart/form-data"
      class="tournaments_search"
    >
      <input
        type="text"
        name="search"
        placeholder="Введите название турнира или его id"
      ></input>
      <button type="submit" class="button_search">
        Поиск
      </button>
      <button type="submit" class="create_tournament">
        Создать турнир
      </button>
    </form>
  );
}

export default Search_tournaments;
