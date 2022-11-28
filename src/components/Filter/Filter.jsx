import React from 'react';
import { Input, Label } from './Filter.styled';
import { getFilterContact } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(getFilterContact(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={filter} onChange={handleChange} />
    </Label>
  );
};
