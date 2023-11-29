import React, {useState} from "react";
import {Link, Navigate} from "react-router-dom";
import {COMMAND_ROUTE} from "../utils/consts";
import {createTeam, getTeams} from "../api/commandApi";
import {UserStore} from "../store/UserStore";
import {forEach} from "react-bootstrap/ElementChildren";
import {CommandStore} from "../store/CommandStore";


export const CreateCommand=()=>{
    const user= UserStore(state=>state._user)
    const[name,setName] = useState('');
    const[description,setDescription] = useState('');
    const[file,setFile] = useState(null);
    const commands = CommandStore(state => state._commands);


    const addTeam=()=>{


          if(user.teamOwner===null){
              const formData = new FormData();
              formData.append("name",name);
              formData.append("description",description);
              formData.append("logo",file);
              formData.append("userId",user.id);
              createTeam(formData).then((data)=><Link to={COMMAND_ROUTE+data.id}/>)
          }
          else{
              alert("Вы не можете создать больше 1 команды!")
          }
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