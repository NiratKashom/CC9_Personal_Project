import React from 'react';

function ModalWithCloseBtn(props) {
  const { children, headline } = props;
  return (
    <div className="modal">
      <div className="modal-headline">
        <p className="fz15 ttcap">{headline}</p>
        <a href="#">
          <span class="material-icons-round">
            close
          </span>
        </a>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default ModalWithCloseBtn;
