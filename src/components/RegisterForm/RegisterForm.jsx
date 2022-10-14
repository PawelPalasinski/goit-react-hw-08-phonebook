import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    dispatch(register({ name, email, password }));

    form.reset();
  };

  return (
    <div className={styles.registerForm}>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.label} htmlFor="name">
          Username
        </label>
        <input type="text" name="name" />
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input type="email" name="email" />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input type="password" name="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
