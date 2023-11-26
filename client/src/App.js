import React, {useEffect, useState} from "react";
import Layout from "./components/Layout";
import {UserStore} from "./store/UserStore";
import {check} from "./api/userApi";
import {AppRouter} from "./components/AppRouter";
import {getAllGames} from "./api/tournamentApi";
import {TournamentStore} from "./store/TournamentStore";
import {Spinner} from "react-bootstrap";

function App() {
  const user = UserStore(state=>state._user)
  const isAuth = UserStore(state=>state._isAuth)
  const setAuth = UserStore(state=>state.setIsAuth)
  const setUser = UserStore(state=>state.setUser)
  const setGame = TournamentStore(state=>state.setGame)
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    getAllGames().then((data)=>setGame(data));
    check().then(data=>{
      if(data){
        setUser(true);
        setAuth(true);}
    }).finally(()=>setLoading(false));

  }, []);
  if(loading){
    return <Spinner animation={"grow"}/>
  }
  return (
    <>
      <Layout />
      <AppRouter/>
    </>
  );
}

export default App;
