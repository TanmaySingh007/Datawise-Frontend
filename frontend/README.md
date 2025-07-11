# Datawise Frontend Dashboard

A responsive dashboard UI built with React, TypeScript, and Vite. It features a sidebar, dashboard with charts (bar, line, pie), user activity table, and a form, all integrated with a mock API (JSONPlaceholder).

## Overview
Datawise Frontend Dashboard is designed as a modern, responsive admin panel for user management and analytics. It demonstrates best practices in React component structure, state management, and API integration using mock data sources.

## Features
- Sidebar navigation: Dashboard, Users, Settings
- Dashboard view:
  - Bar chart (mock data)
  - User growth line chart
  - User distribution pie chart
  - User activity table (GET from JSONPlaceholder)
  - User form (POST to JSONPlaceholder)
- Users page: List and delete users (UI only)
- Settings page: Update preferences (mock)
- Responsive and clean UI
- Loading and error state handling

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Setup
1. **Clone the repository and navigate to the frontend folder:**
   ```bash
   git clone https://github.com/TanmaySingh007/Datawise-Frontend.git
   cd Datawise-Frontend/frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or as shown in your terminal).

### API Integration
- Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for user data (GET/POST).
- No backend setup required.

## Assumptions Made
- The backend API is mocked using JSONPlaceholder; no real user data is stored or modified.
- User deletion and settings update are UI-only and do not persist changes to the backend.
- The dashboard charts use static/mock data for demonstration purposes.
- The app is intended for demonstration and educational use, not production.

## Libraries/Tools Used
- [React](https://react.dev/) – UI library
- [TypeScript](https://www.typescriptlang.org/) – Type safety
- [Vite](https://vitejs.dev/) – Fast build tool
- [Recharts](https://recharts.org/) – Charting library (Bar, Line, Pie charts)
- [react-icons](https://react-icons.github.io/react-icons/) – Icon library
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) – Mock API for users
- [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/) – Deployment platforms

## Project Structure
```
frontend/
  src/
    components/   # Reusable UI components (BarChart, Sidebar, UserForm, UserTable)
    pages/        # Route pages (Dashboard, Users, Settings)
    App.tsx       # Main app with routing
    App.css       # Global styles
```

## Deployment

### Deploying to Vercel
1. **Push your code to GitHub.**
2. **Go to [Vercel](https://vercel.com/import) and import your repository.**
3. **Set the following settings:**
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. **Deploy!**
   - Vercel will provide a live URL after deployment.
   - For CLI deploys, run `vercel` inside the `frontend` folder and follow the prompts.

### Deploying to Netlify (Alternative)
1. **Push your code to GitHub.**
2. **Go to [Netlify](https://app.netlify.com/start) and import your repository.**
3. **Set the following settings:**
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. **Deploy!**

## Customization
- You can swap out the mock API endpoints in the components for your own backend if needed.

## License
MIT
