import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ onSubmit, onChange, url }) => (
  <form onSubmit={onSubmit} className={styles.Form}>
    <input type="text" name="url" value={url} placeholder="url" onChange={onChange} />
    <input readOnly type="radio" name="method" value="GET" onChange={onChange} />GET
    <input readOnly type="radio" name="method" value="POST" onChange={onChange} />POST
    <input readOnly type="radio" name="method" value="PUT" onChange={onChange} />PUT
    <input readOnly type="radio" name="method" value="PATCH" onChange={onChange} />PATCH
    <input readOnly type="radio" name="method" value="DELETE" onChange={onChange} />DELETE
    <button>RESULT</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
};

export default Form;
