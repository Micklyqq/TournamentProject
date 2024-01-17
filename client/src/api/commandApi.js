import { $authHost, $host } from "./index";

export const createTeam = async (team) => {
  const { data } = await $authHost.post("api/team", team);
  return data;
};

export const getTeams = async (page, limit = 8) => {
  const { data } = await $host.get("api/team", {
    params: {
      page,
      limit,
    },
  });
  return data;
};

export const getOneTeam = async (id) => {
  const { data } = await $host.get("api/team/" + id);
  return data;
};

export const updateTeam = async (team) => {
  const { data } = await $authHost.put("api/team", team);
  return data;
};

export const joinTeam = async (userId, teamId) => {
  const { data } = await $authHost.put("api/team/join", { userId, teamId });
};

export const findAllTeammates = async (teamId) => {
  const { data } = await $host.get("api/team/teammates/" + teamId);
  return data;
};

export const kickUser = async (userId, teamId) => {
  const { data } = await $authHost.put("api/user/teamleave", {
    userId,
    teamId,
  });
  return data;
};

export const deleteTeam = async (teamId) => {
  const { data } = await $authHost.delete("api/team/" + teamId);
  return data;
};
