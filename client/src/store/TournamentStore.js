import create from "zustand";

export const TournamentStore = create(set=>({
    _tournaments:[{}],
    _user:{},
    setIsAuth:(bool)=>set(state=>{
        return{_isAuth:bool};
    }),
    setUser:(user)=>set(state=>{
        return {_user:user} ;
    }),
}));