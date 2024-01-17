import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const createTournament = async (tournament) => {
  const { data } = await $authHost.post("api/tournament", tournament);
  return data;
};

export const getTournaments = async (page, limit = 5) => {
  const { data } = await $host.get("api/tournament", {
    params: {
      page,
      limit,
    },
  });
  return data;
};

export const getOneTournament = async (id) => {
  const { data } = await $host.get("api/tournament/" + id);
  return data;
};
export const getAllGames = async () => {
  const { data } = await $host.get("api/game");
  return data;
};

export const findAllTournamentMembers = async (tournamentId) => {
  const { data } = await $host.get("api/tournament/members/" + tournamentId);
  return data;
};

export const jointTournament = async (tournamentId, teamId) => {
  const { data } = await $authHost.post("api/tournament/join", {
    tournamentId,
    teamId,
  });
};

export const deleteTournament = async (tournamentId) => {
  const { data } = await $authHost.delete("api/tournament/" + tournamentId);
  return data;
};
