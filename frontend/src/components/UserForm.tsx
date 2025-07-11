import React, { useState } from 'react';
import axios from 'axios';

const UserForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', username: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await axios.post('https://jsonplaceholder.typicode.com/users', form);
      setSuccess(true);
      setForm({ name: '', email: '', username: '' });
    } catch {
      setError('Failed to submit form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '20px 0' }}>
      <div style={{ marginBottom: 12 }}>
        <label>Name:</label><br />
        <input name="name" value={form.name} onChange={handleChange} required style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>Email:</label><br />
        <input name="email" type="email" value={form.email} onChange={handleChange} required style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>Username:</label><br />
        <input name="username" value={form.username} onChange={handleChange} required style={{ width: '100%' }} />
      </div>
      <button type="submit" disabled={loading} style={{ padding: '8px 16px' }}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
      {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
      {success && <div style={{ color: 'green', marginTop: 8 }}>Form submitted successfully!</div>}
    </form>
  );
};

export default UserForm; 