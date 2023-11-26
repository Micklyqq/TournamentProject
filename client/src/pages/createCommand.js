import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import {COMMAND_ROUTE} from "../utils/consts";
import {createTeam} from "../api/commandApi";


export const CreateCommand=()=>{

    const[name,setName] = useState('');
    const[description,setDescription] = useState('');
    const[file,setFile] = useState(null);


    const addTeam=()=>{
        const formData = new FormData();
        formData.append("name",name);
        formData.append("description",description);
        formData.append("logo",file);
        createTeam(formData).then((data)=><Navigate to={COMMAND_ROUTE+data.id}/>)
    }

    return(
        <main>
            <section className="crateTournament">
                <form className="tournamentCreateFrom">

                    <div className="tournamentHeader">
                        <h1>Создание команды</h1>
                    </div>

                    <h2>Название команды</h2>

                    <div className="tournamentName">
                        <input
                            value={name}
                            onChange={e=>setName(e.target.value)}
                            type="text"
                            id="tName"
                            name="tName"
                            placeholder="Введите название команды"/>
                    </div>

                    <h2>Описание команды</h2>
                    <textarea
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                        name="tDesc"
                        rows="10"
                        cols="80"/>
                    <h2>Выберите логтип</h2>
                    <div className="inputLogo">
                        <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
                    </div>
                    <div className="createTournamentButton" onClick={addTeam}>Создать</div>
                </form>
            </section>
        </main>
    )

}