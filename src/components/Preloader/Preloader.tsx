import React, { FC } from 'react';

const Preloader: FC<any> = () => {
   return (
      <div className="preloader-container">
         <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   );
};

export default Preloader;
