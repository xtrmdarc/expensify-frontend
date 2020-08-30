import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CategoryItem = props => {
  const { categoryData } = props;
  const { name, id } = categoryData;

  return (
    <Link to={`/expense/${id}`} className="categoryItem">
      <span>{name}</span>
    </Link>
  );
};

CategoryItem.propTypes = {
  categoryData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default CategoryItem;
