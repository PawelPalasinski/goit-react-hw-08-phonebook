import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PhoneBook } from '../../components/phoneBook/PhoneBook';
import { ContactsList } from '../../components/contactsList/ContactsList';
import { SearchFilter } from '../../components/searchFilter/SearchFilter';
import { Section } from '../../components/section/Section';
import { selectLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
// import styles from './Contacts.module.css';

export default function Contacts() {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <div
        //   className={styles.wrapper}
      >
      <Section title="Phonebook">
        <PhoneBook />
      </Section>
      <Section title="Contacts">
        <SearchFilter />
        {isLoading && <p>'Loading'</p>}
        <ContactsList />
      </Section>
    </div>
  );
}
