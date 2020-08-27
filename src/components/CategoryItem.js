import React from 'react';
import { Link } from 'react-router-dom';
import TestImage from '../assets/img/test.svg';
import arrowIcon from '../assets/img/right_arrow.svg';

const CategoryItem = props => {
  const { name, id } = props.categoryData;
  // fetch(`${image_url}`).then(p => console.log(p));
  return (
    <Link to={`/expense/${id}`} href="#" className="categoryItem">
      <span>{name}</span>
      {/* <img className="arrowIcon" src={arrowIcon}/> */}
    </Link>
  );
}

export default CategoryItem;
