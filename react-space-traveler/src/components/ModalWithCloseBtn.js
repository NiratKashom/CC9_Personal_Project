import React from 'react';

function ModalWithCloseBtn(props) {
  const { children, headline, addClass } = props;
  return (
    <div className="modal">
      <div className="modal-headline">
        <p className="fz15 ttcap">{headline}</p>
        <button type="button" className="material-icons-round">
          close
        </button>
      </div>
      <div className={`content ${addClass || ''}`}>
        {children}
      </div>
    </div>
  );
}

export default ModalWithCloseBtn;
