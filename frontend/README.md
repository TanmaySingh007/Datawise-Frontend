# Datawise Frontend Dashboard

This is a responsive dashboard UI built with React, TypeScript, and Vite. It features a sidebar, dashboard with a bar chart, user activity table, and a form, all integrated with a real mock API (JSONPlaceholder).

## Features
- Sidebar navigation: Dashboard, Users, Settings
- Dashboard view:
  - Bar chart (mock data)
  - User activity table (GET from JSONPlaceholder)
  - User form (POST to JSONPlaceholder)
- Users page: List and delete users (UI only)
- Settings page: Update preferences (mock)
- Responsive and clean UI
- Loading and error state handling

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Setup
1. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```
2. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or as shown in your terminal).

### API Integration
- Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for user data (GET/POST).
- No backend setup required.

## Project Structure
```
frontend/
  src/
    components/   # Reusable UI components
    pages/        # Route pages (Dashboard, Users, Settings)
    App.tsx       # Main app with routing
    App.css       # Global styles
```

## Customization
- You can swap out the mock API endpoints in the components for your own backend if needed.

## License
MIT
