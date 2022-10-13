import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhoneBook from '../../components/Phonebook/Phonebook';
import ContactsList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
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
    <div>
      <PhoneBook />
      <ContactsList>
        <Filter />
        {isLoading && <p>'Loading'</p>}
      </ContactsList>
    </div>
  );
}
