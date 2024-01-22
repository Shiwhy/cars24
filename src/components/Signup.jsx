import React, { useState } from 'react';
import './css/form.css'

import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';


const Signup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !username || !password) {
      toast.warn('Enter all fields');
    } 
    else if (!email.includes('@') || !email.includes('.')) {
      toast.warn('Enter valid email');
    }
    else {
      try {
        const signupResult = await fetch('http://localhost:5000/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, username, email, password })
        });

        if(signupResult.status === 401) {
          toast.error('User exist');
        }
        else if (signupResult.status === 200) {
          toast.success('Signup Successfull');
        } else {
          toast.error('Signup failed');
        }
      } 
      catch (err) {
        console.log(err);
        toast.error('Server error');
      }
    }
  }

  return (
    <>
    <div id="container">
      <div className="form" onSubmit={ handleSignup }>
        <form>
          <h3>SignUp</h3>
          <div className="inputBox">
            <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
            <span>Name</span>
          </div>
          <div className="inputBox">
            <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <span>Email</span>
          </div>
          <div className="inputBox">
            <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <span>Username</span>
          </div>
          <div className="inputBox">
            <input type="password" name='password' value={password} onChange={(e) => setpassword(e.target.value)} autoComplete='on'/>
            <span>Password</span>
          </div>
          <button className="signupBtn" type='submit'>Sign Up</button>
          <p>Already have an Account? <NavLink to='/login'>LogIn Here</NavLink></p>
        </form>
      </div>
    </div>
    </>
  )
}

export default Signup;
