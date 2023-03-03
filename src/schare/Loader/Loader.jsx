import { RotatingLines } from 'react-loader-spinner';

import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.ContainerLoader}>
      <RotatingLines
        strokeColor="#803fb5"
        strokeWidth="5"
        animationDuration="0.75"
        width="50"
        visible={true}
      />
    </div>
  );
};

export default Loader;
