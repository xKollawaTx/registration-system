import api from "./api";

export const fetchUserRegistrations = (params) =>
  api.get("/registrations", { params });

export const fetchAdminRegistrations = (params) =>
  api.get("/admin/registrations", { params });

export const createRegister = (data) => api.post("/registers", data);
