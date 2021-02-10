import React, { FC } from 'react';
import welcomeImg2 from '../../assets/welcome3.png';
import welcomeImg from '../../assets/welcome.png';

const Welcome: FC<any> = () => {
   return (
      <div className="welcome-wrapper">
         {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
         <img
            src={welcomeImg2}
            alt="panda-photo"
            className="welcome-image-panda"
         />
         {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
         <img
            src={welcomeImg}
            alt="text-photo"
            className="welcome-image-text"
         />
      </div>
   );
};

export default Welcome;
