import { combineReducers } from "redux";
import tournamentsReducer from "./tournamentsReducer";
import commandsReducer from "./commandsReducer";

const rootReducer = combineReducers({
  tournaments: tournamentsReducer,
  commands: commandsReducer,
});

export default rootReducer;
