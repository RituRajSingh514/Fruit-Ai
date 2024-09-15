
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faPinterest, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../css/Login.css';

const Login = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    
    setEmailError('');
    setPasswordError('');

    if (!email || !validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
    }

    if (!password) {
      setPasswordError('Password cannot be empty.');
    }

    if (validateEmail(email) && password) {
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      <p>By signing in you are agreeing to our <a href="#">Terms and privacy policy</a></p>

      <div className="login-options">
        <a href="#" className="active">Login</a>
        <a href="#">Register</a>
      </div>

      <div className="input-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        {emailError && <p className="error">{emailError}</p>}
      </div>

      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {passwordError && <p className="error">{passwordError}</p>}
      </div>

      <div className="remember-forgot">
        <label>
          <input
            type="checkbox"
            checked={rememberPassword}
            onChange={() => setRememberPassword(!rememberPassword)}
          />
          Remember password
        </label>
        <a href="#">Forget password?</a>
      </div>

      <button onClick={handleLogin} className="login-btn">Login</button>

      <p>or connect with</p>
      
      <div className="social-login">
        <a href="#"><FontAwesomeIcon icon={faFacebookF} className="social-icon facebook" /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} className="social-icon instagram" /></a>
        <a href="#"><FontAwesomeIcon icon={faPinterest} className="social-icon pinterest" /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="social-icon linkedin" /></a>
      </div>

      <div className="fingerprint-login">
        <img src="https://cdn-icons-png.flaticon.com/512/2313/2313448.png" alt="Fingerprint Login" />
      </div>
    </div>
  );
};

export default Login;
