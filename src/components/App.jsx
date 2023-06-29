import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const total = good + bad + neutral;
  const percentage = (good / total) * 100;
  const round = percentage.toFixed(2);

  const handleClick = ev => {
    if (ev.target.name === 'good') {
      setGood(good + 1);
    } else if (ev.target.name === 'bad') {
      setBad(bad + 1);
    } else {
      setNeutral(neutral + 1);
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section>
        <FeedbackOptions handleClick={handleClick} />
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          positivePercentage={round}
        />
        <Notification total={total} />
      </Section>
    </div>
  );
}
