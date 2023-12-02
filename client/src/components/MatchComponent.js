import React, {useState} from "react";
import {matchResultUpdate} from "../api/matchApi";

function MatchComponent({ matches,setWinner,winner,isOwner }) {
    const [winnerTeam, setWinnerTeam] = useState(null);

    const setResult = async (matchId,winnerTeam) => {
        try {
            if (!winnerTeam) {
                console.error('Выберите победителя!');
                return;
            }

            await matchResultUpdate(matchId, winnerTeam).then(()=>setWinner(!winner))

        } catch (error) {
            console.error('Error updating match result:', error);

        }
    };

   if(isOwner===true){
       return(
           <>
               {matches.map((match) => {
                   if (match.winnerTeamId===null){
                       return(
                           <div className="match" key={match.id}>
                               <div className="team One">
                                   <div className="teamInfo">
                                       <div className="teamLogo">
                                           <img src={process.env.REACT_APP_API_URL + match.teams[0].logo} alt={match.teams[0].name} />
                                       </div>
                                       <div className="teamName">{match.teams[0].name}</div>
                                   </div>
                                   <div className="winButton" onClick={() => setResult(match.id,match.teams[0].id)}>
                                       Победил
                                   </div>
                               </div>
                               <div className="versus">VS</div>
                               <div className="team Two">
                                   <div className="teamInfo">
                                       <div className="teamLogo">
                                           <img src={process.env.REACT_APP_API_URL + match.teams[1].logo} alt={match.teams[1].name} />
                                       </div>
                                       <div className="teamName">{match.teams[1].name}</div>
                                   </div>
                                   <div className="winButton" onClick={() => setResult(match.id,match.teams[1].id)}>
                                       Победил
                                   </div>
                               </div>
                           </div>
                       )
                   }
                   else if(match.winnerTeamId === match.teams[0].id){
                       return (
                           <div className="match" key={match.id}>
                               <div className="team One Winner">
                                   <div className="teamInfo">
                                       <div className="teamLogo">
                                           <img src={process.env.REACT_APP_API_URL + match.teams[0].logo} alt={match.teams[0].name} />
                                       </div>
                                       <div className="teamName">{match.teams[0].name}</div>
                                   </div>
                               </div>
                               <div className="versus">VS</div>
                               <div className="team Two">
                                   <div className="teamInfo">
                                       <div className="teamLogo">
                                           <img src={process.env.REACT_APP_API_URL + match.teams[1].logo} alt={match.teams[1].name} />
                                       </div>
                                       <div className="teamName">{match.teams[1].name}</div>
                                   </div>
                               </div>
                           </div>
                       )
                   }
                   else if(match.winnerTeamId === match.teams[1].id){
                       return (
                           <div className="match" key={match.id}>
                               <div className="team One">
                                   <div className="teamInfo">
                                       <div className="teamLogo">
                                           <img src={process.env.REACT_APP_API_URL + match.teams[0].logo} alt={match.teams[0].name} />
                                       </div>
                                       <div className="teamName">{match.teams[0].name}</div>
                                   </div>
                               </div>
                               <div className="versus">VS</div>
                               <div className="team Two Winner">
                                   <div className="teamInfo">
                                       <div className="teamLogo">
                                           <img src={process.env.REACT_APP_API_URL + match.teams[1].logo} alt={match.teams[1].name} />
                                       </div>
                                       <div className="teamName">{match.teams[1].name}</div>
                                   </div>
                               </div>
                           </div>
                       )
                   }
               })}
           </>
       )
   }
    else if(isOwner===false){
        return(
            <>
                {matches.map((match) => {
                     if(match.winnerTeamId === match.teams[0].id){
                        return (
                            <div className="match" key={match.id}>
                                <div className="team One Winner">
                                    <div className="teamInfo">
                                        <div className="teamLogo">
                                            <img src={process.env.REACT_APP_API_URL + match.teams[0].logo} alt={match.teams[0].name} />
                                        </div>
                                        <div className="teamName">{match.teams[0].name}</div>
                                    </div>
                                </div>
                                <div className="versus">VS</div>
                                <div className="team Two">
                                    <div className="teamInfo">
                                        <div className="teamLogo">
                                            <img src={process.env.REACT_APP_API_URL + match.teams[1].logo} alt={match.teams[1].name} />
                                        </div>
                                        <div className="teamName">{match.teams[1].name}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    else if(match.winnerTeamId === match.teams[1].id){
                        return (
                            <div className="match" key={match.id}>
                                <div className="team One">
                                    <div className="teamInfo">
                                        <div className="teamLogo">
                                            <img src={process.env.REACT_APP_API_URL + match.teams[0].logo} alt={match.teams[0].name} />
                                        </div>
                                        <div className="teamName">{match.teams[0].name}</div>
                                    </div>
                                </div>
                                <div className="versus">VS</div>
                                <div className="team Two Winner">
                                    <div className="teamInfo">
                                        <div className="teamLogo">
                                            <img src={process.env.REACT_APP_API_URL + match.teams[1].logo} alt={match.teams[1].name} />
                                        </div>
                                        <div className="teamName">{match.teams[1].name}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </>
        )
    }
}

export default MatchComponent;
