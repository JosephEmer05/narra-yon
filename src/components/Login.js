import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 15px auto;
  padding: 20px;
  background-color: #f6f6f6;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LoginHeader = styled.h2`
  text-align: left;
  font-size: 2rem;
  color: #333;
  margin-bottom: 40px;
`;

const InfoText = styled.p`
  text-align: left;
  font-size: 1rem;
  color: #333;
  margin-bottom: 0px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid #a79e8b;
  border-radius: 20px;
  background-color: #d3bfa3;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  color: #333;
  font-size: 1rem;

  &:focus {
    border-color: #000;
    background-color: #f0e4d1;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #ffa500;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff8c00;
  }
`;

const ToggleText = styled.p`
  text-align: left;
  margin-top: 10px;
`;

const ToggleLink = styled.span`
  color: #000;
  cursor: pointer;
  text-decoration: underline;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const HalfWidthInput = styled.input`
  width: 48%; 
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid #a79e8b;
  border-radius: 20px;
  background-color: #d3bfa3;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  color: #333;
  font-size: 1rem;

  &:focus {
    border-color: #000;
    background-color: #f0e4d1;
    outline: none;
  }
`;

function Login() {
  const [isLogin, setIsLogin] = useState (true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.loginUsername.value;
    const password = e.target.loginPassword.value;

    if (email === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Logged in as: ${data.user.email}`);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault(); // Corrected line
    const firstName = e.target.registerFirstname.value;
    const lastName = e.target.registerLastname.value;
    const email = e.target.registerEmail.value;
    const password = e.target.registerPassword.value;
    const confirmPassword = e.target.registerConfirmPassword.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Registered with name: ${data.newUser.firstName} ${data.newUser.lastName}`);
      } else {
        const errorData = await response.json();
        console.error('Registration error:', errorData);
        setErrorMessage(errorData.message || 'An error occurred during registration.');
      }
    } catch (error) {
      console.error('Error registering:', error);
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {isLogin ? (
        <div>
          <LoginHeader>Login</LoginHeader>
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <InfoText>Email</InfoText>
            <FormInput type="text" name="loginUsername" required />
            <InfoText>Password</InfoText>
            <FormInput type="password" name="loginPassword" required />
            <ToggleLink onClick={() => setIsLogin(true)}>Forgot your password?</ToggleLink>
            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </SubmitButton>
            <ToggleText>
              Don't have an account?{' '}
              <ToggleLink onClick={() => setIsLogin(false)}>Register here</ToggleLink>
            </ToggleText>
            <Link to="/user-list">
              <SubmitButton type="button">View User List</SubmitButton>
            </Link>
          </form>
        </div>
      ) : (
        <div>
          <LoginHeader>Register</LoginHeader>
          <form className="login-form" onSubmit={handleRegisterSubmit}>
            <InputRow>
              <div>
                <InfoText>First Name</InfoText>
                <HalfWidthInput type="text" name="registerFirstname" required />
              </div>
              <div>
                <InfoText>Last Name</InfoText>
                <HalfWidthInput type="text" name="registerLastname" required />
              </div>
            </InputRow>
            <InfoText>Email</InfoText>
            <FormInput type="email" name="registerEmail" required />
            <InfoText>Password</InfoText>
            <FormInput type="password" name="registerPassword" required />
            <InfoText>Confirm Password</InfoText>
            <FormInput type="password" name="registerConfirmPassword" required />
            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </SubmitButton>
            <ToggleText>
              Already have an account?{' '}
              <ToggleLink onClick={() => setIsLogin(true)}>Login here</ToggleLink>
            </ToggleText>
          </form>
        </div>
      )}
    </LoginContainer>
  );
}

export default Login;