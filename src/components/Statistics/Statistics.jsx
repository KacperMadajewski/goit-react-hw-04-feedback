import Styles from './Statistics.module.css';
import { useContext } from 'react';
import {
  CountBadContext,
  CountGoodContext,
  CountNeutralContext,
} from 'Context/Context';

export function Statistics() {
  const good = useContext(CountGoodContext);
  const bad = useContext(CountBadContext);
  const neutral = useContext(CountNeutralContext);
  const total = good + neutral + bad;

  const list = () => {
    if (total === 0) {
      return Styles.hidden;
    } else {
      return Styles.visible;
    }
  };

  return (
    <ul className={list()}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      {/* <li>Positive percentage: {positivePercentage}%</li> */}
    </ul>
  );
}

// countPositiveFeedbackPercentage = () => {
//   const total = this.state.good + this.state.neutral + this.state.bad;
//   const percentage = (this.state.good / total) * 100;
//   const round = percentage.toFixed(2);
//   return round;
// };
