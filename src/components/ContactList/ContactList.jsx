import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../features/api/apiSlice';
import styles from './ContactList.module.css';

const ContactList = ({ children }) => {
  const filtersContacts = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const filter = useSelector(state => state.filter);

  const { data: contacts = [] } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const contactsList = filtersContacts(contacts, filter);

  return (
    <div className={styles.contacts}>
      {children}
      <h2>Contacts</h2>
      <ul>
        {contactsList.map(({ name, phone, id }) => (
          <li key={id} id={id}>
            <p>
              <span>{name} : </span>
              {phone}
            </p>
            <button type="button" onClick={() => deleteContact({ id })}>
              ⛌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
