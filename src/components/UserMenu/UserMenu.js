import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { SlLogout } from 'react-icons/sl';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.message}>
        Welcome,
        <span className={css.username}>{user.name}</span>{' '}
      </p>
      <button
        className={css.logoutBtn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout <SlLogout className={css.logoutBtnIcon} />
      </button>
    </div>
  );
};
