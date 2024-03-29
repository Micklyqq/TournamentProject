import { useState, useEffect } from "react";
import { getData, updateUser } from "../api/userApi";
import "../css/TeamNotificationComponent.css";
import defaultLogo from "../img/defaultLogo.png";
import { joinTeam } from "../api/commandApi";
import { deleteTeamNotification } from "../api/notificationApi";

export const TeamNotificationComponent = ({ notification, hadleChildData }) => {
  const [user, setUser] = useState({});
  const Accept = async () => {
    const formData = new FormData();

    await joinTeam(user.id, notification.teamId).then(() =>
      deleteTeamNotification(notification.id)
    );
    hadleChildData(user.id);
  };

  const Decline = async () => {
    await deleteTeamNotification(notification.id);
    hadleChildData(user.id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(notification.userId);
        setUser(data);
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
        <img
          src={
            user.logo ? process.env.REACT_APP_API_URL + user.logo : defaultLogo
          }
        />
        <p>{user.userName ? user.userName : "defaultName"}</p>
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
