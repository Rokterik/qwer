import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/Profilen';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
    return  (
        <div >
          <ProfileInfo/>   
          <MyPosts/>
          
      </div>
    )
}

export default Profile;
