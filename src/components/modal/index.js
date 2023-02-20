import React from 'react';

import style from './modal.module.scss';

const Modal = ({ open, children, className, handleClose }) => {
  const handleClickWrapper = (event) => {
    event.nativeEvent.stopImmediatePropagation();
    handleClose?.();
  };

  return (
    <>
      {open && (
        <div
          className={style.modalWrapper}
          onClick={(e) => handleClickWrapper(e)}
        >
          <div
            className={`${style.modalContentWrapper} ${className}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={style.body}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
