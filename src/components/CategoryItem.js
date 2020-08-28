import React from 'react';
import { Link } from 'react-router-dom';
import TestImage from '../assets/img/test.svg';
import arrowIcon from '../assets/img/right_arrow.svg';

const CategoryItem = props => {
  const { name, id } = props.categoryData;

  return (
    <Link to={`/expense/${id}`} href="#" className="categoryItem">
      <span>{name}</span>
    </Link>
  );
}

export default CategoryItem;
