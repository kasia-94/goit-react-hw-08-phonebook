import React from 'react';
import { Input, Label, Title } from './Filter.styled';
import { getFilterContact } from 'redux/contacts/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import SearchIcon from '@mui/icons-material/Search';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(getFilterContact(e.target.value));
  };

  return (
    <Label>
      <Title>Find contacts by name</Title>
      <SearchIcon
        fontSize="small"
        style={{ position: 'absolute', bottom: 10, left: 8 }}
      />
      <Input type="text" name="filter" value={filter} onChange={handleChange} />
    </Label>
  );
};
