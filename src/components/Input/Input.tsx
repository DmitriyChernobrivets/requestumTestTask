import React, { FC, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { ICInput } from '../../types/components';

const Input: FC<ICInput> = ({ className, ...rest }) => {
   const ref = useRef(null);
   const classname = classNames('input', className);
   useEffect(() => {
      //@ts-ignore
      ref.current.focus();
   }, []);
   return <input ref={ref} {...rest} className={classname} />;
};

export default Input;
