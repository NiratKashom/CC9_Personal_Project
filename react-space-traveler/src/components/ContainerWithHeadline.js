import React from 'react';

function ContainerWithHeadline(props) {
  const { children, headline, addClass } = props;
  return (
    <div className="container-with-head overflow">
      <div className="headline">
        <h1 className="fz15 ttcap">{headline}</h1>
      </div>
      <div className={`p125 pt0 ${addClass || ''}`}>
        {children}
      </div>
    </div>
  );
}

export default ContainerWithHeadline;
