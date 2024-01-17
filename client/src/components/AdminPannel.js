import { useState } from "react";
import "../css/adminPannel.css";
import AdminPannelUser from "./AdminPannelUser";
import AdminPannelTeams from "./AdminPannelTeams";
import AdminPannelTournaments from "./AdminPannelTournaments";

const AdminPannel = () => {
  const [toggle, setToggle] = useState(1);
  return (
    <div className="adminPannel">
      {(() => {
        switch (toggle) {
          case 1:
            return (
              <>
                <div
                  className="adminPannelElement"
                  onClick={() => setToggle(2)}
                >
                  Пользователи
                </div>
                <div
                  className="adminPannelElement"
                  onClick={() => setToggle(3)}
                >
                  Команды
                </div>
                <div
                  className="adminPannelElement"
                  onClick={() => setToggle(4)}
                >
                  Турниры
                </div>
              </>
            );
          case 2:
            return <AdminPannelUser toggle={toggle} setToggle={setToggle} />;
          case 3:
            return <AdminPannelTeams toggle={toggle} setToggle={setToggle} />;
          case 4:
            return (
              <AdminPannelTournaments toggle={toggle} setToggle={setToggle} />
            );
          default:
            return null; // Можете добавить какую-то заглушку для других случаев
        }
      })()}
    </div>
  );
};

export default AdminPannel;
