import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import styles from './ContactItem.module.css'

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.contactItem}>
      <p>
        <span>{name}: </span>
        {number}
      </p>
      <button
        type="button"
        className={styles.btn}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        ⛌
      </button>
    </li>
  );
};

export default ContactItem