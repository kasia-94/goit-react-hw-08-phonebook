import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterBox } from './Register.styled';

const Register = () => {
  return (
    <RegisterBox>
      <title>Registration</title>
      <RegisterForm />
    </RegisterBox>
  );
};

export default Register;
