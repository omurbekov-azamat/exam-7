import React from 'react';
import {CustomerMenu} from "../../types.t";
import Order from "./Order";

interface Props {
  orders: CustomerMenu[];
  clearOrder: (index:number) => void;
}

const Orders: React.FC<Props> = ({orders,clearOrder}) => {

  const totalOrders: JSX.Element[] = [];


  orders.forEach((order,index) => {
    if(order.count > 0) {
      totalOrders.push(
        <Order
          key={Math.random() * 99999}
          name={order.name}
          count={order.count}
          price={order.price}
          clearOrder={() => clearOrder(index)}
        />
      )
    }
  })

  if(totalOrders.length === 0) {
    return (
      <div className='order mt-5 text-uppercase text-center'>
        <h2>Order is Empty!</h2>
        <p>Please add some items!</p>
      </div>
    )
  }

  return (
    <>
      {totalOrders}
    </>
  );
};

export default Orders;