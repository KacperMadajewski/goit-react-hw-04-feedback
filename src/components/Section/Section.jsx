import Styles from './Section.module.css';
import React from 'react';

export function Section({children}) {
  return (
    <div className={Styles.backGround}>
      <h2 className={Styles.title}>Please leave feedback</h2>
      {children}
    </div>
  );
}
