import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 2px solid black;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 5px;
  transition: border-color 250ms ease;
  border: 2px solid black;
  :active,
  :hover,
  :focus {
    border-color: rgb(12, 63, 12);
  }
`;
