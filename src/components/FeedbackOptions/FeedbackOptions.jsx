import React, { Component } from 'react';
import Styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    const { forOpinion } = this.props;

    return (
      <div className={Styles.position}>
        <button name="good" className={Styles.btnGreen} onClick={forOpinion}>
          Good
        </button>
        <button name="neutral" className={Styles.btnBlue} onClick={forOpinion}>
          Neutral
        </button>
        <button name="bad" className={Styles.btnRed} onClick={forOpinion}>
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  forOpinion: PropTypes.func,
};
