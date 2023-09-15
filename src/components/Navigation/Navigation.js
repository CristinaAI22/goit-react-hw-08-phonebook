import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';
import { SlHome } from 'react-icons/sl';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        <button type="button" className={css.linkButton}>
          {' '}
          <SlHome className={css.homeIcon} />
        </button>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
