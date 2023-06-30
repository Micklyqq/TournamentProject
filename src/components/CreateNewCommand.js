import React, { useState } from "react";
import * as actions from "../store/actions";
import { useDispatch } from "react-redux";

function CreateNewTournament() {
  const [formData, setFormData] = useState({
    commandName: "",
    commandDescription: "",
    commandGame: "Dota2",
    commandCountry: "",
  });
  const dispatch = useDispatch();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleTournamentSubmit(e) {
    e.preventDefault();
    dispatch(actions.addCommand(formData));
  }

  return (
    <>
      <p className="tournamentModalHeader">Создание команды</p>
      <form className="tournamentCreateFrom" onSubmit={handleTournamentSubmit}>
        <div className="tournamentCreate">
          <div className="aboutColumn">
            <label>Название команды</label>
            <label>Описание команды</label>
            <label>Игры</label>
            <label>Страна</label>
          </div>
          <div className="inputInformation">
            <input
              type="text"
              name="commandName"
              value={formData.commandName}
              onChange={handleInputChange}
              required
            ></input>

            <input
              type="text"
              name="commandDescription"
              value={formData.commandDescription}
              onChange={handleInputChange}
              required
            ></input>

            <select
              className="selectGame"
              name="commandGame"
              value={formData.commandGame}
              onChange={handleInputChange}
            >
              <option value="Dota2">Dota2</option>
              <option value="CS:GO">CS:GO</option>
              <option value="League Of Legends">League Of Legends</option>
            </select>
            <input
              type="text"
              name="commandCountry"
              value={formData.commandCountry}
              onChange={handleInputChange}
              required
            ></input>
          </div>
        </div>
        <button className="createCommandButton" type="submit">
          Создать
        </button>
      </form>
    </>
  );
}

export default CreateNewTournament;
