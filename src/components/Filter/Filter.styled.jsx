import styled from '@emotion/styled';

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 250px;
  height: 15px;
  padding: 10px 10px 10px 30px;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: border-color 250ms ease;
  :active,
  :hover,
  :focus {
    border-color: rgb(12, 63, 12);
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  text-align: center;
`;
