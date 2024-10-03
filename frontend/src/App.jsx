import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import LoginPage from './authPages/LoginPage/LoginPage';
import Dashboard from './Dashboard/Dashboard';

function App() {
  

  return (
    <>
     <Router>
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<LoginPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    
    {/* Redirect from the root path to /dashboard */}
    <Route path="/" element={<Navigate to="/dashboard" />} />
  </Routes>
</Router>
    </>
  )
}

export default App
