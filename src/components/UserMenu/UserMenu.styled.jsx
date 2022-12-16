import styled from '@emotion/styled';

export const UserLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  font-size: 25px;
  text-decoration: none;
  transition: 250ms color ease;
`;

export const UserName = styled.p`
  margin-right: 10px;
  margin-left: 10px;
  font-weight: 500;
  font-size: 20px;
  color: rgb(12, 63, 12);

  @media screen and (min-width: 768px) {
    margin-right: 20px;
    font-size: 25px;
  }
`;
