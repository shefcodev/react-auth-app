import { Fragment } from 'react';
import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from 'react-router-dom';

import styles from './AuthForm.module.css';

function AuthForm() {
  const data = useActionData();
  const { state } = useNavigation();

  const isSubmitting = state === 'submitting';
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';

  return (
    <Fragment>
      <Form method='post' className={styles.form}>
        <h1>{isLogin ? 'Log in' : 'Sign up'}</h1>
        {!isSubmitting && data && data.errors && (
          <ul>
            {Object.values(data.errors).map((error, idx) => (
              <li key={idx} style={{ fontSize: '0.7rem' }}>
                {error}
              </li>
            ))}
          </ul>
        )}
        {!isSubmitting && data && data.message && (
          <p style={{ fontSize: '0.7rem' }}>{data.message}</p>
        )}
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
          <button disabled={isSubmitting}>
            {isSubmitting ? 'submitting...' : isLogin ? 'Login' : 'Signup'}
          </button>
        </div>
      </Form>
    </Fragment>
  );
}

export default AuthForm;
