import React, { useState } from 'react';
import { useSession } from '../context/sessionProvider';

const Login = () => {
  const { login, loading } = useSession();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reinicia el mensaje de error

    try {
      await login(username, password);
    } catch (err) {
      setError(err.message); // Manejo de error en caso de que las credenciales sean incorrectas
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>Iniciar sesión</button>
        {loading && <p>Cargando...</p>} {/* Indicador de carga */}
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Muestra el error si hay */}
      </form>
    </div>
  );
};

export default Login;
