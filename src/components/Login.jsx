import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      if (!username || !password) {
        toast.warn('Enter all fields')
      } 
      else {
        const loginResult = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });
  
        if (loginResult.status === 401) {
          toast.error('Invalid Username or Password');
        }
        else if (loginResult.status === 200) {
          navigate('/home');
        }
      }

    } catch (err) {
      console.log(err);
      toast.error('Server Error! Please try again later');
    }
  }

  return (
    <>
    <div id="container">
      <div className="form">
        <form onSubmit={ handleLogin }>
          <h3>Log In</h3>
          <div className="inputBox">
            <input type="text" value={ username } onChange={ (e) => setUsername(e.target.value) } />
            <span>Username</span>
          </div>
          <div className="inputBox">
            <input type="password" value={ password } onChange={ (e) => setPassword(e.target.value) } />
            <span>Password</span>
          </div>
          <button className="loginBtn" type='submit'>Log In</button>
          <p>Don't have an Account? <NavLink to='/signup'>SignUp Here</NavLink></p>
        </form>
      </div>
    </div> 
    </>
  )
}

export default Login;
