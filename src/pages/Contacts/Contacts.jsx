import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <div>{isLoading && 'Request in progress...'}</div>
          <ContactList />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Contacts;

// <>
//   <Container>
//     {isLoggedIn ? (
//       <>
//         <MainTitle>PHONEBOOK</MainTitle>
//         {modalIsOpen && (
//           <Modal toggleModal={() => setModalIsOpen(!modalIsOpen)}>
//             <ContactForm toggleModal={() => setModalIsOpen(!modalIsOpen)} />
//           </Modal>
//         )}
//         <EditMenu toggleModal={() => setModalIsOpen(!modalIsOpen)} />
//         <ContactTitle>CONTACTS</ContactTitle>
//         <ContactList />
//       </>
//     ) : (
//       <NotLoggedInContainer />
//     )}
//   </Container>
//   <Footer />
// </>;
