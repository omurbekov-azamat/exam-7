import React from 'react';
import {CustomerMenu} from "../../types.t";
import Order from "./Order";

interface Props {
  orders: CustomerMenu[];
  price: (index:number) => number;
  clearOrder: (index:number) => void;
  totalPrice: number;
}

const Orders: React.FC<Props> = ({orders,price,clearOrder, totalPrice}) => {

  const totalOrders: JSX.Element[] = [];

  orders.forEach((order,index) => {
    if(order.count > 0) {
      totalOrders.push(
        <Order
          key={Math.random() * 99999}
          name={order.name}
          count={order.count}
          price={price(index)}
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
      <h3 className='text-center text-uppercase'>Total: {totalPrice}</h3>
    </>
  );
};

export default Orders;