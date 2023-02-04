import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import { List } from './ContactList.styled';
import {
  selectFilter,
  selectContacts,
  selectError,
  selectLoading,
} from 'redux/contacts/selectors';
import {
  fetchContacts,
  deleteContact,
  // toggleLiked,
} from 'redux/contacts/operations';
import { Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';

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
                  minWidth: 200,
                  marginRight: 5,
                  marginBottom: 5,
                  color: 'rgb(12, 63, 12);',
                }}
                key={id}
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography>{number}</Typography>
                </CardContent>
                <ButtonList>
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
                  {/* <CardActions>
                    <ButtonSelected
                      color="success"
                      variant="contained"
                      onClick={() => dispatch(toggleLiked(id))}
                    >
                      <FavoriteIcon />
                    </ButtonSelected>
                  </CardActions> */}
                </ButtonList>
              </Card>
            ))}
          </List>
        </>
      )}
    </>
  );
};

export default ContactList;

export const ButtonSelected = styled(Button)`
  width: 30px;
  height: 30px;

  .isSelected {
    background-color: #fff;
    color: rgb(12, 63, 12);
  }

  :hover,
  :active,
  :focus {
    background-color: #fff;
    color: rgb(12, 63, 12);
  }
`;
const ButtonList = styled(CardContent)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
