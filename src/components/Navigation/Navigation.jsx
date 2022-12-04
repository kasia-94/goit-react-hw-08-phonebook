import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Menu, MenuLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <MenuLink to="/">Home</MenuLink>
      {isLoggedIn && <MenuLink to="/contacts">Contacts</MenuLink>}
    </nav>
  );
};
