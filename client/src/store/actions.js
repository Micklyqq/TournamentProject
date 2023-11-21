import * as actions from "./actionTypes";

export const addCommand = (command) => ({
  type: actions.COMMAND_ADD,
  payload: command,
});

export const addTournament = (tournament) => ({
  type: actions.TOURNAMENT_ADD,
  payload: tournament,
});
