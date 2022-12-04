import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { UserLink, UserName } from './UserMenu.styled';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserLink>
      <InsertEmoticonIcon />
      <UserName>{user.name}</UserName>
      <Button
        color="secondary"
        type="submit"
        variant="contained"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </UserLink>
  );
};
