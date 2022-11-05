import React from 'react';
import {CustomerMenu} from "../../types.t";
import ItemFromMenu from "./ItemFromMenu";

interface Props {
  menu: CustomerMenu[];
}

const Menu:React.FC<Props> = ({menu}) => {
  return (
    <div className='menu d-flex flex-wrap'>
      {menu.map((itemFromMenu) => (
        <ItemFromMenu
          name={itemFromMenu.name}
          image={itemFromMenu.image}
          price={itemFromMenu.price}
        />
      ))}
    </div>
  );
};

export default Menu;