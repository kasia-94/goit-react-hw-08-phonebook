import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 250px;
  height: 15px;
  padding: 10px;
  margin-top: 5px;
  transition: border-color 250ms ease;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  :active,
  :hover,
  :focus {
    border-color: rgb(12, 63, 12);
  }
`;

export const Title = styled.h1`
  text-align: center;
`;
