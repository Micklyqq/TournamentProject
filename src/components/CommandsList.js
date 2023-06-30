import React from "react";
import CommandBlock from "./CommandBlock";

function TournamentsList({ commands }) {
  return (
    <>
      {commands.map((command) => (
        <CommandBlock key={command.id} command={command} />
      ))}
    </>
  );
}

export default TournamentsList;
