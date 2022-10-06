import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/slices/filter';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    e.preventDefault();
    const value = e.currentTarget.value;
    dispatch(filterContacts(value));
  };

  return (
    <input
      className={styles.filter}
      type="text"
      onChange={changeFilter}
      placeholder="Enter name for Search"
    />
  );
};

export default Filter;
