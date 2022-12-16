import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List } from './ContactList.styled';
import {
  selectFilter,
  selectContacts,
  selectError,
  selectLoading,
} from 'redux/contacts/selectors';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchContacts(controller));
    return () => controller.abort();
  }, [dispatch]);

  const showContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return (
    <>
      {isLoading && <Loader />}
      {error && toast.error(`${error.message}`)}
      {contacts.length > 0 && (
        <>
          <List>
            {showContact().map(({ id, name, number }) => (
              <Card
                sx={{
                  minWidth: 250,
                  marginRight: 5,
                  marginBottom: 5,
                  color: 'rgb(12, 63, 12);',
                }}
                key={id}
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    {bull}
                    {name}
                    {bull}
                  </Typography>
                  <Typography>{number}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="success"
                    variant="contained"
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            ))}
          </List>
        </>
      )}
    </>
  );
};

export default ContactList;
