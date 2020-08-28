import React from 'react';
import arrowImg from '../assets/img/right_arrow.svg';
const ProgressItem  = props => {

  const { progressData, prevData } = props;
  const progressDateString = new Date(progressData.date).toLocaleString('en-us', { month: 'long'});

  let lastCicleDiff;

  if(prevData) {
    const diff = progressData.totalAmount - prevData.totalAmount;
    const styles = {
      fontSize: '14px',
    };
    if(diff < 0) {
      styles.color = 'green';
      lastCicleDiff = <span style={styles} >-${Math.abs(diff).toFixed(2)}</span> 
    } else {
      styles.color = 'red';
      lastCicleDiff = <span style={styles} >+${Math.abs(diff).toFixed(2)}</span>
    }
  }
  

  return (
    <div className="progressItem">
      <div className="leftSection">
        <h4>{progressDateString}</h4>
        {lastCicleDiff}
      </div>
      <div className="rightSection">
        <span className="diff">${progressData.totalAmount.toFixed(2)}</span>
        <img className="arrowIcon" src={arrowImg} />
      </div>
    </div>
  );
}

export default ProgressItem;