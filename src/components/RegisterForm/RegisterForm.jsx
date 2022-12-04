import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
// import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Title } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  // const signupSchema = Yup.object().shape({
  //   name: Yup.string().min(2, 'Too Short!').required('This field is required'),
  //   email: Yup.string()
  //     .email('Invalid email')
  //     .required('This field is required'),
  //   password: Yup.string()
  //     .min(2, 'Too Short!')
  //     .required('This field is required'),
  // });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Title>Registration</Title>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        color="purple"
        autoComplete="off"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
      >
        <TextField
          id="name"
          label="Username"
          variant="outlined"
          type="text"
          name="name"
          color="secondary"
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          color="secondary"
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          color="secondary"
        />
        <Button
          color="secondary"
          type="submit"
          variant="contained"
          endIcon={<HowToRegIcon />}
        >
          Register
        </Button>
      </Box>
    </>
  );
};
