import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar({ step = 1, totalSteps = 1 }) {
  const filledWidth = (100 / totalSteps) * step;

  return (
    <div className="progress-bar">
      <div
        className="progress-bar_fill"
        style={{ width: filledWidth + '%' }}
      ></div>
    </div>
  );
}

ProgressBar.propTypes = {
  step: PropTypes.number,
  totalSteps: PropTypes.number,
};

export default ProgressBar;
