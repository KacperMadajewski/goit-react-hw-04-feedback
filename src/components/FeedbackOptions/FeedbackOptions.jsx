import {
  CountGoodContext,
  CountBadContext,
  CountNeutralContext,
} from 'Context/Context';
import Styles from './FeedbackOptions.module.css';
import { useContext } from 'react';

export function FeedbackOptions() {
  const [good, setGood] = useContext(CountGoodContext);
  const [bad, setBad] = useContext(CountBadContext);
  const [neutral, setNeutral] = useContext(CountNeutralContext);

  function handleClickGood() {
    setGood(good + 1);
  }

  function handleClickBad() {
    setBad(bad + 1);
  }

  function handleClickNeutral() {
    setNeutral(neutral + 1);
  }

  return (
    <div className={Styles.position}>
      <button name="good" className={Styles.btnGreen} onClick={handleClickGood}>
        Good
      </button>
      <button
        name="neutral"
        className={Styles.btnBlue}
        onClick={handleClickBad}
      >
        Neutral
      </button>
      <button name="bad" className={Styles.btnRed} onClick={handleClickNeutral}>
        Bad
      </button>
    </div>
  );
}
