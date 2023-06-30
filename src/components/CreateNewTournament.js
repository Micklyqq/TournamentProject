import React, { useState } from "react";
import * as actions from "../store/actions";
import { useDispatch } from "react-redux";

function CreateNewTournament() {
  const [formData, setFormData] = useState({
    tournamentName: "",
    tournamentDescription: "",
    tournamentCommandNumber: "4",
    tournamentGame: "Dota2",
    tournamentFormat: "Double-elimination",
    tournamentStartDate: "",
    tournamentEndDate: "",
    tournamentPrizeFund: "",
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
    dispatch(actions.addTournament(formData));
  }

  return (
    <>
      <p className="tournamentModalHeader">Создание турнира</p>
      <form className="tournamentCreateFrom" onSubmit={handleTournamentSubmit}>
        <div className="tournamentCreate">
          <div className="aboutColumn">
            <label>Название турнира</label>
            <label>Описание турнира</label>
            <label>Число команд</label>
            <label>Игра</label>
            <label>Формат турнира</label>
            <label>Дата начала</label>
            <label>Дата конца</label>
            <label>Призовой фонд</label>
          </div>
          <div className="inputInformation">
            <input
              type="text"
              name="tournamentName"
              value={formData.tournamentName}
              onChange={handleInputChange}
              required
            ></input>

            <input
              type="text"
              name="tournamentDescription"
              value={formData.tournamentDescription}
              onChange={handleInputChange}
              required
            ></input>

            <select
              name="tournamentCommandNumber"
              value={formData.tournamentCommandNumber}
              onChange={handleInputChange}
              required
            >
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="32">32</option>
            </select>

            <select
              className="selectGame"
              name="tournamentGame"
              value={formData.tournamentGame}
              onChange={handleInputChange}
            >
              <option value="Dota2">Dota2</option>
              <option value="CS:GO">CS:GO</option>
              <option value="League Of Legends">League Of Legends</option>
            </select>
            <select
              name="tournamentFormat"
              value={formData.tournamentFormat}
              onChange={handleInputChange}
            >
              <option value="Double-elimanion">Double-elimanion</option>
            </select>
            <input
              type="date"
              name="tournamentStartDate"
              value={formData.tournamentStartDate}
              onChange={handleInputChange}
              required
            ></input>
            <input
              type="date"
              name="tournamentEndDate"
              value={formData.tournamentEndDate}
              onChange={handleInputChange}
              required
            ></input>
            <input
              type="text"
              name="tournamentPrizeFund"
              value={formData.tournamentPrizeFund}
              onChange={handleInputChange}
              required
            ></input>
          </div>
        </div>
        <button className="createTournamentButton" type="submit">
          Создать
        </button>
      </form>
    </>
  );
}

export default CreateNewTournament;
