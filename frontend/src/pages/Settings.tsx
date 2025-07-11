import React, { useState } from 'react';
import { MdSettings } from 'react-icons/md';

const Settings: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="card fade-in">
      <h1 style={{ display: 'flex', alignItems: 'center', gap: 10 }}><MdSettings size={28} className="section-icon" /> Settings</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <div style={{ marginBottom: 12 }}>
          <label>Theme:</label><br />
          <select value={theme} onChange={e => setTheme(e.target.value)} style={{ width: '100%' }}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>
            <input type="checkbox" checked={emailNotifications} onChange={e => setEmailNotifications(e.target.checked)} />
            &nbsp;Enable Email Notifications
          </label>
        </div>
        <button type="submit">Save Preferences</button>
        {success && <div style={{ color: 'green', marginTop: 8 }}>Preferences saved!</div>}
      </form>
    </div>
  );
};

export default Settings; 