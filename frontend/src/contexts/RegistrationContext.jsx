import { createContext, useContext, useEffect, useState } from "react";
import {
  fetchUserRegistrations,
  fetchAdminRegistrations,
  createRegister,
} from "../services/register.service";
import { fetchStats } from "../services/stats.service";
import { updateTotalSeats } from "../services/registrationService";

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registrations, setRegistrations] = useState([]);
  const [pagination, setPagination] = useState({});
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState({
    page: 1,
    limit: 5,
    search: "",
    sortBy: "createdAt",
    order: "desc",
  });

  const updateQuery = (newQuery) => {
    setQuery((prev) => ({ ...prev, ...newQuery }));
  };

  const updateFilter = (newQuery) => {
    setQuery((prev) => ({
      ...prev,
      ...newQuery,
      page: 1,
    }));
  };

  const loadUserRegistrations = async (customQuery = query) => {
    setLoading(true);
    const res = await fetchUserRegistrations(customQuery);
    setRegistrations(res.data.data);
    setPagination(res.data.pagination);
    setLoading(false);
  };

  const loadAdminRegistrations = async (params) => {
    setLoading(true);
    const res = await fetchAdminRegistrations(params);
    setRegistrations(res.data.data);
    setPagination(res.data.pagination);
    console.log(res.data);
    setLoading(false);
  };

  const loadStats = async () => {
    const res = await fetchStats();
    console.log(res.data);
    setStats(res.data);
  };

  const registerUser = async (data) => {
    await createRegister(data);
    await loadStats();
  };

  useEffect(() => {
    loadStats();
  }, []);

  const setTotalSeats = async (totalSeats) => {
    await updateTotalSeats(totalSeats);
    await loadStats();
  };

  return (
    <RegistrationContext.Provider
      value={{
        registrations,
        pagination,
        stats,
        loading,
        loadUserRegistrations,
        loadAdminRegistrations,
        registerUser,
        query,
        updateQuery,
        updateFilter,
        setTotalSeats,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => useContext(RegistrationContext);
