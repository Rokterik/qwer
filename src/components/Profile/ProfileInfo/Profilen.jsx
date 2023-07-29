import React from 'react';
import s from './Profilen.module.css';
const ProfileInfo = () => {
    return(
        <div>

        <div>
          <img src='https://cdn.wallpapersafari.com/43/52/rkRsp5.jpg'/>
        </div>

        <div className={s.descriptionblock}>
          ava + description
        </div>

      </div>
    )
}
export default ProfileInfo;