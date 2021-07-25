import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session.js';
import './Navigation.css';

function Navigation({ isLoaded }){
  //when logged in, we have access to user
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();

  // const [credential, setCredential] = useState('');
  // const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  //console.log(sessionUser);
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());

    history.push('/');
  };

  const demoLogin = () => {
    const credential = 'NashvilleFoodProject'
    const password = 'password'
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  let sessionLinks;
  //if you're logged in...
  if (sessionUser) {
    sessionLinks = (
      <div className="profile-opp-div">
        <div className="profile-div">
          <NavLink to="/profile">Profile</NavLink>
        </div>

        <div className="opp-link-div">
          <NavLink to="/opportunities">Create an Opportunity</NavLink>
        </div>

        <div className="logout-button-div">
          <button className="logout-button" onClick={logout}>Log Out</button>
        </div>


      </div>
    );
  } else {
    sessionLinks = (
      <div className="login-signup-div">
        <div className='demo-div'>
          <button className="demo-button" onClick={demoLogin}>Demo</button>
        </div>
        <div className='signup-div'>
        <NavLink to="/signup">Sign Up</NavLink>
        </div>
        <div className='login-div'>
        <NavLink to="/login">Log In</NavLink>
        </div>
      </div>
    );
  }


  return (
    <div className='home-div'>
      <ul>
        <li className='home-button'>
          <NavLink exact to="/">VolunteerBrite</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
