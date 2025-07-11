# Datawise Frontend Dashboard

A responsive dashboard UI built with React, TypeScript, and Vite. It features a sidebar, dashboard with charts (bar, line, pie), user activity table, and a form, all integrated with a mock API (JSONPlaceholder).

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
