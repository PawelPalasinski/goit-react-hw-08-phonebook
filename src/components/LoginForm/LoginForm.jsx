import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if ((email && password) === '') {
      return;
    } else {
      dispatch(logIn({ email, password }));
      form.reset();
    }
  };

  return (
    <div className={styles.loginForm}>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input type="email" name="email" />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input type="password" name="password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
