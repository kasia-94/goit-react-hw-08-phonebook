import styled from '@emotion/styled';

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  width: 500px;
  padding: 10px;
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
    border-color: #6a6aec;
  }
`;

export const Button = styled.button`
  width: 100px;
  text-transform: capitalize;
  cursor: pointer;
  border: 1px solid lightgrey;
  border-radius: 3px;
  background-color: white;
  transition: background-color 250ms ease, border-color 250ms ease;
  :active,
  :hover {
    background-color: #6a6aec;
    border-color: #6a6aec;
  }
`;

export const Title = styled.h1`
  color: purple;
`;
