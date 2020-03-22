import React from 'react';
import PropTypes from 'prop-types';
import styles from './Result.css';

const Result = ({ result }) => (
  <div className={styles.Result}>
    <h2 className={styles.title}>RESPONSE</h2>
    <pre className={styles.results}>{result}</pre>
  </div>
);

Result.propTypes = {
  result: PropTypes.string.isRequired
};

export default Result;
