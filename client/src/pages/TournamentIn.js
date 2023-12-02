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
  const {id} = useParams();
  useEffect(() => {
    getOneTournament(id).then((data) => setTournament(data));
    findAllTournamentMembers(id).then((data)=>setMembers(data));



  }, []);

  useEffect(() => {
    getAllMatchesForTournament(id).then((data)=>setMatches(data));
  }, [winner]);



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
              <img src={process.env.REACT_APP_API_URL + tournament.logo} alt=""/>
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

              <p>{tournament?.description}</p>
            </div>
              <h2>Команды</h2>
              <div className="command_list_body">
                {members&&members.length>0&&members.map((member,index)=>(
                    <div className="command_list_element" key={index}>
                      <h3>{member.name}</h3>
                      <img src={process.env.REACT_APP_API_URL+member.logo} alt=""/>
                      <div className="command_button">
                        <a href="#">
                          <p>Перейти к команде</p>
                        </a>
                      </div>
                    </div>
                ))}
              </div>
            <div className="matchList">
              <h2>Матчи</h2>
              <MatchComponent matches={matches} setWinner={setWinner} winner={winner} isOwner={false}/>
            </div>
          </section>
          <Authorization/>
        </main>
    );

}

export default TournamentIn;
