import defaultLogo from "../static/8dd98655-043f-401e-b331-0b4e1bf1f647.png";
import changeIcon from "../static/change.svg";
import React, {useEffect, useState} from "react";
import {UserStore} from "../store/UserStore";
import {findAllTeammates, getOneTeam, updateTeam} from "../api/commandApi";
import {updateUser} from "../api/userApi";
import {jwtDecode} from "jwt-decode";
import "../css/teamManagement.css"
import {Link} from "react-router-dom";
import {COMMAND_CREATE} from "../utils/consts";
import {getAllTeamNotification} from "../api/notificationApi";
import { TeamNotificationComponent} from "./TeamNotificationComponent";


function TeamManagement(){
    const user = UserStore(state=>state._user);
    const [notification,setNotification] = useState([]);
    const [team,setTeam] = useState({});
    const [teammates,setTeammates] = useState({})
    useEffect(() => {
        if (user.teamOwner !== null) {
            getOneTeam(user.teamOwner)
                .then((data) => {
                    setTeam(data);
                    return getAllTeamNotification(data.id);
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
        if (team.id) {
            findAllTeammates(team.id)
                .then((data) => setTeammates(data))
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }, [team.id]);

    const [logo,setLogo] = useState(null);
    const [name,setName] = useState(null);
    const [nameInput,setNameInput] = useState(false)





    const changeTeam = async ()=>{
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


    }
    return(
        user.teamOwner?(
            <div className="TeamBlock">
                <div className="avatarTeam">
                    <div className="avatar">
                        <img src={team.logo?(process.env.REACT_APP_API_URL+team.logo):defaultLogo}/>
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
                    Название: {team.name?team.name:"defaultName"}
                    <div className="changeIcon">

                        <img src={changeIcon} onClick={()=>{
                            setNameInput(!nameInput);
                            setName(null);
                        }}/>

                        {nameInput?(<input id="name_input" type='text' onChange={e=>setName(e.target.value)}/>):false}
                    </div>
                </div>
                {(logo||name)?(
                    <div className="submitButton" onClick={changeTeam}>
                        Применить изменения
                    </div>
                ):false}
                    <h2>Состав </h2>
                    <table className="team_composition_management">
                        <tbody>
                        <tr>
                            <td>Игрок</td>
                            <td>Позиция</td>
                            <td>Возраст</td>
                            <td>Принят</td>
                        </tr>
                        {teammates && teammates.length > 0 && teammates.map((item) => (
                            <tr key={item.id}> {/* Добавлен key для каждого элемента в массиве */}
                                <td>
                                    <div>
                                        <img src={item.logo ? process.env.REACT_APP_API_URL + item.logo : defaultLogo} alt="" />
                                        <div>
                                            <p>{item.userName ? item.userName : "defaultName"}</p> {/* Использование item.userName вместо teammates.userName */}
                                        </div>
                                    </div>
                                </td>
                                <td>Оффлейнер</td>
                                <td>25</td>
                                <td>03.11.2021</td>
                            </tr>
                        ))}

                        </tbody>
                    </table>
                <div className="Notifications">
                    <p>Уведомления:</p>
                    {notification&&notification.length>0&& notification.map((item, index) => (
                        <TeamNotificationComponent key={index} notification={item} />
                    ))}
                </div>
            </div>
        ):(<>
            <p>У вас нет команды, но вы можете ее создать!</p>
                <Link to={COMMAND_CREATE}>
                    <div className="submitButton">Создать команду</div>
                </Link>
            </>
        )



    )
}

export default TeamManagement;