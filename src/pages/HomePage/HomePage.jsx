import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: 'purple',
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Personal Phonebook <ContactPhoneIcon fontSize="large" />
      </h1>
    </div>
  );
};
export default HomePage;
