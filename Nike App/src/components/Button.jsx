//import React from 'react';
import classNames from 'classnames';

const Button = ({
 label,
 iconURL,
 className,
 backgroundColor,
 textColor,
 borderColor,

}) => {
 const buttonClass = classNames(
    'flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full w-full',
    className,
    {
      [`bg-${backgroundColor} text-${textColor} border-${borderColor}`]: backgroundColor,
    }
 );

 return (
    <button className={buttonClass}>
      {label}
      {iconURL && <img 
        src={iconURL}
        alt='arrow right icon'
        className='ml-2 rounded-full w-5 h-5' /> }
    
    </button>

 );
};

export default Button;