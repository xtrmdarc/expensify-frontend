import React from 'react';
import PropTypes from 'prop-types';

const ProgressDetailItem = props => {
  const { categoryName, expenses } = props;
  return (
    <div className="progressDetailItem">
      <span className="categoryName">{categoryName}</span>
      <span className="amountValue">
        {' '}
        $
        {(expenses.reduce((a, b) => a + b.value, 0)).toFixed(2)}
      </span>
    </div>
  );
};

ProgressDetailItem.propTypes = {
  categoryName: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
  })).isRequired,
};

export default ProgressDetailItem;
