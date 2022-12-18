import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { NonLoginPage } from 'pages/NonLoginPage/NonLoginPage';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsBox, TitleSecond } from './Contacts.styled';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import PermContactCalendarTwoToneIcon from '@mui/icons-material/PermContactCalendarTwoTone';
import { FilterStatus } from 'components/FilterStatus/FilterStatus';

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
            <LibraryBooksTwoToneIcon
              fontSize="medium"
              style={{ marginRight: 5 }}
            />
            Phonebook
          </h1>
          <ContactForm />
          <TitleSecond>
            <PermContactCalendarTwoToneIcon
              fontSize="medium"
              style={{ marginRight: 5 }}
            />
            Contacts
          </TitleSecond>
          <Filter />
          <FilterStatus />
          <ContactList />
        </ContactsBox>
      ) : (
        <NonLoginPage />
      )}
    </>
  );
};

export default Contacts;
