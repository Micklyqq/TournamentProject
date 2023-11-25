import create from "zustand";
import {devtools} from "zustand/middleware";

export const UserStore = create(devtools(set=>({
    _isAuth:false,
    _user:{},
    _userLogo:"",
    _userName:"",
    setIsAuth:(bool)=>set(state=>{
        return{_isAuth:bool};
    }),
    setUser:(user)=>set(state=>{
        return {_user:user} ;
    }),

    setUserLogo:(logo)=>set(state=>{
        return {_userLogo:logo} ;
    }),

    setUserName:(userName)=>set(state=>{
        return {_userName:userName} ;
    }),
})));