import React from 'react';
import { Link } from 'react-router-dom';
import TestImage from '../assets/img/test.svg';

const CategoryItem = props => {
  const { name } = props.categoryData;

  return (
    <Link to={`/expense/${name}`} href="#" className="categoryItem">
      <img src={TestImage} alt=""/>
      <span>{name}</span>
    </Link>
  );
}

export default CategoryItem;
