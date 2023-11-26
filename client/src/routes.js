import  Commands  from "./pages/CommandsPage";
import  TournamentsPage  from "./pages/TournamentsPage";
import  MainPage  from "./pages/MainPage";
import  CommandIn  from "./pages/CommandIn";
import  TournamentIn  from "./pages/TournamentIn";
import {
    COMMAND_ROUTE,
    CREATE_TOURNAMENT,
    COMMAND_CREATE,
    TOURNAMENT_ROUTE, MAIN_ROUTE,

} from "./utils/consts";
import CommandsPage from "./pages/CommandsPage";
import {CreateCommand} from "./pages/CreateCommand";
import {CreateTournament} from "./pages/CreateTournament";


export const authRoutes = [
    {
        path: COMMAND_CREATE,
        Component:CreateCommand ,
    },
    {
        path: CREATE_TOURNAMENT,
        Component:CreateTournament,
    },
];

export const publicRoutes = [
    {
        path: COMMAND_ROUTE,
        Component: CommandsPage,
    },
    {
        path: TOURNAMENT_ROUTE,
        Component: TournamentsPage,
    },
    {
        path: MAIN_ROUTE,
        Component: MainPage,
    },
    {
        path: COMMAND_ROUTE +"/:id",
        Component: CommandIn,
    },
    {
        path: TOURNAMENT_ROUTE + "/:id",
        Component: TournamentIn,
    },
];
