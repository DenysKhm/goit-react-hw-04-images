import { useEffect } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ closeModal, largeImageURL, tags }) => {
  useEffect(() => {
    const closeByEsc = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', closeByEsc);

    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [closeModal]);

  // componentDidMount() {
  //     window.addEventListener('keydown', this.closeByEsc);
  //   }

  //   componentWillUnmount() {
  //     window.removeEventListener('keydown', this.closeByEsc);
  //   }

  const closeByBackdrop = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={s.Overlay} onClick={closeByBackdrop}>
      <div className={s.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
