import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { modalContext } from 'context/createModalContext';
import icon from 'img/sprite.svg';
import css from './ModalProvider.module.css';

const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };
  const handleCloseModal = useCallback((e) => {
    if (
      e.target === e.currentTarget ||
      e.code === 'Escape' ||
      e.type === 'submit'
    ) {
      setModalContent(null);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => window.removeEventListener('keydown', handleCloseModal);
  }, [handleCloseModal]);

  useEffect(() => {
    if (modalContent) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [modalContent]);

  return (
    <modalContext.Provider
      value={{ modalContent, openModal, handleCloseModal }}>
      {children}
      {modalContent &&
        createPortal(
          <div
            className={css.modalBackdrop}
            onClick={handleCloseModal}>
            <div className={css.modalWrapper}>
              {modalContent}
              <button
                className={css.closeBtn}
                onClick={handleCloseModal}
                type='button'
                aria-label='close-button'>
                <svg role='img'>
                  <use xlinkHref={`${icon}#icon-x`} />
                </svg>
              </button>
            </div>
          </div>,
          document.querySelector('#modal-root'),
        )}
    </modalContext.Provider>
  );
};

export default ModalProvider;
