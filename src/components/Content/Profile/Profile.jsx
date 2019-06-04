import React from 'react';
import Posts from './Posts/Posts';
import UserData from './UserData/UserData';
import c from './Profile.module.css';

const Profile = ({userData, postData, newPostText, dispatch}) => {
  
  return (
    <div className={c.profile}>
      <UserData userData={userData} />
      <Posts newPostText={newPostText} postData={postData} userData={userData} dispatch={dispatch} />
    </div>
  )
}

export default Profile;