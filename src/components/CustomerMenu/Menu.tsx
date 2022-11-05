import React from 'react';
import {CustomerMenu} from "../../types.t";
import ItemFromMenu from "./ItemFromMenu";

interface Props {
  menu: CustomerMenu[];
  getOrder: (index:number) => void;
}

const Menu:React.FC<Props> = ({menu, getOrder}) => {
  return (
    <div className='menu d-flex flex-wrap'>
      {menu.map((itemFromMenu,index) => (
        <ItemFromMenu
          key={Math.random()}
          name={itemFromMenu.name}
          image={itemFromMenu.image}
          price={itemFromMenu.price}
          getOrder={() => getOrder(index)}
        />
      ))}
    </div>
  );
};

export default Menu;