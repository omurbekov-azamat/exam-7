import React from 'react';
import './Meal.css'

interface MealProps {
  image:string;
  name:string;
}

const Meal:React.FC<MealProps> = (props) => {
  return (
    <img className='meal' src={props.image} alt={props.name}/>
  );
};

export default Meal;