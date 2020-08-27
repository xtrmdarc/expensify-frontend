import React from 'react';
import { Link } from 'react-router-dom';
import TestImage from '../assets/img/test.svg';
import arrowIcon from '../assets/img/right_arrow.svg';

const CategoryItem = props => {
  const { name, id } = props.categoryData;

  return (
    <Link to={`/expense/${id}`} href="#" className="categoryItem">
      <img className="categoryImg" src={TestImage} alt=""/>
      <span>{name}</span>
      <img className="arrowIcon" src={arrowIcon}/>
    </Link>
  );
}

export default CategoryItem;
