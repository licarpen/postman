import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ onSubmit, onChange, url, body, method }) => (
  <form onSubmit={onSubmit} className={styles.Form}>
    <input type="text" name="url" value={url} placeholder="url" onChange={onChange} />
    <input type="radio" name="method" value="GET" checked={method === 'GET'} onChange={onChange} />GET
    <input type="radio" name="method" value="POST" checked={method === 'POST'} onChange={onChange} />POST
    <input type="radio" name="method" value="PUT" checked={method === 'PUT'} onChange={onChange} />PUT
    <input type="radio" name="method" value="PATCH" checked={method === 'PATCH'} onChange={onChange} />PATCH
    <input type="radio" name="method" value="DELETE" checked={method === 'DELETE'} onChange={onChange} />DELETE
    <input className={styles.body} type="text" name="body" value={body} placeholder="body" onChange={onChange} />
    <button>RESULT</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};

export default Form;
