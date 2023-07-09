import { LoginForm } from 'components/LoginForm/LoginForm';
import { Container } from 'components/container/container';

const LoginPage = () => {
  return (
    <Container>
      <h2>Login</h2>
      <p>Try it -> Email: thebrefff@gmail.com / Password: Qwerty2023! </p>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
