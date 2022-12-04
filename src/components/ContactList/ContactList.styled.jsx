import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Button = styled.button`
  width: 100px;
  margin-left: 15px;
  text-transform: capitalize;
  cursor: pointer;
  border: 1px solid lightgrey;
  border-radius: 3px;
  background-color: white;
  transition: background-color 250ms ease, border-color 250ms ease;
  :active,
  :hover {
    background-color: purple;
    border-color: purple;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 30px;
`;

export const Name = styled.p`
  font-weight: 500;
`;
