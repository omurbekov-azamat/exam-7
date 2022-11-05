import React from 'react';

interface ButtonProps {
  name: string;
  clearOrder: React.MouseEventHandler;
}

const Button:React.FC<ButtonProps> = (props) => {
  return (
    <button className='btn btn-info ms-3' onClick={props.clearOrder}>{props.name}</button>
  );
};

export default Button;