import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from 'components/RegisterForm/RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

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
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input className={css.input} type="text" name="name" required />
      </label>
      <label className={css.label}>
        Email
        <input className={css.input} type="email" name="email" required />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.input}
          type="password"
          name="password"
          required
          minlength="7"
        />
      </label>
      <button className={css.btn} type="submit">
        Register
      </button>
    </form>
  );
};
