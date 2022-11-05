import React from 'react';
import {CustomerMenu} from "../types.t";
import hamburgerImage from '../assets/burger.png';
import shawarmaImage from '../assets/shawarma.png';
import frenchFriesImage from '../assets/french fries.png';
import coffeeImage from '../assets/coffee.png';
import teaImage from '../assets/tea.png';
import colaImage from '../assets/cola.png';

const customerMenu:CustomerMenu[] = [
  {name: 'hamburger', price: 80, image: hamburgerImage},
  {name: 'shawarma', price: 180, image: shawarmaImage},
  {name: 'frenchFries', price: 50, image: frenchFriesImage},
  {name: 'coffee', price: 70, image: coffeeImage},
  {name: 'tea', price: 50, image: teaImage},
  {name: 'cola', price: 40, image: colaImage},
];

function App() {
  return (
    <div className='mt-5 text-center'>
      <button>clear</button>
    </div>
  );
}

export default App;
