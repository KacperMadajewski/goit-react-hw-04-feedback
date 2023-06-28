import React, { Component } from 'react';
import Styles from './Section.module.css';
import PropTypes from 'prop-types';

export default class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className={Styles.backGround}>
        <h2 className={Styles.title}>{title}</h2>
        {children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array,
};
