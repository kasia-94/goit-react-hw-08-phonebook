import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { UserLink, UserName } from './UserMenu.styled';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserLink>
      <UserName>{user.name}</UserName>
      <Button
        color="success"
        type="submit"
        variant="contained"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </UserLink>
  );
};
