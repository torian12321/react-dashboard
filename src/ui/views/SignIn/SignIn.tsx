import React, { useState } from "react";
import Card from 'ui/components/Card';
import Button from 'ui/components/Button';
import Field from 'ui/components/Field';
import Message from 'ui/components/Message';
// import firebase from "firebase/app";
import { createUserWithEmailAndPassword } from 'authActions';
import { googleAuth } from 'authActions';
import styles from './SignIn.module.scss';

export const SignIn = () => {
  const [email, setEmail]: any = useState('');
  const [password, setPassword]: any = useState('');
  const [passwordConfirm, setPasswordConfirm]: any = useState('');
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async() => {
    if (!email) {
      return setError("Missing email")
    }
    if (!email) {
      return setError("Missing Password")
    }
    if (password !== passwordConfirm) {
      return setError("Passwords do not match")
    }

    try {
      setError("");
      setLoading(true);

      await createUserWithEmailAndPassword(email, password);
      setLoading(false);
      // history.push("/")
    } catch {
      setError("Failed to log in");
      setLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      <Card>
        {!!error && <Message message={error} />}
        <Field
          required
          type='email'
          label='Email'
          placeholder='e.g. user@mail.com'
          onChange={setEmail}
        />
        <Field
          required
          type='password'
          label='Password'
          placeholder='1234567890'
          onChange={setPassword}
        />
        <Field
          required
          type='password'
          label='Password Confirmation'
          placeholder='1234567890'
          onChange={setPasswordConfirm}
        />
        <div className={styles.buttonsGroup}>
          <Button
            label='Sign In'
            onClick={handleSignIn}
            disabled={loading}
          />
          <div className={styles.or}>or</div>
          <Button
            outline
            label='Sign In with Google'
            onClick={googleAuth}
            disabled={loading}
          />
        </div>
      </Card>
    </div>
  );
};

export default SignIn;