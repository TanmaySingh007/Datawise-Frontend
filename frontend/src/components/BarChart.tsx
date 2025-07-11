import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Jan', users: 30, growth: 10 },
  { name: 'Feb', users: 45, growth: 15 },
  { name: 'Mar', users: 60, growth: 20 },
  { name: 'Apr', users: 50, growth: 12 },
  { name: 'May', users: 70, growth: 25 },
  { name: 'Jun', users: 90, growth: 30 },
];

const pieData = [
  { name: 'Active', value: 70 },
  { name: 'Inactive', value: 30 },
];
const COLORS = ['#4ea8de', '#f72585'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#fff', border: '1.5px solid #4ea8de', borderRadius: 8, padding: 12, boxShadow: '0 2px 8px #4ea8de22' }}>
        <strong>{label}</strong>
        <div style={{ color: '#4ea8de', fontWeight: 600 }}>{payload[0].value} users</div>
      </div>
    );
  }
  return null;
};

const CustomBarChart: React.FC = () => (
  <>
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ea8de" stopOpacity={0.9} />
            <stop offset="100%" stopColor="#4361ee" stopOpacity={0.7} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#4ea8de11' }} />
        <Bar dataKey="users" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    <div style={{ display: 'flex', gap: 24, marginTop: 24, flexWrap: 'wrap' }}>
      <div style={{ flex: 1, minWidth: 260, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #4ea8de22', padding: 16 }}>
        <h3 style={{ margin: 0, marginBottom: 8, color: '#4ea8de', fontWeight: 700 }}>User Growth</h3>
        <ResponsiveContainer width="100%" height={160}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="growth" stroke="#f72585" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div style={{ flex: 1, minWidth: 220, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #4ea8de22', padding: 16 }}>
        <h3 style={{ margin: 0, marginBottom: 8, color: '#f72585', fontWeight: 700 }}>User Distribution</h3>
        <ResponsiveContainer width="100%" height={160}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  </>
);

export default CustomBarChart; 