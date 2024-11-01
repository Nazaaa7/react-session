import React from 'react';
import { useSession } from '../context/sessionProvider';

const Home = () => {
  const { user, logout } = useSession();

  return (
    <div>
      <h2>Holisss, {user.name}!</h2>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Home;
