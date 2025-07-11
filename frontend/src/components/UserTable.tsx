import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UserTable: React.FC = () => {
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

  if (loading) return <div>Loading users...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ccc', padding: 8 }}>ID</th>
          <th style={{ border: '1px solid #ccc', padding: 8 }}>Name</th>
          <th style={{ border: '1px solid #ccc', padding: 8 }}>Username</th>
          <th style={{ border: '1px solid #ccc', padding: 8 }}>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td style={{ border: '1px solid #ccc', padding: 8 }}>{user.id}</td>
            <td style={{ border: '1px solid #ccc', padding: 8 }}>{user.name}</td>
            <td style={{ border: '1px solid #ccc', padding: 8 }}>{user.username}</td>
            <td style={{ border: '1px solid #ccc', padding: 8 }}>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable; 