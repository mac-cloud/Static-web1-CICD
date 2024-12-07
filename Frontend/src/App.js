import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Recommendations from './components/Recommendations';
import SignUpPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/upload" element={<Form />} />
        <Route path="/recommendation" element={<Recommendations />} />
        <Route path="/signup-english" element={<SignUpPage language="English"/>} />
        <Route path="/signup-kiswahili" element={<SignUpPage language="Kiswahili"/>} /> <Route path="/login" element={<LoginPage language="English" />} /> <Route path="/login" element={<LoginPage language="Kiswahili" />} />
      </Routes>
    </Router>
  );
 
};

export default App;
