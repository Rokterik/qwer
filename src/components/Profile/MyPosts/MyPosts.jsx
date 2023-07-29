import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
  let pData = [
    {id : 1, message: 'Hi, how are you', likescount: ' ' + 12},
    {id : 2, message: 'It`s my first post', likescount: ' ' + 11}
]
    return<div className={s.postsBlock}>  
      <h3>My posts</h3>

      <div>
        <div>
          <textarea></textarea>
        </div>

        <div>
          <button>Add post</button>
        </div>
      </div>

      <div className={s.posts}>
     <Post massage={pData[0].message} likescount={pData[0].likescount}/>
     <Post massage={pData[1].message} likescount={pData[1].likescount}/>
    
  </div>
      
    </div>
}
export default MyPosts;