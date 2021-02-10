import React, { FC } from 'react';
import Header from './Header/Header';
import classNames from 'classnames';
import { ICLayout } from '../types/components';

const Layout: FC<ICLayout> = ({ children, className }) => {
   const classname = classNames('container', className);
   return (
      <div className={classname}>
         <Header />
         <main className="main">{children}</main>
      </div>
   );
};

export default Layout;
