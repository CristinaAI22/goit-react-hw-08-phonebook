import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { BiSolidUserRectangle } from 'react-icons/bi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted');
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setSuccessMessage('');
    setRegistrationError('');

    const validateName = /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const validateEmail = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; ///nu merge din cauza API ului
    const validatePassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!name) {
      setNameError('Please enter your name.');
      return;
    }
    if (!validateName.test(name)) {
      setNameError('Please enter a valid name.');
      return;
    }
    if (!email) {
      setEmailError('Please enter your email.');
      return;
    }
    if (!validateEmail.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    if (!password) {
      setPasswordError('Please enter your password.');
      return;
    }
    if (!validatePassword.test(password)) {
      setPasswordError(
        'Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number.'
      );
      return;
    }
    const registrationData = { name, email, password };

    dispatch(register(registrationData))
      .then(() => {
        setSuccessMessage('Registration successful!');
        setTimeout(() => {
          setSuccessMessage('');
        }, 2000);
        setName('');
        setEmail('');
        setPassword('');
        setRegistrationError('');
      })
      .catch(err => {
        console.error(err);
        setRegistrationError('Registration failed!');
      });
  };
  return (
    <div className={css.registerContainer}>
      <h2 className={css.registerTitle}>Register form</h2>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <div className={css.formContainer}>
          <label className={css.label}>Username:</label>
          <div className={css.inputContainer}>
            <input
              className={css.input}
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              onDoubleClick={e => e.target.select()}
            />
            <BiSolidUserRectangle className={css.inputIcon} />
          </div>

          {nameError && <p className={css.error}>{nameError}</p>}
        </div>
        <div className={css.formContainer}>
          <label className={css.label}>Email:</label>
          <div className={css.inputContainer}>
            <input
              className={css.input}
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onDoubleClick={e => e.target.select()}
            />
            <MdEmail className={css.inputIcon} />
          </div>

          {emailError && <p className={css.error}>{emailError}</p>}
        </div>
        <div className={css.formContainer}>
          <label className={css.label}>Password:</label>
          <div className={css.inputContainer}>
            <input
              className={css.input}
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onDoubleClick={e => e.target.select()}
            />
            <RiLockPasswordFill className={css.inputIcon} />
          </div>

          {passwordError && <p className={css.error}>{passwordError}</p>}
        </div>
        <button className={css.registerBtn} type="submit">
          Register
        </button>
        {registrationError && <p className={css.error}>{registrationError}</p>}
        {successMessage && <p className={css.success}>{successMessage}</p>}
      </form>
    </div>
  );
};
