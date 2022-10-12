import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/tasks/operations';

// import { useSelector } from 'react-redux';
// import {
//   useGetContactsQuery,
//   useDeleteContactMutation,
// } from '../../features/api/apiSlice';
import styles from './ContactList.module.css';

const ContactList = ({ children }) => {
  // const filtersContacts = (contacts, filter) =>
  //   contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  // const filter = useSelector(state => state.filter);

  // const { data: contacts = [] } = useGetContactsQuery();
  // const [deleteContact] = useDeleteContactMutation();
  // const contactsList = filtersContacts(contacts, filter);

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={styles.contacts}>
      {children}
      <h2>Contacts</h2>
      <ul>

        <li>
          <p>
            <span>
              {name}: {number}
            </span>
          </p>
          <button
            type="button"
            className={btn}
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            ⛌
          </button>
        </li>

      </ul>
    </div>
  );
};

export default ContactList;
