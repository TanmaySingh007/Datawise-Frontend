import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdPeople } from 'react-icons/md';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []);

  const handleDelete = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="card fade-in">
      <h1 style={{ display: 'flex', alignItems: 'center', gap: 10 }}><MdPeople size={28} className="section-icon" /> Users</h1>
      {loading && <div>Loading users...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td><button onClick={() => handleDelete(user.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users; 