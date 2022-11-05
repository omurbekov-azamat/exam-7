import React from 'react';
import './ItemFromMenu.css'
import Meal from "../Meal/Meal";
import Name from "../Name/Name";
import Price from "../Price/Price";

interface ItemFromMenuProps {
  name:string;
  image: string;
  price: number;
  getOrder: React.MouseEventHandler;
}

const ItemFromMenu:React.FC<ItemFromMenuProps> = (props) => {
  return (
    <div onClick={props.getOrder} className='item-menu d-flex border border-white align-items-center'>
      <Meal image={props.image} name={props.name}/>
      <div className='text-uppercase text-white ms-2'>
        <Name name={props.name}/>
        <Price price={props.price}/>
      </div>
    </div>
  );
};

export default ItemFromMenu;