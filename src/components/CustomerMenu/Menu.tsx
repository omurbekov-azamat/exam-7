import React from 'react';
import {CustomerMenu} from "../../types.t";
import ItemFromMenu from "./ItemFromMenu";

interface Props {
  menu: CustomerMenu[];
  getOrder: (id:number) => void;
}

const Menu:React.FC<Props> = ({menu, getOrder}) => {
  return (
    <div className='menu d-flex flex-wrap'>
      {menu.map((itemFromMenu) => (
        <ItemFromMenu
          key={Math.random() * 99999}
          name={itemFromMenu.name}
          image={itemFromMenu.image}
          price={itemFromMenu.price}
          getOrder={() => getOrder(itemFromMenu.id)}
        />
      ))}
    </div>
  );
};

export default Menu;