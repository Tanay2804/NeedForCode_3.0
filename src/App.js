import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './HomeComponents/Navbar/Navbar';
import Footer from './HomeComponents/Footer/Footer';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard/Dashboard';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
