import { useSelector, useDispatch } from 'react-redux';
import { FilterButton } from 'components/FilterButton/FilterButton';
import { statusFilters } from 'redux/filter/constants';
import { selectStatusFilter } from 'redux/contacts/selectors';
import { setStatusFilter } from 'redux/filter/filtersSlice';
import { Container } from './FilterStatus.styled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const FilterStatus = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <Container>
      <FilterButton
        color="success"
        variant="contained"
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </FilterButton>
      <FilterButton
        color="success"
        variant="contained"
        selected={filter === statusFilters.selected}
        onClick={() => handleFilterChange(statusFilters.selected)}
      >
        <FavoriteBorderIcon />
      </FilterButton>
    </Container>
  );
};
