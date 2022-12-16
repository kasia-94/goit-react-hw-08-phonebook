import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const AuthNavLink = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
  transition: 250ms color ease;
  color: rgb(12, 63, 12);

  :hover,
  :focus {
    color: white;
  }
  &.active {
    color: white;
  }
  &:not(:last-child) {
    margin-right: 20px;
    @media screen and (min-width: 768px) {
      margin-right: 40px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;
