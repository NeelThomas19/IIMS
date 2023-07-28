import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const handleLoginButtonClick = () => {
    setShowLoginForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    if (username.trim() === '') {
      setUsernameError('Username is required');
      isValid = false;
    } else {
      setUsernameError('');
    }

    if (password.trim() === '') {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      console.log('Form submitted successfully!');
    }
  };

  return (
    <div className='home'>
      <div className='card'>
      <div className="login-form-container">
      {!showLoginForm ? (
        <button onClick={handleLoginButtonClick} className="login-button">
          Login
        </button>
      ) : (
        <div className="form-fields">
        <div>
          <img className='charimg' src="charusat.png" alt="charimg" />
        </div>
        <form onSubmit={handleFormSubmit}>
        <div className="input-group flex-nowrap">
        <i className='fa fa-user icon' style={{marginTop:'13px', paddingRight:'10px'}}></i>
          <input
            type="text"
            class="form-control"
            aria-label="Username" aria-describedby="addon-wrapping"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{marginBottom:'20px', border:'none',borderRadius:'5px'}}
            required
          />
          {usernameError && <span className="error-message">{usernameError}</span>}
          </div>
          <div className="input-group flex-nowrap">
          <i className='fa fa-lock icon' style={{marginTop:'13px', paddingRight:'10px'}}></i>
          <input
            type="password"
            class="form-control"
            aria-label="Password" aria-describedby="addon-wrapping"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{marginBottom:'20px', border:'none',borderRadius:'5px'}}
            required
          />
          {passwordError && <span className="error-message">{passwordError}</span>}
          </div>
          <Link to="/dashboard"><button onClick={handleFormSubmit} className="submit-button">
            Submit
          </button></Link>
          </form>
        </div>
      )}
    </div>
      {/* <Link to="/login"><button className='loginbtn'>Login</button></Link> */}
      {/* <Link to="/register"><button className='registerbtn'>Register as</button></Link> */}
      </div>
    </div>
  );
};

export default Home;
