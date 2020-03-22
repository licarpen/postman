import React from 'react';
import PropTypes from 'prop-types';
import styles from './Result.css';

const Result = ({ result }) => (
  <div className={styles.Result}>
    <pre>{result}</pre>
  </div>
);

Result.propTypes = {
  result: PropTypes.string.isRequired
};

export default Result;
