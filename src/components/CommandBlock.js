import React from "react";
import "../css/commands.css";
import { Link } from "react-router-dom";
import commandImage from "../img/Sectet_big.png";
function CommandBlock({ command }) {
  const { id, commandName, commandGame } = command;
  return (
    <div className="command_block">
      <div className="command_image">
        <img src={commandImage} alt="" />
        <p>Rating:10900</p>
      </div>
      <div className="command_info">
        <h2>{commandName}</h2>
        <p>Количество игроков: 0 из 10</p>
        <p>Игры: {commandGame}</p>
        <p>Набор: открыт</p>

        <div>
          <div className="button_command_info">
            <a href="#">
              <p>Подать заявку на вступление</p>
            </a>
          </div>
          <div className="button_command_info">
            <Link to={`/commands/${id}`}>
              <p>Перейти к команде</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommandBlock;
