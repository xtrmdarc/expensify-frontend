import React from 'react';

const ProgressItem  = props => {

  const { progressData } = props;
  const progressDate = new Date(progressData.date);
  console.log (progressDate);
  return (
    <div className="progressItem">
      <div className="leftSection">
        <h4>{progressDate.toDateString()}</h4>
        <span className=""></span>
      </div>
      <div className="rightSection">
        <span className="diff"></span>
      </div>
    </div>
  );
}

export default ProgressItem;