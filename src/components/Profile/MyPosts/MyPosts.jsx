import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {

  let pelements =
   props.posts.map(p => <Post massage={p.message} likescount={p.likescount}/>)
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
      {pelements}
    
    </div>
      
    </div>
}
export default MyPosts;