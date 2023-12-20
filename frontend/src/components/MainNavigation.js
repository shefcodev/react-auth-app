import { NavLink, useSubmit, useRouteLoaderData } from 'react-router-dom';

import styles from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {
  const submit = useSubmit();
  const token = useRouteLoaderData('root');

  const logoutHandler = () => {
    submit(null, { action: '/logout', method: 'post' });
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/events'
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/newsletter'
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
          {!token && (
            <li>
              <NavLink
                to='/auth?mode=login'
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Authentication
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
