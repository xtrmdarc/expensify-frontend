import React from 'react';
import arrowImg from '../assets/img/right_arrow.svg';
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
        <img className="arrowIcon" src={arrowImg} />
      </div>
    </div>
  );
}

export default ProgressItem;