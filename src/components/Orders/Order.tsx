import React from 'react';
import './Order.css';
import Button from "../Button/Button";
import Meal from "../Meal/Meal";
import Name from "../Name/Name";
import Price from "../Price/Price";

interface OrderProps {
  name:string;
  count: number;
  price: number;
  clearOrder: React.MouseEventHandler;
  image: string;
}

const Order:React.FC<OrderProps> = (props) => {
  return (
    <div className='d-flex p-2 justify-content-between'>
      <div className='in-order d-flex align-items-center justify-content-between p-1'>
        <Name name={props.name}/>
        <Meal image={props.image} name={props.name}/>
      </div>
      <div className='in-order d-flex justify-content-between align-items-center'>
        <p className='m-0 text-uppercase fs-3'>x {props.count}</p>
        <div className='d-flex justify-content-between align-items-center'>
          <Price price={props.price}/>
          <Button clearOrder={props.clearOrder} name='Clear'/>
        </div>
      </div>
    </div>
  );
};

export default Order;