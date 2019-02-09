import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function LoadingComponent() {
  return (
    <div className="loading d-flex justify-content-center">
      <CircularProgress />
    </div>
  );
}

export default LoadingComponent;
