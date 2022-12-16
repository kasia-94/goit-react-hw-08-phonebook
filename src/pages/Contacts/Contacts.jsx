import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { NonLoginPage } from 'components/NonLoginPage/NonLoginPage';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsBox } from './Contacts.styled';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import PermContactCalendarTwoToneIcon from '@mui/icons-material/PermContactCalendarTwoTone';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoggedIn ? (
        <ContactsBox>
          <h1>
            <LibraryBooksTwoToneIcon fontSize="medium" />
            Phonebook
          </h1>
          <ContactForm />
          <h2>
            <PermContactCalendarTwoToneIcon fontSize="medium" />
            Contacts
          </h2>
          <Filter />
          <ContactList />
        </ContactsBox>
      ) : (
        <NonLoginPage />
      )}
    </>
  );
};

export default Contacts;
