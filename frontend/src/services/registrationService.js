import api from "./api";

export const updateTotalSeats = (totalSeats) =>
  api.put("/admin/event/seats", { totalSeats });
