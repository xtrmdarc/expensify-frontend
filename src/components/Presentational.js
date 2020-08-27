import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SecurityWrapper from '../containers/SecurityWrapper';

const Presentational = () => {
  return (
    <Router>
      <SecurityWrapper />
    </Router>
  );
}

export default Presentational;