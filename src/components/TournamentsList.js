import React from "react";
import TournamentBlock from "./TournamentBlock";

function TournamentsList({ tournaments }) {
  if (tournaments.length)
    return (
      <div className="tournaments_list">
        {tournaments.map((tournament) => (
          <TournamentBlock
            key={tournament.id}
            tournament={tournament}
            tournamentId={tournament.id}
          />
        ))}
      </div>
    );
}

export default TournamentsList;
