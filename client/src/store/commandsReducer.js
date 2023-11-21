import * as actions from "./actionTypes";
import { nanoid } from "nanoid";

export default function commandsReducer(state = [], action) {
  switch (action.type) {
    case actions.COMMAND_ADD:
      return [
        ...state,
        {
          id: `command-${nanoid()}`,
          commandName: action.payload.commandName,
          commandDescription: action.payload.commandDescription,
          commandGame: action.payload.commandGame,
          commandCountry: action.payload.commandCountry,
        },
      ];
    default:
      return state;
  }
}
