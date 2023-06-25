import React from "react";
import "../css/tournaments.css";
function Tournament_block() {
  return (
    <div class="tournament_block">
      <div class="tournament_image">
        <img src="img/International_big.png" alt="" />
        <p>Дата начала: 15 Окт 2022 </p>
        <p>Дата завершения: 30 Окт 2022</p>
        <p>Призовой фонд: $18 930 775 </p>
      </div>
      <div class="tournament_text">
        <h2>The International 2022 по Dota 2</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </div>
      <div class="tournament_go">
        <p>Игра: Dota2</p>
        <p>Число команд: 10</p>
        <p>Формат турнира: Double-elimanion</p>
        <a href="#">
          <div class="apply_for">
            <p>Подать заявку на участие</p>
          </div>
        </a>
        <a href="tournaments_in.html">
          <div class="go_to_tournament">
            <p>Перейти к турниру</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Tournament_block;
