import React from 'react';
import arrowImg from '../assets/img/right_arrow.svg';
const ProgressItem  = props => {

  const { progressData } = props;
  const progressDateString = new Date(progressData.date).toLocaleString('en-us', { month: 'long'});

  return (
    <div className="progressItem">
      <div className="leftSection">
        <h4>{progressDateString}</h4>
        <span className=""></span>
      </div>
      <div className="rightSection">
        <span className="diff">${progressData.totalAmount.toFixed(2)}</span>
        <img className="arrowIcon" src={arrowImg} />
      </div>
    </div>
  );
}

export default ProgressItem;