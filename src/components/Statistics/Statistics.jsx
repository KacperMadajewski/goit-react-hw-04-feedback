import Styles from './Statistics.module.css';
import React from 'react';


export function Statistics({good, bad, neutral, total, positivePercentage}) {

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
      <li>Positive percentage: {positivePercentage}%</li>
    </ul>
  );
}
