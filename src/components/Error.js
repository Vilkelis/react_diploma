import React from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';
 
function Error(props) {
  const alertProps = {...props, kind: 'danger'};

  if (props.text) {
    return (
      <div className="error">
        <Alert {...alertProps} />
      </div>
    );
  } else {
    return null;
  }
}

Error.propTypes = {
  text: PropTypes.string,
  handleRetry: PropTypes.func 
}

export default Error;