import React, { useContext, useState, useEffect, createContext } from "react"
import { auth, googleAuthProvider } from "../../firebase"
import 'firebase/auth';

const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser]: any = useState()
  const [loading, setLoading] = useState(true)

  function signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  function signupGoogle() {
    // const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleAuthProvider);
  }

  function login(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email: string) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email: string) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password: string) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    signupGoogle,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}