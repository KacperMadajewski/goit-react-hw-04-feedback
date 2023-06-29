import Styles from './FeedbackOptions.module.css';
import React from 'react';

export function FeedbackOptions({ handleClick }) {
  // function handleClickGood() {
  //   setGood(good + 1);
  // }

  // function handleClickBad() {
  //   setBad(bad + 1);
  // }

  // function handleClickNeutral() {
  //   setNeutral(neutral + 1);
  // }

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
