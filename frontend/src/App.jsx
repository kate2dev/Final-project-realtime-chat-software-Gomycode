import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import LoginPage from './authPages/LoginPage/LoginPage';
import Dashboard from './Dashboard/Dashboard';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import AlertNotification from '../src/shared/components/AlertNotification.jsx';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Redirect from the root path to /dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
      <AlertNotification />
    </>
  )
}

export default App
