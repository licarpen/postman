import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ onSubmit, onChange, url }) => (
  <form onSubmit={onSubmit} onChange={onChange} className={styles.Form}>
    <input type="text" name="url" value={url} placeholder="url"/>
    <button>GET RESULT</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  url: PropTypes.func.isRequired
};

export default Form;
