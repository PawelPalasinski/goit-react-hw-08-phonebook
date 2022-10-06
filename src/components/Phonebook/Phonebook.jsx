import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import { useGetContactsQuery } from '../../features/api/apiSlice';
import Filter from '../Filter/Filter';
import NoContactsMessage from '../NoContactsMessage/NoContactsMessage';

const Phonebook = () => {
  const { data: contacts = [] } = useGetContactsQuery();

  return (
    <>
      <ContactForm />
      {contacts.length > 0 ? (
        <ContactList>
          <Filter />
        </ContactList>
      ) : (
        <NoContactsMessage />
      )}
    </>
  );
};

export default Phonebook;
