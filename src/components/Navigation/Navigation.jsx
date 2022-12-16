import { useAuth } from 'hooks/useAuth';
import { MenuLink, MenuNav } from './Navigation.styled';
import HomeIcon from '@mui/icons-material/Home';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MenuNav>
      <MenuLink to="/">
        <HomeIcon fontSize="large" />
      </MenuLink>
      {isLoggedIn && <MenuLink to="/contacts">My contacts</MenuLink>}
    </MenuNav>
  );
};
