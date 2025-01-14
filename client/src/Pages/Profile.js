import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
const user = useSelector((state) => state.userReducer.user);
  return (
  <div>
    <h2>{user.name}</h2>
  </div>
  );
};

export default Profile;
