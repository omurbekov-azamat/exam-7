import React from 'react';

interface PriceProps {
  price: number;
}

const Price:React.FC<PriceProps> = (props) => {
  return (
    <p className='text-uppercase m-0 fs-3'>{props.price} kgs</p>
  );
};

export default Price;