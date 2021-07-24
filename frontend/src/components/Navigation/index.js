import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import sessionReducer from '../../store/session';

function Navigation({ isLoaded }){
  //when logged in, we have access to user
  const sessionUser = useSelector(state => state.session.user);

  console.log(sessionUser);

  let sessionLinks;
  //if you're logged in...
  if (sessionUser) {
    sessionLinks = (
      <div className="profile-opp-div">
        <div className="profile-div">
          <ProfileButton user={sessionUser} />
          <NavLink to="/profile">Profile</NavLink>
        </div>

        <div className="opp-link-div">
          <NavLink to="/opportunities">Create an Opportunity</NavLink>
        </div>
      </div>
    );
  } else {
    sessionLinks = (
      <div className="login-signup-div">
        <div className='login-div'>
        <NavLink to="/login">Log In</NavLink>
        </div>
        <div className='signup-div'>
        <NavLink to="/signup">Sign Up</NavLink>
        </div>
        <div className='demo-div'>
        <NavLink to="/login">Demo</NavLink>
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
