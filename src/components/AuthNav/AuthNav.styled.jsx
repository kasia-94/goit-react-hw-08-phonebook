import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const AuthNavLink = styled(NavLink)`
  font-weight: 500;
  font-size: 25px;
  color: purple;
  text-decoration: none;
  transition: 250ms color ease;

  :hover,
  :focus {
    color: white;
  }
  &.active {
    color: white;
  }
  &:not(:last-child) {
    margin-right: 40px;
  }
`;
