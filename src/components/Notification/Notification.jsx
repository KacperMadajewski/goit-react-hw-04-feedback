import Styles from './Notifications.module.css';
import React from 'react';
import PropTypes from 'prop-types';


export function Notification({total}) {
  const visibility = () => {
    if (total === 0) {
      return Styles.visibile;
    } else {
      return Styles.hidden;
    }
  };

  return (
    <div className={visibility()}>
      <h4 className={Styles.message}>There is no feedback</h4>
    </div>
  );
}


Notification.propTypes = {
  total: PropTypes.any,
};