import React from "react";
import TournamentBlock from "./TournamentBlock";

function TournamentsList({ tournaments, maxDisplay }) {
  if (maxDisplay > 0) {
    tournaments = tournaments.slice(0, maxDisplay);
  }

  return (
    <>
      {tournaments.map((tournament) => (
        <TournamentBlock
          key={tournament.id}
          tournament={tournament}
          tournamentId={tournament.id}
        />
      ))}
    </>
  );
}

export default TournamentsList;
