import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CommandsPage from "./pages/CommandsPage";
import TournamentPage from "./pages/TournamentsPage";
import Layout from "./components/Layout";
import CabinetPage from "./pages/CabinetPage";
import TournamentIn from "./pages/TournamentIn";
import CommandIn from "./pages/CommandIn";
import {UserStore} from "./store/UserStore";
import {check} from "./api/userApi";

function App() {
  const user = UserStore(state=>state._user)
  const isAuth = UserStore(state=>state._isAuth)
  const setAuth = UserStore(state=>state.setIsAuth)
  const setUser = UserStore(state=>state.setUser)
  useEffect(() => {
    check().then(data=>{
      if(data){
        setUser(true);
        setAuth(true);}

    })
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="tournaments/" element={<TournamentPage />} />
          <Route path="tournaments/:id" element={<TournamentIn />} />
          <Route path="commands" element={<CommandsPage />} />
          <Route path="commands/:id" element={<CommandIn />} />
          <Route path="cabinet" element={<CabinetPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
