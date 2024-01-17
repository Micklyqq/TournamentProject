import { useEffect, useState } from "react";
import "../css/adminPannel.css";
import { UserStore } from "../store/UserStore";
import { deleteUser, getAllRoles, getUsers, giveRole } from "../api/userApi";
import PaginationAdminPannel from "./PaginationAdminPannel";
import Modal from "./Modal";
import defaultLogo from "../img/defaultLogo.png";

const AdminPannelUser = ({ toggle, setToggle }) => {
  const [loading, setLoading] = useState(true);
  const users = UserStore((state) => state._allUsers);
  const setUsers = UserStore((state) => state.setAllUsers);
  const page = UserStore((state) => state._page);
  const setPage = UserStore((state) => state.setPage);
  const totalCount = UserStore((state) => state._totalCount);
  const setTotalCount = UserStore((state) => state.setTotalCount);
  const limit = UserStore((state) => state._limit);
  const [activeDel, setActiveDel] = useState(false);
  const [choosenUser, setChoosenUser] = useState(null);
  const [refresh, setRefresh] = useState(null);
  const [activeGiveRole, setActiveGiveRole] = useState(false);
  const [roles, setRoles] = useState(null);
  const [pickRole, setPickRole] = useState(null);
  const [newRoles, setNewRoles] = useState(null);
  useEffect(() => {
    getUsers(1, 6)
      .then((data) => {
        setUsers(data.rows);
        setTotalCount(data.count);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    getUsers(page, 6)
      .then((data) => {
        setUsers(data.rows);
        setTotalCount(data.count);
      })
      .finally(() => setLoading(false));
  }, [page, refresh]);

  useEffect(() => {
    getAllRoles().then((data) => setRoles(data));
  }, []);

  const deleteUserAdmin = (userId) => {
    deleteUser(userId).then(() => setRefresh(userId));
    setActiveDel(false);
  };

  const handleNewRoles = (user) => {
    const newRoles = roles.filter(
      (role) => !user.roles.some((userRole) => userRole.id === role.id)
    );
    console.log(newRoles);
    setNewRoles(newRoles);
  };

  const giveNewRole = (userId, roleId) => {
    giveRole(userId, roleId);
    setActiveGiveRole(false);
  };

  if (loading) {
    return <div className="loading">Подождите,идёт загрузка...</div>;
  }
  return (
    <>
      <div className="backArrow" onClick={() => setToggle(1)}>
        {"<---"}
      </div>
      <div className="commandsAdmin_list">
        {users &&
          users.length > 0 &&
          users.map((user) => (
            <div className="commandAdmin_block" key={user.id}>
              <div className="commandAdmin_image">
                <img
                  src={
                    user.logo
                      ? process.env.REACT_APP_API_URL + user.logo
                      : defaultLogo
                  }
                  alt=""
                />
              </div>
              <h2>{user.email}</h2>
              <div className="adminCommands">
                <div
                  className="adminCommandsElem"
                  onClick={() => {
                    setActiveDel(true);
                    setChoosenUser(user.id);
                  }}
                >
                  Удалить
                </div>
                <div
                  className="adminCommandsElem"
                  onClick={() => {
                    setActiveGiveRole(true);
                    setChoosenUser(user);
                    handleNewRoles(user);
                  }}
                >
                  Выдать роль
                </div>
              </div>
            </div>
          ))}
      </div>

      <PaginationAdminPannel
        store={users}
        setPage={setPage}
        totalCount={totalCount}
        limit={limit}
        page={page}
      />

      <Modal active={activeDel} setActive={setActiveDel}>
        <p>Вы уверены,что хотите удалить команду?</p>
        <div className="delButtonsModal">
          <div
            className="yesModalDel"
            onClick={() => deleteUserAdmin(choosenUser)}
          >
            Да
          </div>
          <div className="noModalDel" onClick={() => setActiveDel(false)}>
            Нет
          </div>
        </div>
      </Modal>
      <Modal active={activeGiveRole} setActive={setActiveGiveRole}>
        <h2 className="giveRoleHeader">Выдача роли</h2>
        <div>
          <p className="giveRoleText">Список ролей пользователя</p>
          {choosenUser &&
            choosenUser.roles.map((item) => (
              <div className="userRoleList">{item.name}</div>
            ))}
          <h2>Выберите роль</h2>
          <div className="selectRole">
            <select id="roles" onChange={(e) => setPickRole(e.target.value)}>
              {newRoles &&
                newRoles.map((item, index) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
            <div
              className="giveRoleButton"
              onClick={() => giveNewRole(choosenUser.id, pickRole)}
            >
              Выдать
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AdminPannelUser;
