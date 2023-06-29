import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CommandsPage from "./pages/CommandsPage";
import TournamentPage from "./pages/TournamentsPage";
import Layout from "./components/Layout";
import CabinetPage from "./pages/CabinetPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="tournaments" element={<TournamentPage />} />
          <Route path="commands" element={<CommandsPage />} />
          <Route path="cabinet" element={<CabinetPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
