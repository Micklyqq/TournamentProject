import React, {useEffect, useState} from "react";
import "../css/tournaments_in.css";
import { useParams } from "react-router-dom";
import liquidLogo from "../img/Liquid.png";
import Authorization from "../components/Authorization";
import {TournamentStore} from "../store/TournamentStore";
import {findAllTournamentMembers, getOneTournament} from "../api/tournamentApi";
import {
  createTournamentNotification,
  getOneTournamentNotification
} from "../api/notificationApi";
import {UserStore} from "../store/UserStore";
import {getAllMatchesForTournament} from "../api/matchApi";
import MatchComponent from "../components/MatchComponent";

function TournamentIn() {
  const user = UserStore(state=>state._user);
  const [tournament, setTournament] = useState({});
  const [members,setMembers] = useState([]);
  const [matches,setMatches] = useState([]);
  const [winner,setWinner] = useState(false);
  const [startBracket,setStartBracket] = useState([]);
  const [winnerBracket,setWinnerBracket] = useState([]);
  const [loserBracket,setLoserBracket] = useState([]);
  const [final,setFinal] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    getOneTournament(id).then((data) => setTournament(data));
    findAllTournamentMembers(id).then((data)=>setMembers(data));



  }, []);

  useEffect(() => {
    getAllMatchesForTournament(id).then((data)=>setMatches(data));
  }, []);

  useEffect(() => {
    if(matches.length>0){
      setStartBracket(matches.filter((match) =>match.grid === "startBracket" || match.grid==="startBracketEnd"));
      setWinnerBracket(matches.filter((match) =>match.grid === "winnerBracket")) ;
      setLoserBracket(matches.filter((match) =>match.grid === "loserBracket"))  ;
      setFinal(matches.filter((match) =>match.grid === "final"))
    }
  }, [matches]);


  const Click = async () => {
    try {
      if(members&&members.length<tournament.size){
      const notificationData = await getOneTournamentNotification(tournament.id, user.teamOwner);
      if (notificationData === null) {
        await createTournamentNotification(tournament.id, user.teamOwner);
        alert("Заявка была подана!");
      } else {
        alert("Вы уже подали заявку!");
      }
      }
      else{alert("Турнир уже набрал достаточное количество команд!")}
    } catch (error) {

      console.error(error);
    }}

    return (
        <main>
          <section className="tournament_info">
            <h1 className="header1">{tournament?.name}</h1>
            <div className="image_info">
              <div className="tournament_logo">
                <img src={process.env.REACT_APP_API_URL + tournament.logo} alt=""/>
              </div>
              <div className="image_info_text">
                <div className="image_info_1">
                  <p>Дата начала:</p>
                  <p>Призовой фонд:</p>
                </div>
                <div className="image_info_2">
                  <p>{tournament?.date}</p>
                  <p>{tournament?.prize}</p>
                </div>
              </div>
            </div>
            <div className="info_big">
              {(members&&members.length<5)?
                  (<div className="applyToJoinButton" onClick={Click}>Подать заявку на вступление</div>)
                  :(<div className="commandIsFull">Вы не можете подать заявку</div>)}
              <h2>Описание</h2>
              <p>{tournament?.description}</p>
            </div>
              <h2>Команды</h2>
            {members.length===0&&(
                <p className="blank_info">К турниру еще не присоединилась ни одна команда!</p>
            )}
              <div className="command_list_body">

                {members&&members.length>0&&members.map((member,index)=>(
                    <div className="command_list_element" key={index}>

                      <div className="team_image"><img src={process.env.REACT_APP_API_URL+member.logo} alt=""/></div>
                      <h3>{member.name}</h3>
                      <div className="command_button">
                        <a href="#">
                          <p>Перейти к команде</p>
                        </a>
                      </div>
                    </div>
                ))}
              </div>
            <div className="matchList">
              <div className="tournamentGrid">
                <h2>Турнирная сетка:</h2>
                {startBracket.length===0&&(
                    <p className="blank_info">Турнирная сетка еще не сформированна!</p>
                )}
                {startBracket&&startBracket.length>0&&(

                  <div className="startGrid">
                    <h3>Начальная сетка:</h3>
                  <MatchComponent matches={startBracket} setWinner={setWinner} winner={winner} isOwner={false}/>
            </div>)
                }
                {winnerBracket&&winnerBracket.length>0&&(
                    <div className="winnerGrid">
                      <h3>Сетка винеров:</h3>
                      <MatchComponent matches={winnerBracket} setWinner={setWinner} winner={winner} isOwner={false}/>
                    </div>
                )}
                {loserBracket&&loserBracket.length>0&&(
                    <div className="loserGrid">
                      <h3>Сетка лузеров:</h3>
                      <MatchComponent matches={loserBracket} setWinner={setWinner} winner={winner} isOwner={false}/>
                    </div>
                )}
                {final&&final.length>0&&(
                    <div className="finalGrid">
                      <h3>Финал:</h3>
                      <MatchComponent matches={final} setWinner={setWinner} winner={winner} isOwner={false}/>
                    </div>
                )}


              </div>
            </div>
          </section>
          <Authorization/>
        </main>
    );

}

export default TournamentIn;
