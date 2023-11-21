import * as actions from "./actionTypes";
import { nanoid } from "nanoid";

export default function tournamentsReducer(state = [], action) {
  switch (action.type) {
    case actions.TOURNAMENT_ADD:
      return [
        ...state,
        {
          id: `tournament-${nanoid()}`,
          tournamentName: action.payload.tournamentName,
          tournamentDescription: action.payload.tournamentDescription,
          tournamentCommandNumber: action.payload.tournamentCommandNumber,
          tournamentGame: action.payload.tournamentGame,
          tournamentFormat: action.payload.tournamentFormat,
          tournamentStartDate: action.payload.tournamentStartDate,
          tournamentEndDate: action.payload.tournamentEndDate,
          tournamentPrizeFund: action.payload.tournamentPrizeFund,
        },
      ];
    default:
      return state;
  }
}
