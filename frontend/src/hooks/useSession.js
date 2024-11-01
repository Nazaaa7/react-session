import { useContext } from 'react';
import { SessionContext } from '../context/sessionProvider'; // Ajusta la ruta según sea necesario

export const useSession = () => {
  return useContext(SessionContext);
};
