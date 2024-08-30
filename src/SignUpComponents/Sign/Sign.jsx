import React, { useState } from 'react';
import axios from 'axios';
import './Sign.css';
import { useNavigate } from 'react-router-dom';
const Sign = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [isVolunteer, setIsVolunteer] = useState(false);
  const [error, setError] = useState('');

const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        email,
        password,
        phone,
        isVolunteer,
      };

      // POST request to your API endpoint
      const response = await axios.post('/api/signup', data);
      console.log(response.data);
      navigate('/login');
      // Handle successful sign-up (e.g., navigate to login page)
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="startmain">
      <form onSubmit={handleSignup} className="signup-form">
        <div className="container">
          <h1 id="anmoljeevan">ANMOL JEEVAN</h1>
          <div className="startinputs">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneno">Contact No</label>
              <input
                type="text"
                id="phoneno"
                placeholder="Your Contact No"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="emailid">Email Id</label>
              <input
                type="email"
                id="emailid"
                placeholder="Your Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                id="pass"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="isVolunteer" style={{ marginRight: '10px' }}>
                Register as a Volunteer?
              </label>
              <input
                type="checkbox"
                id="isVolunteer"
                checked={isVolunteer}
                onChange={() => setIsVolunteer(!isVolunteer)}
                style={{ margin: '0 10px' }} // Inline CSS for margin
              />
            </div>
            <button type="submit" id="startsubmit" className="submit-btn">
              <strong>SIGN UP</strong>
            </button>
          </div>
          {error && <p className="error">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Sign;