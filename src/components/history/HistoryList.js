import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryList = ({ history }) => {
  const historyElements = history.map(historyItem => (
    <li key={historyItem.method - historyItem.url}>
      <HistoryItem {...historyItem}/>
    </li>
  ));

  return (
    <ul>
      {historyElements}
    </ul>
  );
};

HistoryList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
  }))
};

export default HistoryList;
