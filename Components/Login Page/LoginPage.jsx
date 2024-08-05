import React, { useState } from 'react';
import './loginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className='loginPageBody'>
      <form className="loginPage-form" onSubmit={handleSubmit}>
        <p className="loginPage-form-title">Sign in to your account</p>
        <div className="loginPage-input-container">
          <input 
            type="email" 
            placeholder="Enter email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            />
          <span></span>
        </div>
        <div className="loginPage-input-container">
          <input 
            type="password" 
            placeholder="Enter password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            />
        </div>
        <button type="submit" className="loginPage-submit">
          Sign in
        </button>
        <p className="loginPage-signup-link">
          No account?
          <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
