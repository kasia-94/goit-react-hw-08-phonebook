// import { Button } from './FilerButton.styled';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const FilterButton = ({ selected = false, children, ...otherProps }) => {
  return (
    <ButtonSelected
      style={{ [ButtonSelected.isSelected]: selected }}
      {...otherProps}
    >
      {children}
    </ButtonSelected>
  );
};

export const ButtonSelected = styled(Button)`
  width: 40px;
  height: 40px;

  .isSelected {
    background-color: #fff;
    color: rgb(12, 63, 12);
  }

  :hover,
  :active {
    background-color: #fff;
    color: rgb(12, 63, 12);
  }
`;
