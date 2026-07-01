import api from "./api";

export const loginUser = async (credentials) => {
  const response = await api.post("/auth/login", credentials);

  const { token, user } = response.data.data;

  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));

  return user;
};

export const signupUser = async (data) => {
  const response = await api.post("/auth/signup", data);

  return response.data.user;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("user");

  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};