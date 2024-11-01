import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/config.js';

// Usuarios simulados para autenticación
const users = [
  { id: 1, username: 'naza', password: bcrypt.hashSync('naza', 8), name: 'naza' }
];

export const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, name: user.name }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token, user: { id: user.id, name: user.name, username: user.username } });
};
