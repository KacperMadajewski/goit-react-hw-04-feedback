import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { CountGoodContext, CountBadContext, CountNeutralContext } from 'Context/Context';
import { useState } from 'react';

export function App() {

    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    const [neutral, setNeutral] = useState(0);



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
        <CountGoodContext.Provider value={good}>
          <CountBadContext.Provider value={bad}>
            <CountNeutralContext.Provider value={neutral}>
              <Section>
                <FeedbackOptions />
                <Statistics />
                <Notification />
              </Section>
            </CountNeutralContext.Provider>
          </CountBadContext.Provider>
        </CountGoodContext.Provider>
      </div>
    );
  }
