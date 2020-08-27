import React from 'react';

const ProgressItem  = props => {

  const { progressData, progressDate } = props;
  const progressDateString = new Date(progressDate).toDateString();

  return (
    <div className="progressItem">
      <div className="leftSection">
        <h4>{progressDateString}</h4>
        <span className=""></span>
      </div>
      <div className="rightSection">
        <span className="diff">${progressData.totalAmount}</span>
      </div>
    </div>
  );
}

export default ProgressItem;