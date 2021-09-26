import React from 'react';

function ContainerWithHeadline(props) {
  const { children, headline } = props;
  return (
    <div className="container-with-head">
      <div className="headline">
        <h1 className="fz2 ttcap">{headline}</h1>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default ContainerWithHeadline;
