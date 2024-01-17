import { useState, useEffect } from "react";
import { getData, updateUser } from "../api/userApi";
import "../css/TeamNotificationComponent.css";
import defaultLogo from "../img/defaultLogo.png";
import { getOneTeam, joinTeam } from "../api/commandApi";
import {
  deleteTeamNotification,
  deleteTournamentNotification,
} from "../api/notificationApi";
import { jointTournament } from "../api/tournamentApi";

export const TournamentNotificationComponent = ({ notification }) => {
  const [team, setTeam] = useState({});
  const Accept = async () => {
    const formData = new FormData();

    await jointTournament(notification.tournamentId, notification.teamId).then(
      () => deleteTournamentNotification(notification.id)
    );
  };

  const Decline = async () => {
    await deleteTournamentNotification(notification.id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOneTeam(notification.teamId);
        setTeam(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();

    return () => {};
  }, [notification.userId]);

  return (
    <div className="notificationBlock">
      <div className="userAvatar">
        <img src={process.env.REACT_APP_API_URL + team.logo} />
        <p>{team.name}</p>
      </div>
      <div className="userName"></div>
      <div className="acceptButton" onClick={Accept}>
        Принять
      </div>
      <div className="declineButton" onClick={Decline}>
        Отклонить
      </div>
    </div>
  );
};
