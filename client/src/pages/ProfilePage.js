import React, {useEffect, useState} from "react";
import "../css/profilePage.css";
import {UserStore} from "../store/UserStore";
import changeIcon from "../static/change.svg"
import defaultLogo from "../static/8dd98655-043f-401e-b331-0b4e1bf1f647.png";
import {updateUser} from "../api/userApi";
import {jwtDecode} from "jwt-decode";
import ProfileManagement from "../components/ProfileManagement";
import TeamManagement from "../components/TeamManagement";
import {getOneTeam} from "../api/commandApi";
import {getAllTeamNotification} from "../api/notificationApi";




function ProfilePage() {

    const [toggle,setToggle] = useState(1);
    console.log(toggle);



    return (



        <main className="profileMain">
        <div className="buttonsBlockProfile">
            <div onClick={()=>setToggle(1)}>Профиль</div>
            <div onClick={()=>setToggle(2)}>Управление турнирами</div>
            <div onClick={()=>setToggle(3)}>Управление командами</div>
        </div>
            <div className="infoBlock">
                {(() => {
                    switch (toggle) {
                        case 1:
                            return <ProfileManagement />;
                        case 3:
                            return <TeamManagement />;
                        default:
                            return null; // Можете добавить какую-то заглушку для других случаев
                    }
                })()}
            </div>
        </main>
    );
}

export default ProfilePage;