import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Btn = ({ onClick, type }) => {
  return (
    <div className={styles.ButtonContainer} onClick={onClick}>
      <button type="button" className={styles.Button}>
        Go back
      </button>
    </div>
  );
};

export default Btn;

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
};
