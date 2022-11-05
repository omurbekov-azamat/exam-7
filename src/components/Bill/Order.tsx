import React from 'react';
import './Order.css';

interface OrderProps {
  name:string;
  count: number;
  price: number;
  clearOrder: React.MouseEventHandler;
}

const Order:React.FC<OrderProps> = (props) => {
  return (
    <div className='order d-flex p-3 justify-content-between border-dark border'>
      <div className='in-order d-flex justify-content-between align-items-center'>
        <p className='m-0'>{props.name}</p>
        <p className='m-0'>x {props.count}</p>
      </div>
      <div className='in-order d-flex justify-content-end align-items-center'>
        <p className='text-uppercase m-0'>{props.price} kgs</p>
        <button onClick={props.clearOrder} className='btn btn-info ms-5'>clear</button>
      </div>
    </div>
  );
};

export default Order;