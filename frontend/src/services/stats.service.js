import api from "./api";

export const fetchStats = () => api.get("/stats");
