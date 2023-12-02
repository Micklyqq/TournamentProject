import {$authHost} from "./index";

export const createTeamNotification = async (userId,teamId)=>{
    const {data} = await $authHost.post('api/notification/team',{userId,teamId});
}

export const getOneTeamNotification = async (teamId,userId)=>{
    const {data} = await $authHost.get('api/notification/team',{params:{
        userId, teamId
        }})
    return data;
}

export const getAllTeamNotification = async (teamId)=>{
    const {data} = await $authHost.get('api/notification/team/all/'+teamId);
    return data;
}

export const deleteTeamNotification = async (id)=>{
    const {data} = await $authHost.delete('api/notification/team/delete/'+id);
    return data;
}

export const getOneTournamentNotification = async (tournamentId,teamId)=>{
    const {data} = await $authHost.get('api/notification/tournament',{params:{
            tournamentId, teamId
        }})
    return data;
}

export const createTournamentNotification = async (tournamentId,teamId)=>{
    const {data} = await $authHost.post('api/notification/tournament',{tournamentId,teamId});
}

export const getAllTournamentNotification = async (tournamentId)=>{
    const {data} = await $authHost.get('api/notification/tournament/all/'+tournamentId);
    return data;
}

export const deleteTournamentNotification = async (id)=>{
    const {data} = await $authHost.delete('api/notification/tournament/delete/'+id);
    return data;
}

