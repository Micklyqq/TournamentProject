import defaultLogo from "../static/8dd98655-043f-401e-b331-0b4e1bf1f647.png";
import changeIcon from "../static/change.svg";
import React, {useEffect, useState} from "react";
import {UserStore} from "../store/UserStore";
import "../css/tournamentManagement.css"
import {Link} from "react-router-dom";
import {CREATE_TOURNAMENT} from "../utils/consts";
import { getAllTournamentNotification} from "../api/notificationApi";
import {findAllTournamentMembers, getOneTournament} from "../api/tournamentApi";
import {TournamentNotificationComponent} from "./TournamentNotificationComponent";
import {createTournamentBracket, getAllMatchesForTournament} from "../api/matchApi";
import MatchComponent from "./MatchComponent";


function TournamentManagement(){
    const user = UserStore(state=>state._user);
    const [notification,setNotification] = useState([]);
    const [tournament,setTournament] = useState({});
    const [members,setMembers] = useState({})
    const [matches,setMatches] = useState([]);
    const [winner,setWinner] = useState(false);
    useEffect(() => {
        if (user.tournamentOwner !== null) {
            getOneTournament(user.tournamentOwner)
                .then((data) => {
                    setTournament(data);
                    return getAllTournamentNotification(data.id);
                })
                .then((notificationData) => {
                    setNotification(notificationData);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }, []);

   useEffect(() => {
        if (tournament.id) {
            findAllTournamentMembers(tournament.id)
                .then((data) => setMembers(data))
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }, [tournament.id]);

    useEffect(() => {
        if (user.tournamentOwner !== null) {
        getAllMatchesForTournament(user.tournamentOwner).then((data)=>setMatches(data));}
    }, [winner]);

   const createMatches = async ()=>{
       await createTournamentBracket(tournament.id,members);
   }

    const [logo,setLogo] = useState(null);
    const [name,setName] = useState(null);
    const [nameInput,setNameInput] = useState(false)





        /* const changeTeam = async ()=>{
        const formData = new FormData();

        formData.append("logo",logo);
        formData.append("name",name)
        formData.append("id",team.id)
        await updateTeam(formData).then((data)=>{
            setLogo(null);
            setName(null);
            setNameInput(!nameInput);
            setTeam(data);
        }).catch((e)=>console.error(e));


    }*/
    return(
        user.tournamentOwner?(
            <div className="TeamBlock">
                <div className="avatarTeam">
                    <div className="avatar">
                        <img src={tournament.logo?(process.env.REACT_APP_API_URL+tournament.logo):defaultLogo}/>
                    </div>
                    <div className="changeIcon">
                        <label htmlFor="logo_input">
                            <img src={changeIcon}/>
                        </label>
                        <input id="logo_input" type='file' onChange={e=>{
                            setLogo(e.target.files[0]);
                        }}/>
                    </div>
                </div>
                <div className="teamName">
                    Название: {tournament.name?tournament.name:"defaultName"}
                    <div className="changeIcon">

                        <img src={changeIcon} onClick={()=>{
                            setNameInput(!nameInput);
                            setName(null);
                        }}/>

                        {nameInput?(<input id="name_input" type='text' onChange={e=>setName(e.target.value)}/>):false}
                    </div>
                </div>
                {(logo||name)?(
                    <div className="submitButton">
                        Применить изменения
                    </div>
                ):false}
                <h2>Состав </h2>
                <table className="team_composition_management">
                    <tbody>
                    <tr>
                        <td>Команда</td>
                    </tr>

            {members && members.length > 0 && members.map((item) => (
    <tr key={item.id}>
        <td>
            <div>
                <img src={item.logo ? process.env.REACT_APP_API_URL + item.logo : defaultLogo} alt="" />
                <div>
                    <p>{item.name ? item.name : "defaultName"}</p>
                </div>
            </div>
        </td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
))}
                    </tbody>
                </table>
               <div className="tournamentGrid">
                   <p>Турнирная сетка:</p>
                   <div className="generateButton" onClick={createMatches}>Сгенерировать турнирную сетку</div>
                   <MatchComponent matches={matches} setWinner={setWinner} winner={winner} isOwner={true}/>

               </div>
                <div className="Notifications">
                    <p>Уведомления:</p>
                    {notification&&notification.length>0&& notification.map((item, index) => (
                        <TournamentNotificationComponent key={index} notification={item} />
                    ))}
                </div>


            </div>


        ):(<>
                <p>У вас нет турнира, но вы можете его создать!</p>
                <Link to={CREATE_TOURNAMENT}>
                    <div className="submitButton">Создать турнир</div>
                </Link>
            </>
        )


    );






}

export default TournamentManagement;