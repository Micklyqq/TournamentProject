import create from "zustand";


export const TournamentStore = create(set=>({
    _tournaments:[{}],
    _games:[{}],
    setTournament:(tournament)=>set(state=>{
        return{_tournaments:tournament};
    }),
    setGame:(game)=>set(state=>{
        return {_games:game} ;
    }),
}));