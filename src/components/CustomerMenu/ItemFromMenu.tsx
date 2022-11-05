import React from 'react';
import './ItemFromMenu.css'

interface ItemFromMenuProps {
  name:string;
  image: string;
  price: number;
  getOrder: React.MouseEventHandler;
}

const ItemFromMenu:React.FC<ItemFromMenuProps> = (props) => {
  return (
    <div onClick={props.getOrder} className='item-menu d-flex border border-danger justify-content-around align-items-center'>
      <img className='meal' src={props.image} alt={props.image}/>
      <div className='text-uppercase p-1'>
        <h5 >{props.name}</h5>
        <p className='m-0'>{props.price} kgs</p>
      </div>
    </div>
  );
};

export default ItemFromMenu;