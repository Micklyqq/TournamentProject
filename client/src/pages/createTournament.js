import "../css/createTournament.css";
import React, { useState} from "react";
import {createTournament} from "../api/tournamentApi";
import {TournamentStore} from "../store/TournamentStore";
import {v4 as uuidv4} from "uuid";
import { Navigate } from 'react-router-dom';
import {TOURNAMENT_ROUTE} from "../utils/consts";


export const CreateTournament=()=>{
    const games = TournamentStore(state=>state._games);
    const setGameData = TournamentStore(state=>state.setGame)
    const[name,setName] = useState('');
    const[description,setDescription] = useState('');
    const[game,setGame] = useState(games[0].id);
    const[date,setDate] = useState("");
    const[prize,setPrize] = useState(0);
    const[file,setFile] = useState(null);
    const[size,setSize] = useState(4);





    const addTournament=()=>{
        const formData = new FormData();
        formData.append("name",name);
        formData.append("description",description);
        formData.append("date",date);
        formData.append("logo",file);
        formData.append("size",size);
        formData.append("prize",prize);
        formData.append("gameId",game);
        createTournament(formData).then((data)=><Navigate to={TOURNAMENT_ROUTE+data.id}/>)
    }

    return(
        <main>
    <section className="crateTournament">
            <form className="tournamentCreateFrom">

                <div className="tournamentHeader">
                <h1>Создание турнира</h1>
                </div>

                <h2>Название турнира</h2>

                <div className="tournamentName">
                    <input
                        value={name}
                        onChange={e=>setName(e.target.value)}
                        type="text"
                        id="tName"
                        name="tName"
                        placeholder="Введите название турнира"/>
                </div>

                <h2>Описание турнира</h2>
                    <textarea
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                        name="tDesc"
                        rows="10"
                        cols="80"/>

                    <h2>Выберите игру</h2>
                <div className="selectGame">
                    <select id="games" onChange={(e)=>setGame(e.target.value)} >
                        {games.map((item,index) => (

                            <option
                                key={uuidv4()}
                                value={item.id}
                            >{item.name}</option>

                        ))}
                    </select>
                </div>

                <h2>Дата начала</h2>
                <div className="selectDate">

                    <input
                        value={date}
                        onChange={e=>setDate(e.target.value)}
                        type="datetime-local"
                        name="date"
                        id="date"/>
                </div>
                <h2>Количество участников</h2>
                <div className="selectSize">
                    <select onChange={e=>setSize(e.target.value)}>
                        <option value={4} >4</option>
                        <option value={8} >8</option>
                        <option value={16} >16</option>
                        <option value={32} >32</option>
                    </select>
                </div>
                <h2>Укажите призовые</h2>
                <div className="inputPrize">
                    <input
                        type="number"
                        value={prize}
                        onChange={e=>setPrize(e.target.value)}/>
                </div>
                <h2>Выберите логтип</h2>
                <div className="inputLogo">
                    <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
                </div>
                <div className="createTournamentButton" onClick={addTournament}>Создать</div>
            </form>
    </section>
        </main>
    )
}