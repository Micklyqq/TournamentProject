import React from "react";
import "../css/commands.css";

function Command_block() {
  return (
    <div class="command_block">
      <div class="command_image">
        <img src="img/Sectet_big.png" alt="" />
        <p>Rating:10900</p>
      </div>
      <div class="command_info">
        <h2>Team Secret</h2>
        <p>Количество игроков: 8 из 10</p>
        <p>Игры: DOTA2/CS:GO/LEAGUE OF LEGENDS</p>
        <p>Набор: открыт</p>

        <div>
          <div class="button_command_info">
            <a href="#">
              <p>Подать заявку на вступление</p>
            </a>
          </div>
          <div class="button_command_info">
            <a href="commands_in.html">
              <p>Перейти к команде</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Command_block;
