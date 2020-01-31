import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryList = ({ history, onClick }) => {
  const historyElements = history.map(historyItem => (
    <li key={historyItem.method - historyItem.url}>
      <HistoryItem {...historyItem} onClick={onClick}/>
    </li>
  ));

  return (
    <ul>
      {historyElements}
    </ul>
  );
};

HistoryList.propTypes = {
  onClick: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }))
};

export default HistoryList;
