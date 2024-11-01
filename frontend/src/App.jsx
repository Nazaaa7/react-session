import React from 'react';
import { useSession } from './context/sessionProvider';
import Login from './components/login';
import Home from './components/home';

const App = () => {
  const { user } = useSession();

  return (
    <div>
      {user ? <Home /> : <Login />}
    </div>
  );
};

export default App;
