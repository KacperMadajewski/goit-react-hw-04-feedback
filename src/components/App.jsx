import Section from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

import { Component } from 'react';

export class App extends Component {
  static defaultProps = {
    step: 1,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  /*
  *
 *  POPRAWNA I DZIAŁAJĄCA FUNKCJA
 *  WYMIENNIE Z FUNKCJĄ SWITCH
 * 
        counter = ({ target }) => {
          const { name } = target;
          if (name === 'good') {
            this.setState((state, props) => {
              return { good: state.good + props.step };
            });
          } else if (name === 'bad') {
            this.setState((state, props) => {
              return { bad: state.bad + props.step };
            });
          } else if (name === 'neutral') {
            this.setState((state, props) => {
              return { neutral: state.neutral + props.step };
            });
          }
        };
  */

  counter2 = ({ target }) => {
    const { name } = target;
    switch (name) {
      case 'good':
        this.setState((state, props) => {
          return { good: state.good + props.step };
        });
        break;
      case 'bad':
        this.setState((state, props) => {
          return { bad: state.bad + props.step };
        });
        break;
      case 'neutral':
        this.setState((state, props) => {
          return { neutral: state.neutral + props.step };
        });
        break;
      default:
        console.log('Something went wrong!');
    }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const percentage = (this.state.good / total) * 100;
    const round = percentage.toFixed(2);
    return round;
  };
  render() {
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
        <Section title="Please leave feedback">
          <FeedbackOptions forOpinion={this.counter2} />
          <Statistics
            goodNum={this.state.good}
            neutralNum={this.state.neutral}
            badNum={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          <Notification
            total={this.countTotalFeedback()}
            message={'There is no feedback'}
          />
        </Section>
      </div>
    );
  }
}
