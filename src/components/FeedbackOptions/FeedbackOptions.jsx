import Styles from './FeedbackOptions.module.css';
import React from 'react';
import PropTypes from 'prop-types';


export function FeedbackOptions({ handleClick }) {

  return (
    <div className={Styles.position}>
      <button
        name="good"
        className={Styles.btnGreen}
        onClick={() => handleClick({ target: { name: 'good' } })}
      >
        Good
      </button>
      <button
        name="neutral"
        className={Styles.btnBlue}
        onClick={() => handleClick({ target: { name: 'neutral' } })}
      >
        Neutral
      </button>
      <button
        name="bad"
        className={Styles.btnRed}
        onClick={() => handleClick({ target: { name: 'bad' } })}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  handleClick: PropTypes.func,
};