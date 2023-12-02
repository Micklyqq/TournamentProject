import React, {useEffect, useState} from "react";
import "../css/profilePage.css";
import ProfileManagement from "../components/ProfileManagement";
import TeamManagement from "../components/TeamManagement";
import TournamentManagement from "../components/TournamentManagement";




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
                        case 2:
                            return <TournamentManagement/>
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