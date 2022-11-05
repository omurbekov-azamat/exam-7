import React, {useState} from 'react';
import {CustomerMenu} from "../types.t";
import Menu from "../components/CustomerMenu/Menu";
import Orders from "../components/Orders/Orders";
import hamburgerImage from '../assets/burger.png';
import shawarmaImage from '../assets/shawarma.png';
import frenchFriesImage from '../assets/french fries.png';
import coffeeImage from '../assets/coffee.png';
import teaImage from '../assets/tea.png';
import colaImage from '../assets/cola.png';
import './App.css'

function App() {

  const [menu, setMenu] = useState<CustomerMenu[]>([
    {name: 'hamburger', price: 120, image: hamburgerImage, count: 0, id: Math.random() * 99999},
    {name: 'coffee', price: 70, image: coffeeImage, count: 0, id: Math.random() * 99999},
    {name: 'shawarma', price: 180, image: shawarmaImage, count: 0, id: Math.random() * 99999},
    {name: 'tea', price: 50, image: teaImage, count: 0, id: Math.random() * 99999},
    {name: 'frenchFries', price: 50, image: frenchFriesImage, count: 0, id: Math.random() * 99999},
    {name: 'cola', price: 40, image: colaImage, count: 0, id: Math.random() * 99999},
  ]);

  const getNewOrder = (id: number) => {
    setMenu(prev => prev.map(item => {
      return item.id === id ? {
        ...item,
        count: item.count + 1,
      } : item;
    }));
  };

  const clearOrder = (id: number) => {
    setMenu(prev => prev.map(item => {
      return item.id === id ? {
        ...item,
        count: 0,
      } : item;
    }));
  };

  const getOrderPrice = (index: number) => {
    return menu[index].price * menu[index].count;
  };

  const totalPrice = menu.reduce((acc, item, currentIndex) => {
    return acc + menu[currentIndex].price * menu[currentIndex].count
  }, 0);

  return (
    <div className='my-container d-flex justify-content-between mt-2 bg-black'>
      <Orders
        orders={menu}
        getPrice={getOrderPrice}
        clearOrder={clearOrder}
        totalPrice={totalPrice}
      />
      <Menu
        menu={menu}
        getOrder={getNewOrder}
      />
    </div>
  );
}

export default App;
