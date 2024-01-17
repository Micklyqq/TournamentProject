import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const check = async () => {
  try {
    const { data } = await $authHost.get("api/user/auth");
    localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
  } catch (e) {
    return false;
  }
};

export const getData = async (id) => {
  const { data } = await $host.get("api/user/profile/" + id);
  return data;
};

export const updateUser = async (user) => {
  const { data } = await $authHost.put("api/user/profile", user);
  return data;
};

export const getUsers = async (page, limit = 5) => {
  const { data } = await $host.get("api/user", {
    params: {
      page,
      limit,
    },
  });
  return data;
};

export const deleteUser = async (userId) => {
  const { data } = await $authHost.delete("api/user/" + userId);
  return data;
};

export const getAllRoles = async () => {
  const { data } = await $host.get("api/role");
  return data;
};

export const giveRole = async (userId, roleId) => {
  const { data } = await $authHost.post("api/role/giverole", {
    roleId,
    userId,
  });
  return data;
};
