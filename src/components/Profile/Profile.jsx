import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/Profilen';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = (props) => {
    return  (
        <div >
          <ProfileInfo/>   
          <MyPosts posts={props.posts}/>
          
      </div>
    )
}

export default Profile;
