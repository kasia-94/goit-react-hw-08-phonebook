import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Title } from './LoginForm.styled';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Title>Login to your account</Title>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
      >
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          color="success"
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          color="success"
        />
        <Button
          color="success"
          type="submit"
          variant="contained"
          endIcon={<CheckIcon />}
        >
          Log In
        </Button>
      </Box>
    </>

    // <Form onSubmit={handleSubmit} autoComplete="off">
    //   <Label>
    //     Email
    //     <Input type="email" name="email" />
    //   </Label>
    //   <Label>
    //     Password
    //     <Input type="password" name="password" />
    //   </Label>
    //   <Button variant="outlined" type="submit">
    //     Log In
    //   </Button>
    // </Form>
  );
};
