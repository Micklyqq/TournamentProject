import React, {useEffect, useState} from "react";
import "../css/commands.css";
import { Link } from "react-router-dom";
import {COMMAND_ROUTE} from "../utils/consts";
import {UserStore} from "../store/UserStore";
import {findAllTeammates, getOneTeam} from "../api/commandApi";
import {Spinner} from "react-bootstrap";


function CommandBlock({ command }) {
    const [teammates,setTeammates] = useState({})

    useEffect(() => {
        findAllTeammates(command.id).then((data)=>setTeammates(data))

    }, []);


  const { id, name,logo } = command;
  return (
    <div className="command_block">
      <div className="command_image">
        <img src={process.env.REACT_APP_API_URL+logo} alt="" />
      </div>
      <div className="command_info">
        <h2>{name}</h2>
        <p>Количество игроков: {teammates.length} из 5</p>

        <div>
          <div className="button_command_info" >
              <p>Подать заявку на вступление</p>
          </div>
          <div className="button_command_info">
            <Link to={COMMAND_ROUTE+`/${id}`}>
              <p>Перейти к команде</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommandBlock;
