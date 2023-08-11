import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/Profilen';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
    let posts = [
    {id : 1, message: 'Hi, how are you', likescount: ' ' + 52},
    {id : 2, message: 'It`s my first post', likescount: ' ' + 51},
    {id : 3, message: 'Hi', likescount: ' ' + 12},
    {id : 4, message: 'Bye', likescount: ' ' + 11}
]
    return  (
        <div >
          <ProfileInfo/>   
          <MyPosts posts={props.posts}/>
          
      </div>
    )
}

export default Profile;
