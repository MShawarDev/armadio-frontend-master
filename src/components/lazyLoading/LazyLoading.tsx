import React, { FC } from 'react';

import './lazyLoading.scss';

const LazyLoading: FC = () => {
  return (
    <div className="lazyLoading">
      <div className="loading-spinner"></div>
      <h3 className="label-loading">{'Loading ...'}</h3>
    </div>
  );
};

export default LazyLoading;
