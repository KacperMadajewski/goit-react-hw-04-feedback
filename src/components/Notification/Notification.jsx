import React, { Component } from 'react';
import Styles from './Notifications.module.css';
import PropTypes from 'prop-types';

export class Notification extends Component {
  render() {
    const { total, message } = this.props;

    const visibility = () => {
      if (total === 0) {
        return Styles.visibile;
      } else {
        return Styles.hidden;
      }
    };

    return (
      <div className={visibility()}>
        <h4 className={Styles.message}>{message}</h4>
      </div>
    );
  }
}

Notification.propTypes = {
  total: PropTypes.number,
  message: PropTypes.string,
};
