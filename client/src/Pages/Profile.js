import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  // const user = useSelector((state) => state.userReducer.user);
  return (
    <div className="profile">
      <h1>Card</h1>
      <p>Your cart is currently empty.</p>
      <button className="shop-button" onClick={() => window.location.href = "/"}>
        Shop Now
      </button>
    </div>
  );
};

export default Profile;
