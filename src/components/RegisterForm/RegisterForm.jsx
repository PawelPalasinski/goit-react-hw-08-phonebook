import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget.form;
    const { name, email, password } = form.elements;

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );

    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={styles.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={styles.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
