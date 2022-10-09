import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget.form;
    const { email, password } = form.elements;

    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );

    form.reset();
  };

    return (
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={styles.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    );
};

export default LoginForm;
