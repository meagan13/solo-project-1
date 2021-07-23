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
      <>
        <ProfileButton user={sessionUser} />
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/opportunities">Create an Opportunity</NavLink>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
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
