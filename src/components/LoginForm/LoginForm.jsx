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
      return
    } else {
      dispatch(logIn({ email, password }));
      form.reset();
    }
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
