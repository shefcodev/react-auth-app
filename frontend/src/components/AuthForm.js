import { Fragment } from 'react';
import { Form, Link, useSearchParams, useNavigate } from 'react-router-dom';

import styles from './AuthForm.module.css';

function AuthForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';

  return (
    <Fragment>
      <Form method='post' className={styles.form}>
        <h1>{isLogin ? 'Log in' : 'Sign up'}</h1>
        <p>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' name='email' required />
        </p>
        <p>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' name='password' required />
        </p>
        <div className={styles.actions}>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Sign up' : 'Log in'}
          </Link>
          <button>{isLogin ? 'Login' : 'Signup'}</button>
        </div>
      </Form>
    </Fragment>
  );
}

export default AuthForm;
