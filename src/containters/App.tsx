import React, {useState} from 'react';
import {CustomerMenu} from "../types.t";
import hamburgerImage from '../assets/burger.png';
import shawarmaImage from '../assets/shawarma.png';
import frenchFriesImage from '../assets/french fries.png';
import coffeeImage from '../assets/coffee.png';
import teaImage from '../assets/tea.png';
import colaImage from '../assets/cola.png';
import Menu from "../components/CustomerMenu/Menu";
import './App.css'
import Orders from "../components/Bill/Orders";

function App() {

  const [menu, setMenu] = useState<CustomerMenu[]>([
    {name: 'hamburger', price: 80, image: hamburgerImage, count: 0},
    {name: 'coffee', price: 70, image: coffeeImage, count: 0},
    {name: 'shawarma', price: 180, image: shawarmaImage, count: 0},
    {name: 'tea', price: 50, image: teaImage, count: 0},
    {name: 'frenchFries', price: 50, image: frenchFriesImage, count: 0},
    {name: 'cola', price: 40, image: colaImage, count: 0},
  ]);

  const getNewOrder = (index:number) => {
    const orders = [...menu];
    const order = {...menu[index]};
    order.count++;
    orders[index] = order;
    setMenu(orders);
  };

  const clearOrder = (index:number) => {
    const orders = [...menu];
    const order = {...menu[index]};
    order.count = 0;
    orders[index] = order;
    setMenu(orders);
  };

  const getOrderPrice = (index:number) => {
    return menu[index].price * menu[index].count;
  };

  const totalPrice = menu.reduce((acc, item,currentIndex) => {
    return acc + menu[currentIndex].price * menu[currentIndex].count
  }, 0)

  console.log(menu);

  return (
    <div className='my-container d-flex justify-content-between mt-5'>
      <div>

        <Orders orders={menu} price={getOrderPrice} clearOrder={clearOrder} totalPrice={totalPrice}/>
      </div>
      <Menu menu={menu} getOrder={getNewOrder}/>
    </div>
  );
}

export default App;
