import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ result }) => (
  <>
    <pre>{result}</pre>
  </>
);

Result.propTypes = {
  result: PropTypes.string.isRequired
};

export default Result;
