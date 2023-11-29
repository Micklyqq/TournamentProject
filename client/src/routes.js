import  Commands  from "./pages/CommandsPage";
import  TournamentsPage  from "./pages/TournamentsPage";
import  MainPage  from "./pages/MainPage";
import  CommandIn  from "./pages/CommandIn";
import  TournamentIn  from "./pages/TournamentIn";
import {
    COMMAND_ROUTE,
    CREATE_TOURNAMENT,
    COMMAND_CREATE,
    TOURNAMENT_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, MANAGE_COMMAND_ROUTE, MANAGE_TOURNAMENT_ROUTE,

} from "./utils/consts";
import CommandsPage from "./pages/CommandsPage";
import {CreateCommand} from "./pages/CreateCommand";
import {CreateTournament} from "./pages/CreateTournament";
import ProfilePage from "./pages/ProfilePage";
import CommandManagementPage from "./pages/CommandManagementPage";
import TournamentManagementPage from "./pages/TournamentManagementPage";


export const authRoutes = [
    {
        path: COMMAND_CREATE,
        Component:CreateCommand ,
    },
    {
        path: CREATE_TOURNAMENT,
        Component:CreateTournament,
    },
    {
        path: PROFILE_ROUTE,
        Component:ProfilePage
    },
    {
        path: MANAGE_COMMAND_ROUTE,
        Component:CommandManagementPage
    },
    {
        path: MANAGE_TOURNAMENT_ROUTE,
        Component:TournamentManagementPage
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
