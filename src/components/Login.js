import React, { useState } from 'react';
import '../styles/Login.css';


function Login() {
    const [isLogin, setIsLogin] = useState(true);
  
    const handleLoginSubmit = (e) => {
      e.preventDefault();
      const username = e.target.loginUsername.value;
      const password = e.target.loginPassword.value;
  
      if (username === '' || password === '') {
        alert('Please fill in all fields');
        return;
      }
  
      alert(`Logged in as: ${username}`);
    };
  
    const handleRegisterSubmit = (e) => {
      e.preventDefault();
      const username = e.target.registerUsername.value;
      const email = e.target.registerEmail.value;
      const password = e.target.registerPassword.value;
      const confirmPassword = e.target.registerConfirmPassword.value;
  
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
  
      alert(`Registered with username: ${username} and email: ${email}`);
    };
  
    return (
      <div className="login-container">
        {isLogin ? (
          <div>
            <h2 className="login-header">Login</h2>
            <form className="login-form" onSubmit={handleLoginSubmit}>
              <input type="text" name="loginUsername" placeholder="Username" required />
              <input type="password" name="loginPassword" placeholder="Password" required />
              <button type="submit">Login</button>
              <p className="login-toggle-text">
                Don't have an account?{' '}
                <span onClick={() => setIsLogin(false)} className="login-toggle-link">
                  Register here
                </span>
              </p>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="login-header">Register</h2>
            <form className="login-form" onSubmit={handleRegisterSubmit}>
              <input type="text" name="registerUsername" placeholder="Username" required />
              <input type="email" name="registerEmail" placeholder="Email" required />
              <input type="password" name="registerPassword" placeholder="Password" required />
              <input type="password" name="registerConfirmPassword" placeholder="Confirm Password" required />
              <button type="submit">Register</button>
              <p className="login-toggle-text">
                Already have an account?{' '}
                <span onClick={() => setIsLogin(true)} className="login-toggle-link">
                  Login here
                </span>
              </p>
            </form>
          </div>
        )}
      </div>
    );
  }
  
  export default Login;

