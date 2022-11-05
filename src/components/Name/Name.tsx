import React from 'react';

interface NameProps {
  name: string;
}

const Name:React.FC<NameProps> = (props) => {
  return (
    <p className='text-meal m-0 text-uppercase fs-5 fw-semibold'>{props.name}</p>
  );
};

export default Name;