import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ method, url, body, onClick }) => (
  <div onClick={() => {onClick(method, url, body);}}>
    <h2>{method}</h2>
    <p>{url}</p>
  </div>
);

HistoryItem.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default HistoryItem;
