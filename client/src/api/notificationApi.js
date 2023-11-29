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

export const deleteNotification = async (id)=>{
    const {data} = await $authHost.delete('api/notification/team/delete/'+id);
    return data;
}

