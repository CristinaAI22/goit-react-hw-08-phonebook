import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { SlLogin } from 'react-icons/sl';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

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
    <div className={css.loginContainer}>
      <h2 className={css.loginTitle}>Login form</h2>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <div className={css.formContainer}>
          <label className={css.label}>Email:</label>
          <div className={css.inputContainer}>
            <MdEmail className={css.inputIcon} />
            <input className={css.input} type="email" name="email" />
          </div>
        </div>
        <div className={css.formContainer}>
          <label className={css.label}>Password:</label>
          <div className={css.inputContainer}>
            <RiLockPasswordFill className={css.inputIcon} />{' '}
            <input className={css.input} type="password" name="password" />
          </div>
        </div>
        <button className={css.loginBtn} type="submit">
          Log In <SlLogin className={css.loginBtnIcon} />
        </button>
      </form>
    </div>
  );
};
