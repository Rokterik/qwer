import React from 'react';
import s from './Post.module.css';
const Post = (props) =>{
    return(
          
      
      <div className={s.item}>
        <img src="https://th.bing.com/th/id/OIP.8dapd4Pr1Y2X_QQMs_HLjQHaHa?pid=ImgDet&rs=1"/>
        {props.massage}
        <div></div>
        <span>like</span>{props.likescount}
      </div>

    )
      
}
export default Post;