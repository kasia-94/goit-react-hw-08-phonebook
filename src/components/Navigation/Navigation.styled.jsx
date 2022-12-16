import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 30px;
  list-style: none;
  background-color: #3f51b5;
`;

export const MenuItem = styled.li`
  margin-right: 40px;
`;

export const MenuLink = styled(NavLink)`
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

export const MenuNav = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
