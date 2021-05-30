
import React, { useRef, useState } from "react"
// import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "./AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const passwordConfirmRef: any = useRef();
  const { signup, signupGoogle }: any = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e: any) {
    e.preventDefault()

    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //   return setError("Passwords do not match")
    // }
    console.log('abccc', emailRef.current.value);
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
      console.log('abccc', emailRef.current.value);
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false)
  }

  return (
    <>
      <div>
        <div>
          <h2 className="text-center mb-4">Sign Up</h2>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <input type="email" ref={emailRef} required />
            </div>
            <div>
              <label>Password</label>
              <input type="password" ref={passwordRef} required />
            </div>
            <div>
              <label>Password Confirmation</label>
              <input type="password" ref={passwordConfirmRef} required />
            </div>
            {/* <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group> */}
            {/* <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group> */}
            <button disabled={loading} className="w-100" type="submit">
              Sign Up
            </button>
          </form>

          <button disabled={loading} className="w-100" type="submit" onClick={signupGoogle} >
            google
          </button>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        {/* Already have an account? <Link to="/login">Log In</Link> */}
      </div>
    </>
  )
}