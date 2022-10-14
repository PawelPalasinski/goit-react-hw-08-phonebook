import { InfinitySpin } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Spinner = () => {
  return (
    <div className={styles.Loader}>
          <InfinitySpin
              color="#808080"
              width={200}
          />
    </div>
  );
};

export default Spinner;
