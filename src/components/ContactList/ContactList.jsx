import ContactItem from '../ContactItem/ContactItem';
import NoContactsMessage from '../NoContactsMessage/NoContactsMessage';

import { useSelector } from 'react-redux';
import {
  selectAllContacts,
  selectLoading,
} from '../../redux/contacts/selectors';

import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const isLoading = useSelector(selectLoading);

  const filter = useSelector(state => state.filter);
  const viewContacts = contacts
    .filter(cont => cont.name.toLowerCase().includes(filter))
    .sort((first, second) => first.name.localeCompare(second.name));
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {contacts?.length > 0 ? (
        <div className={styles.contacts}>
          <ul>
            {viewContacts.map(({ id, name, number }) => (
              <ContactItem key={id} id={id} name={name} number={number} />
            ))}
          </ul>
        </div>
      ) : (
        <NoContactsMessage />
      )}
    </div>
  );
};

export default ContactList;
