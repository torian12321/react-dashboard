import React, { useState } from "react";
import Card from 'ui/components/Card';
import Button from 'ui/components/Button';
import Field from 'ui/components/Field';
import firebase from "firebase/app";
import styles from './SignIn.module.scss';

export const SignIn = () => {
  const [email, setEmail]: any = useState('');
  const [password, setPassword]: any = useState('');
  // const passwordConfirmRef: any = useRef();
  // const { signup, signupGoogle }: any = useAuth();
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  // const history = useHistory();

  // const handleSignIn = () => {
  //   const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  //   firebase.auth().signInWithPopup(googleAuthProvider);
  // };

  async function handleSignIn(e: Event) {
    // e.preventDefault()
    console.log(email, password);
    // console.log(ref.current.value);
    try {
      // setError("")
      // setLoading(true)
      // await login(emailRef.current.value, passwordRef.current.value)
      // history.push("/")
    } catch {
      // setError("Failed to log in")
    }

    // setLoading(false)
  }

  const handleGoogleAuth = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
  };

  return (
    <div className={styles.page}>
      <Card>
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
        <Button
          label='Sign In'
          onClick={handleSignIn}
        />
        <div>or</div>
        <Button
          label='Sign In with Google'
          onClick={handleGoogleAuth}
        />
      </Card>
    </div>
  );
};

export default SignIn;