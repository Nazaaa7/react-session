import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (username, password) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      setUser({ ...response.data.user, token: response.data.token });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error.response.data.message || 'Login failed');
    }
  };

  const logout = () => setUser(null);

  return (
    <SessionContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
