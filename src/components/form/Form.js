import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ onSubmit, onChange, url }) => (
  <form onSubmit={onSubmit} onChange={onChange} className={styles.Form}>
    <input type="text" name="url" value={url} placeholder="url"/>
    <input type="radio" name="method" value="GET"/>GET
    <input type="radio" name="method" value="POST"/>POST
    <input type="radio" name="method" value="PUT"/>PUT
    <input type="radio" name="method" value="PATCH"/>PATCH
    <input type="radio" name="method" value="DELETE"/>DELETE
    <button>RESULT</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  url: PropTypes.func.isRequired
};

export default Form;
