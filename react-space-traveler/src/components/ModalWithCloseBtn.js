import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { summaryContext } from '../contexts/summaryContext';



function ModalWithCloseBtn(props) {
  const { children, headline, addClass } = props;
  const { setStep } = useContext(summaryContext);
  const history = useHistory();

  const hdlClickCloseBtn = () => {
    if (headline === 'complete booking') {
      setStep(0);
      history.push('/schedule-flight');
    }
  };



  return (
    <div className="modal">
      <div className="modal-headline">
        <p className="fz15 ttcap">{headline}</p>
        <button onClick={hdlClickCloseBtn} type="button" className="material-icons-round">
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
