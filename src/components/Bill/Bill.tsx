import React from 'react';
import './Bill.css';

interface BillProps {
  name:string;
  count: number;
  price: number;
  clearOrder: React.MouseEventHandler;
}

const Bill:React.FC<BillProps> = (props) => {
  return (
    <div className='order d-flex p-3 justify-content-between border-dark border align-items-center'>
      <p className='m-0'>{props.name}</p>
      <p className='m-0'>x {props.count}</p>
      <p className='text-uppercase m-0'>{props.price}kgs</p>
      <button onClick={props.clearOrder} className='btn btn-info'>clear</button>
    </div>
  );
};

export default Bill;