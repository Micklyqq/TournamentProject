import {$authHost, $host} from "./index";


export const createTournamentBracket = async (tournamentId,teams)=>{
    const {data} = await $authHost.post('api/match',{tournamentId,teams})
}

export const getAllMatchesForTournament = async (tournamentId)=>{
    const {data} = await $host.get('api/match/'+tournamentId);
    return data;
}

export const matchResultUpdate = async (matchId,winnerTeamId)=>{
    const {data} = await $authHost.put('api/match/'+matchId,{winnerTeamId})
}